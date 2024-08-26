'use client';

import Image from 'next/image';
import { Button, Stack, styled } from '@mui/material';

import { HeaderDropdown } from '@/modules';
import { navItems } from '@/utils/variables';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';
import { MobileMenu } from '@/modules/header/MobileMenu';

export const Header = () => {
  const islaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledHeader>
      <Image alt="Logo" height={34} src="/images/logo.svg" width={108} />

      {isTablet?(
        <MobileMenu/>
      ):(
        <>
          <Stack direction="row">
            <HeaderDropdown title="Rollup Developers" />
            {navItems.map((item) => (
              <HeaderDropdown key={item.title} {...item} />
            ))}
          </Stack>

          <Button
            color="secondary"
            size={islaptop? "medium" : 'large'}
            variant="contained"
          >
            Read Docs
          </Button>
        </>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '88px',
  padding: '0',
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 9999,
    width: '100%',
    height: '60px',
    padding: '0px 20px',
  },
}));
