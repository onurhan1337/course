import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import MagicLinkForm from '@/components/magic-link-form';

export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect('/videos');
  }

  return (
    <div className="fixed left-1/2 top-1/2 mx-auto flex w-full max-w-[354px] -translate-x-1/2 -translate-y-1/2 flex-col">
      <MagicLinkForm />
    </div>
  );
}
