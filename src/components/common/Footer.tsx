'use client';

import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';
import { Stack, styled, Typography, TypographyProps } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import { LegalNavItems, navItems, SocialNavItems } from '@/utils/variables';
import { FooterCategory } from '@/components/common/FooterCategory';
import { FooterSocial } from '@/components/common/FooterSocial';
import { Logo } from '@/components';

export const Footer = () => {
  const isMobileSm = useMediaQuery(theme.breakpoints.down('sm'));
  return(
    <footer>

      <StyledFooterNav>

        <Stack spacing={3}>

          <Logo />

          <StyledTypography>
            Lava is a modular protocol where providers can quickly add
            support for any API and RPC. The multi-chain experience never
            felt so easy.
          </StyledTypography>

          <Stack direction="row" spacing={2}>
            {SocialNavItems.map((link, linkIdx) => (
              <FooterSocial
                key={linkIdx}
                link={link.link}
                title={link.title}
                icon={link.icon}
              />
            ))}
          </Stack>

        </Stack>

        <StyledFooterNavMenu>
          <FooterCategory
            links={[{ link: '/', title: 'Rollup Developers' }]}
          />
          {navItems.map((item) => (
            <FooterCategory key={item.title} {...item} />
          ))}
        </StyledFooterNavMenu>

      </StyledFooterNav>

      <StyledFooterNavCopyright useFlexGap spacing={2} flexWrap="wrap" direction="row" justifyContent="space-between">

        <StyledTypography variant="body2" component="span">
          © Lava Foundation., 2024. All Right Reserved.
        </StyledTypography>

        <Stack direction="row" spacing={8} useFlexGap display="inline-flex">
          {LegalNavItems.map((link, legalIdx) => (
            <Link href={link.link} key={legalIdx}>
              <StyledLink variant="body2">{link.title}</StyledLink>
            </Link>
          ))}
        </Stack>

      </StyledFooterNavCopyright>

      <StyledTagline>
        {isMobileSm? (
          <Image src="/images/lava-tagline-mobile-x2.webp" alt='Lava' width={288} height={322} />
        ):(
          <Image src="/images/lava-tagline-x2.webp" alt='Lava' width={1360} height={83} />
        )}
      </StyledTagline>
    </footer>
  );
};

const StyledFooterNav = styled('nav')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'flex-start',
  gap: theme.spacing(3),

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '220px 1fr',
  },
}));

const StyledFooterNavMenu = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'flex-start',
  gap: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

const StyledFooterNavCopyright = styled(Stack)(({ theme }) => ({
  marginTop: 28,
}));

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[200],
  flex: '0 0 auto',
}));

const StyledLink = styled(StyledTypography)(({ theme }) => ({
  transition: 'color 0.3s',

  '&:hover': {
    color: theme.palette.common.white
  },
}));

const StyledTagline = styled('div')(({ theme }) => ({
  padding: theme.spacing(10,0, 5),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 0),
  },

  '& img': {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  }
}));
