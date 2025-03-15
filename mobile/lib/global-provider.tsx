import React, { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from './supabase';
import { Session } from '@supabase/supabase-js';
import { ContextType, Props, UserProfile } from './type';

export const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

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

  const isLogged = !!session;

  return (
    <GlobalContext.Provider value={{ session, loading, isLogged }}>
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
