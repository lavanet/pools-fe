'use client'

import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useMediaQuerySafe } from '@/hooks';
import { addEmail } from '@/actions';
import { Input, Button } from '@/components';

export const HomeSectionHeroEmailForm = () => {
  const isMobile /* boolean | undefined */ = useMediaQuerySafe('(max-width: 991px)');

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

        <Input
          type="email"
          name="email"
          inputStyle="filled"
          labelText="Enter your email"
          labelIsHidden
          placeholder="Enter your email"
          inputGroupText={
            isMobile ? undefined :(
              <Button
                extraClassName="c-desktop"
                type="submit"
                btnSize="lg"
                text="Get notified"
              />
            )
          }
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />

        {isMobile && (
          <Button
            extraClassName="c-mobile"
            type="submit"
            text="Get notified"
          />
        )}

        <ToastContainer />

      </form>

    </>
  );
};