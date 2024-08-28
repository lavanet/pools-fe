'use client';

import { IconButton, styled } from '@mui/material';
import { ReactNode } from 'react';
import Link from 'next/link';

import { IconSvg } from '@/components/index';
import { IconDiscord, IconGithub, IconTelegram, IconUXWing } from '@/icons';

type Icon = 'discord' | 'github' | 'telegram' | 'uxwing';

type CTAEmailSocialProps = {
  icon: Icon;
};

const icons: Record<Icon, ReactNode> = {
  discord: <IconDiscord />,
  github: <IconGithub />,
  telegram: <IconTelegram />,
  uxwing: <IconUXWing />,
};

export const HomeSectionCTAEmailSocial = ({ icon }: CTAEmailSocialProps) => (
  <Link href="/">
    <StyledIconButton>
      <IconSvg>{icons[icon]}</IconSvg>
    </StyledIconButton>
  </Link>
);

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '50%',
  color: theme.palette.grey[600],
  fontSize: 32,
  height: 72,
  transition: 'color 0.3s',
  width: 72,

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
}));
