import React, { useState, useEffect, createContext, useContext } from 'react';
import { getCurrentUser, supabase } from './supabase';
import { Session } from '@supabase/supabase-js';
import { ContextType, Props } from './type';
import { useSupabase } from '@/hooks/useSupabase';

export const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  const { data, refetch } = useSupabase({
    fn: getCurrentUser,
  });

  useEffect(() => {
    setLoading(true);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const isLoggedIn = !!session;

  return (
    <GlobalContext.Provider value={{ session, loading, isLoggedIn, refetch, data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): ContextType => {
  const context = useContext(GlobalContext);

  if (!context) throw new Error('useGlobalContext must be used within a GlobalProvider');

  return context;
};

export default GlobalProvider;
