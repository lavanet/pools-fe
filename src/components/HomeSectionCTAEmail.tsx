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
      <StyledCTAEmail>

        <StyledWrapper alignItems="center" spacing={4}>

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

        </StyledWrapper>

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

const StyledCTAEmail = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '1px',
  borderRadius: 32,
  overflow: 'hidden',

  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    margin: 'auto',
    borderRadius: 32,
    border: '1px solid transparent',
    background: 'linear-gradient(132.03deg, #FF3900 0%, rgba(255, 57, 0, 0.27) 42.88%) border-box',
    mask: 'linear-gradient(to bottom, black 0, black 100%) content-box, linear-gradient(to bottom, black 0, black 100%)',
    webkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },

  [theme.breakpoints.down('md')]: {
    borderRadius: 16,

    '&:before': {
      borderRadius: 16,
    },
  },
}));

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(14, 3),
  background: 'url("/images/lava-cta-bg-x2.webp") no-repeat center /cover',
  borderRadius: 32,
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5, 2),
    borderRadius: 16,
  },

  [theme.breakpoints.down('sm')]: {
    background: 'url("/images/lava-cta-bg-mobile-x2.webp") no-repeat center /cover',
  },
}));

const StyledH2 = styled(Typography)<TypographyProps>({
  width: '100%',
  maxWidth: 692,
  margin: '0 auto',
  fontFamily: 'sharp_groteskmedium_25',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    maxWidth: 256,
    fontSize: 20,
    lineHeight: '28px',
    letterSpacing: '-0.01em',
  }
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  maxWidth: '406px',

  [theme.breakpoints.down('md')]: {
    paddingBottom: 72,
  }
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
  fontSize: '16px !important',
}));

const StyledH3 = styled(Typography)<TypographyProps>({
  fontFamily: 'retro_computer',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    lineHeight: 1,
    letterSpacing: '0.08em'
  }
});
