'use client';

import { Stack, styled, Typography } from '@mui/material';
import { sharpGroteskBook } from '@/types/fonts';
import { IDataCard } from '@/types';

export const DataCardItem = ({ message, title, value }: IDataCard) => (
  <StyledDataCard spacing={2}>

    <StyledStack spacing={0.5}>
      <Typography variant="h6">{title}</Typography>
      {message && (
        <StyledTypography variant="body2">{message}</StyledTypography>
      )}
    </StyledStack>

    <Typography
      className={sharpGroteskBook.className}
      variant="h2"
      sx={{
        letterSpacing: '-0.004em',
      }}
    >
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
