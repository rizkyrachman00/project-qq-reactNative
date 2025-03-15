import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';

import { getCurrentUser, loginWithGoogle } from '@/lib/supabase';
import { useGlobalContext } from '@/lib/global-provider';
import { icons, images } from '@/constants';
import { useSupabase } from '@/hooks/useSupabase';

const SignIn = () => {
  const { loading, isLogged, session, data } = useGlobalContext();

  console.log('ini data', data);
  console.log('ini session', session);

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await loginWithGoogle();

    if (result) {
      console.log('ini data', data);
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className=" w-full h-4/6" resizeMode="contain" />
        <View>
          <Text className="text-base text-center uppercase font-rubik text-white">
            Selamat Datang di BlackBox Camp
          </Text>
          <Text className="text-5xl font-rubik-bold text-secondary text-center mt-6">
            Fitnes Itu Seru !
          </Text>
          <Text className="text-xl font-rubik-bold text-white text-center mt-1">
            Let’s Get Closer To <Text className="text-green">Your Body Goals</Text>
          </Text>

          <Text className="text-xl text-slate-200 text-center mt-10 font-rubik">
            Masuk BlackBox dengan Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full py-4 mx-6 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-primary ml-2">
                Melanjutkan dengan Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
