import { createClient } from '@/lib/supabase/server';

const BASE_URL = 'https://course-onurhan.vercel.app';

export async function GET(request: Request) {
  const supabase = createClient();
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/customers?filter[email]=${email}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMON_SQUEEZY_KEY}`,
          Accept: 'application/json',
        },
      },
    );

    const { data: foundCustomers } = await res.json();

    if (foundCustomers.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No customer found with that email' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const { data: magicLink, error: authError } =
      await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${BASE_URL}/videos`,
        },
      });

    if (authError) {
      throw new Error(authError.message);
    }

    return new Response(JSON.stringify({ magicLink }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// YAPILACAKLAR
// 1. magic link ile giriş yapmayı test et
// 2. eğer sorun varsa, sorunu çöz
// 3. eğer sorun yoksa, kullanıcı giriş yaptıktan sonra header'ı güncelle
// 4. header'ı güncelledikten sonra sayfaları güvenli hale getirmek için gerekli adımları at
// 5. sayfaları güvenli hale getirdikten sonra, kullanıcıların video izlemesini sağlamak MDX kurulumu yaparak başla
