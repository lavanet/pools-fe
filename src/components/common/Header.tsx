'use client';

import { Button, Stack, styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { navItems } from '@/utils/variables';
import { theme } from '@/contexts';

import { HeaderDropdown } from '@/components/common/HeaderDropdown';
import { MobileMenu } from '@/components/common/MobileMenu';
import { Logo } from '@/components';
import { navItems } from '@/utils/variables';

export const Header = () => {
  const islaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledHeader>
        <Logo/>

      {isMobile?(
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
            title="Read Docs"
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
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
  },
}));
