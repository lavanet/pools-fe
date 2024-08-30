'use client';

import { IconButton, styled } from '@mui/material';
import { ReactNode } from 'react';
import Link from 'next/link';

type CTAEmailSocialProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

export const HomeSectionCTAEmailSocial = ({ link, title, icon }: CTAEmailSocialProps) => (
  <StyledIconButton
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    title={title}
  >
    <i>{icon}</i>
  </StyledIconButton>
);

const StyledIconButton = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 72,
  width: 72,
  backgroundColor: theme.palette.common.white,
  borderRadius: '50%',
  color: theme.palette.grey[600],
  transition: 'color 0.3s',

  '& i': {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },

  '& svg': {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down('md')]: {
    height: 48,
    width: 48,

    '& i': {
      width: 24,
      height: 24,
    },
  }
}));
