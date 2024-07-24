'use client';

import {
  Button,
  Snackbar,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Space_Grotesk, DotGothic16 } from 'next/font/google';
import { SyntheticEvent, useRef, useState } from 'react';

import { CTAEmailSocial } from '@/modules';
import { addEmail } from '@/actions';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });
const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'] });

export const CTAEmail = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addEmail(formData);

    console.log('data', data);
    console.log('error', error);

    if (error) {
      setHelperText(error);
    } else {
      setHelperText('');
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <StyledCTAEmail alignItems="center" spacing={4}>
        <StyledTypography
          align="center"
          className={spaceGrotesk.className}
          variant="h1"
        >
          Stay updated on volcanic activity
        </StyledTypography>

        <StyledForm action={clientAction} ref={formRef}>
          <StyledTextField
            id="email"
            helperText={helperText}
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />

          <StyledButton size="large" type="submit" variant="contained">
            Get notified
          </StyledButton>
        </StyledForm>

        <Stack spacing={3}>
          <Typography
            align="center"
            className={dotGothic16.className}
            color="primary"
            variant="h6"
          >
            Join Our Community
          </Typography>

          <Stack direction="row" spacing={3}>
            <CTAEmailSocial icon="discord" />
            <CTAEmailSocial icon="uxwing" />
            <CTAEmailSocial icon="telegram" />
            <CTAEmailSocial icon="github" />
          </Stack>
        </Stack>
      </StyledCTAEmail>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        message={`The email address ${email} has been successfully added to our records`}
        open={openSnackbar}
        onClose={handleClose}
      />
    </>
  );
};

const StyledCTAEmail = styled(Stack)(({ theme }) => ({
  backgroundImage: 'url("/images/cta_email_bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #FF3900',
  borderRadius: 32,
  padding: theme.spacing(14),
}));

const StyledTypography = styled(Typography)({ maxWidth: 692 });

const StyledForm = styled('form')({ position: 'relative' });

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.common.white,
    borderRadius: 40,
    color: theme.palette.text.secondary,
    height: 62,
    paddingRight: 160, // Get notified button width
    paddingLeft: theme.spacing(1),
    width: 402,

    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: 40,
      transition: 'all 0.3s',
    },

    '& .MuiOutlinedInput-root ::placeholder': {
      color: theme.palette.grey[300],
    },
  },

  '& .MuiFormHelperText-root': {
    color: theme.palette.primary.main,
    position: 'absolute',
    bottom: -24,
  },
}));

const StyledButton = styled(Button)({
  position: 'absolute',
  right: 8,
  top: 7,
});
