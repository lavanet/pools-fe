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
import { Space_Grotesk } from 'next/font/google';

import { Banner } from '@/components';
import { useState } from 'react';
import { ChainsTable } from '@/modules';
import useDebounce from '@/hooks/useDebounce';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '500', subsets: ['latin'] });

export const Chains = () => {
  const [searchValue, setSeachValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  return (
    <StyledChains spacing={4}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography className={spaceGrotesk.className} variant="h2">
                  Other chains
                </Typography>

                <StyledTypography variant="h5">
                  Chains that do not yet have incentivized pools.
                </StyledTypography>
              </Stack>

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
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Banner
              button="Learn more"
              link="/"
              message="Add it yourself as a specification and earn LAVA for every request served"
              title="Don't see your favourite chain?"
            />
          </Grid>
        </Grid>
      </div>

      <ChainsTable filter={debouncedSearchValue} />
    </StyledChains>
  );
};

const StyledChains = styled(Stack)(({ theme }) => ({
  paddingBottom: theme.spacing(14),
  paddingTop: theme.spacing(10),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledTextField = styled(TextField)({ maxWidth: 445 });
