'use client'

import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { CustomInput, CustomButton } from '@/components';
import { addEmail } from '@/actions';
import { toast, ToastContainer } from 'react-toastify';

export const HomeSectionHeroEmailForm = () => {
  const isMobile /* boolean | undefined */ = useMediaQuery('(max-width: 991px)', {
    initializeWithValue: false,
  })

  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addEmail(formData);

    if (error) {
      setHelperText(error);
    } else {
      setHelperText('');
      toast.success(`The email address ${email} has been successfully added to our records`, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <form action={clientAction} ref={formRef}>

        <CustomInput
          type="text"
          name="email"
          inputStyle="filled"
          labelText="Enter your email"
          labelIsHidden
          placeholder="Enter your email"
          inputGroupText={
            <>
              {!isMobile && (
                <CustomButton type="submit" btnSize="lg" text="Get notified"/>
              )}
            </>
          }
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />

        {isMobile && (
          <CustomButton type="submit" text="Get notified"/>
        )}

        <ToastContainer />

      </form>

    </>
  );
};