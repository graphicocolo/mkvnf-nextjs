import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  'use server';
  const supabase = await createClient();
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) return;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath('/');
  redirect('/');
}

export async function loginGoogle() {
  'use server';
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  if (!data.url) {
    console.error('No URL returned from Supabase');
    return;
  }

  redirect(data.url);
}
