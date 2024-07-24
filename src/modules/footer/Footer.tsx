'use client';

import { Grid, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { FooterCategory, FooterSocial } from '@/modules';
import { navItems } from '@/utils/variables';

export const Footer = () => (
  <StyledFooter>
    <Stack spacing={3}>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Stack spacing={3}>
              <Image
                alt="Logo"
                height={34}
                src="/images/logo.svg"
                width={108}
              />

              <StyledTypography>
                Lava is a modular protocol where providers can quickly add
                support for any API and RPC. The multi-chain experience never
                felt so easy.
              </StyledTypography>

              <Stack direction="row" spacing={2}>
                <FooterSocial icon="discord" link="/" />
                <FooterSocial icon="github" link="/" />
                <FooterSocial icon="uxwing" link="/" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={9}>
            <Stack direction="row" spacing={3}>
              <FooterCategory
                links={[{ link: '/', title: 'Rollup Developers' }]}
              />
              {navItems.map((item) => (
                <FooterCategory key={item.title} {...item} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </div>

      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <StyledTypography variant="body2">
          © Lava Foundation., 2024. All Right Reserved.
        </StyledTypography>

        <Stack direction="row" spacing={8}>
          <Link href="/">
            <StyledLink variant="body2">Terms Of Service</StyledLink>
          </Link>

          <Link href="/" passHref>
            <StyledLink variant="body2">Privacy Policy</StyledLink>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  </StyledFooter>
);

const StyledFooter = styled('footer')(({ theme }) => ({
  paddingBottom: theme.spacing(8),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
}));

const StyledLink = styled(StyledTypography)(({ theme }) => ({
  transition: 'color 0.3s',
  '&:hover': { color: theme.palette.common.white },
}));
