'use client';

import { Button, ButtonProps, Container, ContainerProps, Stack, styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';

import { navItems } from '@/utils/variables';
import Link from 'next/link';
import { Logo } from '@/components';
import { HeaderDropdown } from '@/components/common/HeaderDropdown';
import { MobileMenu } from '@/components/common/MobileMenu';

export const Header = () => {
  const islaptop = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledHeader maxWidth={false}>

      <StyledNav maxWidth="xl" component='nav'>

        <Logo/>

        {isMobile?(
          <MobileMenu/>
        ):(
          <>
            <Stack direction="row">
              <StyledButton
                href="#"
                variant='contained'
                color='ghost'
                component={Link}
                title="Rollup Developers"
              >
                Rollup Developers
              </StyledButton>

              {navItems.map((item) => (
                <HeaderDropdown key={item.title} {...item} />
              ))}
            </Stack>

            <Button
              component={Link}
              href="#"
              color="secondary"
              size={islaptop? "medium" : 'large'}
              variant="contained"
              title="Read Docs"
            >
              Read Docs
            </Button>
          </>
        )}
      </StyledNav>

    </StyledHeader>
  );
};

const StyledHeader = styled(Container)<ContainerProps>(({ theme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 9998,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '88px',
  backgroundColor: theme.palette.background.default,

  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: 1,
    backgroundColor: theme.palette.grey[400],
  },

  [theme.breakpoints.down('md')]: {
    height: '60px',
    padding: '0px 20px',
  },
}));

const StyledNav = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
}));


const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: 16
}));