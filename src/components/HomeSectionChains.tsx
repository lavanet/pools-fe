'use client';

import { Search } from '@mui/icons-material';
import {
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import { Banner } from '@/components/common/Banner';
import { useState } from 'react';
import { HomeSectionChainsTable } from '@/components';
import useDebounce from '@/hooks/useDebounce';

export const HomeSectionChains = () => {
  const [searchValue, setSeachValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  return (
    <StyledChains>

      <StyledGrid>

        <StyledStack useFlexGap spacing={1}>

          <StyledH2>
            Other chains
          </StyledH2>

          <StyledTypography variant="h5">
            Chains that do not yet have incentivized pools.
          </StyledTypography>

        </StyledStack>

        <Banner
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

      <HomeSectionChainsTable
        filter={debouncedSearchValue}
      />

    </StyledChains>
  );
};

const StyledChains = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  paddingBottom: theme.spacing(14),
  paddingTop: theme.spacing(10),
}));

const StyledGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr 674px',
  alignItems: 'flex-start',
  gap: '32px 16px',

  '& .lavuci': {
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

const StyledStack = styled(Stack)(({ theme }) => ({

}));

const StyledH2 = styled('h2')(({ theme }) => ({
  margin: 0,
  fontFamily: 'sharp_groteskmedium_25',
  fontSize: 32,
  lineHeight: '44.8px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledTextField = styled(TextField)({
  maxWidth: 445,
  marginBottom: '0',
});
