'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { IconSvg } from '@/components/common/IconSvg';
import { IconButton, styled } from '@mui/material';

type FooterSocialProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

export const FooterSocial = (
  {
    link,
    title,
    icon,
  }: FooterSocialProps) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <StyledIconButton title={title}>
      <IconSvg>{icon}</IconSvg>
    </StyledIconButton>
  </Link>
);

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 32,
  padding: 0,
  transition: 'color 0.3s',

  '&:hover, &:focus': {
    color: theme.palette.primary.main
  },
}));
