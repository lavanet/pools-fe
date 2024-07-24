'use client';

import { Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';

import { IDataCard } from '@/types';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '500', subsets: ['latin'] });

export const DataCard = ({ message, title, value }: IDataCard) => (
  <StyledDataCard spacing={2}>
    <StyledStack spacing={0.5}>
      <Typography variant="h3">{title}</Typography>
      {message && (
        <StyledTypography variant="body2">{message}</StyledTypography>
      )}
    </StyledStack>

    <Typography className={spaceGrotesk.className} variant="h2">
      {value}
    </Typography>
  </StyledDataCard>
);

const StyledDataCard = styled(Stack)(({ theme }) => ({
  backgroundImage: 'url("/images/blur_bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #212630',
  borderRadius: 20,
  height: '100%',
  padding: theme.spacing(3),
}));

const StyledStack = styled(Stack)({ flexGrow: 1 });

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
}));
