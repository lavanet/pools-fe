'use client';

import Link from 'next/link';

import { IconSvg } from '@/components';
import { IconButton, styled } from '@mui/material';
import { ReactNode } from 'react';
import { IconDiscord, IconGithub, IconUXWing } from '@/icons';

type Icon = 'discord' | 'github' | 'uxwing';

type FooterSocialProps = {
  icon: Icon;
  link: string;
};

const icons: Record<Icon, ReactNode> = {
  discord: <IconDiscord />,
  github: <IconGithub />,
  uxwing: <IconUXWing />,
};

export const FooterSocial = ({ icon, link }: FooterSocialProps) => (
  <Link href={link}>
    <StyledIconButton>
      <IconSvg>{icons[icon]}</IconSvg>
    </StyledIconButton>
  </Link>
);

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 32,
  padding: 0,
  transition: 'color 0.3s',

  '&:hover': { color: theme.palette.primary.main },
}));
