'use server';

import { revalidatePath } from "next/cache";

interface IFormValues {
  email: string;
}

interface IResult {
  data?: IFormValues;
  error?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function addEmail(formData: FormData): Promise<IResult> {
  const emailValue = formData.get('email');

  // Check for email value
  if (!emailValue || emailValue === '' ) {
    return { error: 'Email is required' };
  }

  // Ensure the email is a string
  const email: string = emailValue.toString(); 

  // Validate email
  if (!emailRegex.test(email)) {
    return { error: 'Please enter the correct email' };
   }

  try {
    //  TODO: Send the email to the server
    const result = { email };
    revalidatePath('/');

    return { data: result};
  } catch (error) {
    return { error: 'Email not added' };
  }
}
