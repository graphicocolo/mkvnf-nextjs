import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function signup(formData: FormData) {
  'use server';
  const supabase = await createClient();
  const email = formData.get('email');
  const password = formData.get('password');
  console.log(email, password);
  if (!email || !password) return;
  const { data, error } = await supabase.auth.signUp({
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
