'use client';

import {
  Button, InputAdornment,
  Snackbar,
  Stack,
  styled,
  TextField,
  Typography, TypographyProps,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';
import { SyntheticEvent, useRef, useState } from 'react';

import { HomeSectionCTAEmailSocial } from '@/components';
import { addEmail } from '@/actions';
import { SocialNavItems } from '@/utils/variables';

export const HomeSectionCTAEmail = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

        <StyledH2
          component="h2"
          variant="h1"
        >
          Stay updated on volcanic activity
        </StyledH2>

        <StyledForm action={clientAction} ref={formRef}>
          <StyledTextField
            id="email"
            helperText={helperText}
            name="email"
            placeholder="Enter your email"
            value={email}
            variant="filled"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            InputProps={{
              endAdornment: (
                <>
                  {!isMobile && (
                    <InputAdornment position="end">
                      <StyledButton size="large" type="submit" variant="contained">
                        Get notified
                      </StyledButton>
                    </InputAdornment>
                  )}
                </>
              ),
            }}
          />

          {isMobile && (
            <StyledButton size="large" type="submit" variant="contained">
              Get notified
            </StyledButton>
          )}

        </StyledForm>

        <Stack spacing={3}>

          <StyledH3
            component='h3'
            align="center"
            color="primary"
            variant="h6"
          >
            Join Our Community
          </StyledH3>

          <Stack direction="row" spacing={3}>

            {SocialNavItems.map((link, linkIdx) => (
              <HomeSectionCTAEmailSocial
                key={linkIdx}
                icon={link.icon}
                link={link.link}
                title={link.title}
              />
            ))}

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
  backgroundImage: 'url("/images/lava-cta-bg-x2.webp")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #FF3900',
  borderRadius: 32,
  padding: theme.spacing(14),
}));

const StyledH2 = styled(Typography)<TypographyProps>({
  maxWidth: 692,
  fontFamily: 'sharp_groteskmedium_25',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '28px',
    letterSpacing: '-0.01em',
  }
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    padding: '6px 24px',
    minHeight: '48px',

    '& .MuiInputBase-input ::placeholder': {
      color: 'red',
    },
  },

  [theme.breakpoints.up('md')]: {
    '& .MuiInputBase-root': {
      minHeight: '62px',
      padding: '12px 8px 12px 24px',
    },
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: 16,
}));

const StyledH3 = styled(Typography)<TypographyProps>({
  fontFamily: 'retro_computer',
  textAlign: 'center',
});
