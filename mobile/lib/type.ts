import { Session } from '@supabase/supabase-js';

type ContextType = {
  isLogged: boolean;
  session: Session | null;
  loading: boolean;
};

type Props = {
  children: React.ReactNode;
};

type UserProfile = {
  username: string;
  email: string;
  full_name: string;
  password: string;
  bio: string;
  avatar_url: string;
};

export type { ContextType, Props, UserProfile };
