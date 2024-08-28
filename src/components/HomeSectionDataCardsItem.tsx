'use client';

import { Stack, styled, Typography } from '@mui/material';
import { IDataCard } from '@/types';

export const DataCardItem = ({ message, title, value }: IDataCard) => (
  <StyledDataCard spacing={2} useFlexGap>

    <StyledStack spacing={0.5} useFlexGap>

      <Typography variant="h6">
        {title}
      </Typography>

      {message && (
        <StyledTypography variant="body2">
          {message}
        </StyledTypography>
      )}

    </StyledStack>

    <StyledH2 variant="h2">
      {value}
    </StyledH2>
  </StyledDataCard>
);

const StyledDataCard = styled(Stack)(({ theme }) => ({
  backgroundImage: 'url("/images/lava-grain-bg-x2.webp")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #212630',
  borderRadius: 20,
  height: '100%',
  padding: theme.spacing(3),
}));

const StyledStack = styled(Stack)({
  flexGrow: 1,
});

const StyledH2 = styled(Typography)(({ theme }) => ({
  fontFamily: 'sharp_groteskbook_25',
  letterSpacing: '-0.004em',

  [theme.breakpoints.down('md')]: {
    fontSize: '26px',
    lineHeight: '1.4em',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(20px, 4.333vw, 26px)',
    lineHeight: '1.4em',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
}));
