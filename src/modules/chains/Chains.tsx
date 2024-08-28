'use client';

import { Search } from '@mui/icons-material';
import {
  Grid,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { sharpGroteskMedium } from '@/types/fonts';

import { Banner } from '@/components';
import { useState } from 'react';
import { ChainsTable } from '@/modules';
import useDebounce from '@/hooks/useDebounce';

export const Chains = () => {
  const [searchValue, setSeachValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  return (
    <StyledChains>

      <StyledGrid>

        <Stack>
          <Typography className={sharpGroteskMedium.className} variant="h2">
            Other chains
          </Typography>

          <StyledTypography variant="h5">
            Chains that do not yet have incentivized pools.
          </StyledTypography>
        </Stack>

        <Banner
          extraClassName='chains-banner'
          button="Learn more"
          link="/"
          message="Add it yourself as a specification and earn LAVA for every request served"
          title="Don't see your favourite chain?"
        />

        <StyledTextField
          placeholder="Search chain name"
          value={searchValue}
          onChange={(e) => {
            setSeachValue(e.currentTarget.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

      </StyledGrid>

      <ChainsTable
        filter={debouncedSearchValue}
      />

    </StyledChains>
  );
};

const StyledChains = styled('section')(({ theme }) => ({
  paddingBottom: theme.spacing(14),
  paddingTop: theme.spacing(10),
}));

const StyledGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'auto',
  alignItems: 'center',
  gap: '32px 20px',
  gridTemplateColumns: '1fr 674px',

  '& .chains-banner': {
    backgroundColor: 'blue',

    [theme.breakpoints.up('md')]: {
      gridRow: 'span 3'
    },
  },

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledTextField = styled(TextField)({
  maxWidth: 445,
  marginBottom: '0',
});
