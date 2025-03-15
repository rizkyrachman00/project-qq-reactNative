import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './constants';

import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import { makeRedirectUri } from 'expo-auth-session';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

export async function loginWithGoogle() {
  try {
    const redirectUri = Linking.createURL('/');
    // const redirectTo = makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUri,
        skipBrowserRedirect: true,
      },
    });

    if (error || !data.url) throw new Error('Failed to create OAUTH2 token');

    const browserResult = await openAuthSessionAsync(data?.url ?? '', redirectUri);
    // const browserResult = await openAuthSessionAsync(data?.url ?? '', redirectTo);
    // const browserResult = await openAuthSessionAsync(data.url, redirectUri);

    if (browserResult.type !== 'success') throw new Error('Login Canceled');

    if (browserResult.type === 'success') {
      const { url } = browserResult;
      await createSessionFromUrl(url);
    }

    console.log('Login Successful', 'You have logged in with Google!');

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !sessionData.session) throw new Error('Failed to retrieve session');

    console.log('User session: ', sessionData.session);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const result = await supabase.auth.signOut();
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw error;

    if (user) {
      return {
        // ...user,
        id: user.id,
        email: user.email,
        fullName: user.user_metadata?.full_name || 'BlackBox Member',
        userAvatar: user.user_metadata?.avatar_url || null,
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
