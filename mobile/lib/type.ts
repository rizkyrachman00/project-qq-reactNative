import { Session } from '@supabase/supabase-js';

type ContextType = {
  session: Session | null;
  data: {} | null;
  loading: boolean;
  isLoggedIn: boolean;
  refetch: (newParams: Record<string, string | number>) => Promise<void>;
};

type Props = {
  children: React.ReactNode;
};

export type { ContextType, Props };
