import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export default async function Videos() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/');
  }

  return (
    <div className="fixed left-1/2 top-1/2 mx-auto flex w-full max-w-[354px] -translate-x-1/2 -translate-y-1/2 flex-col">
      <p>
        Welcome to the Videos page! This is a placeholder for the actual
        content.
      </p>
    </div>
  );
}
