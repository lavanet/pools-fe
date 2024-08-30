'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { styled } from '@mui/material';

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
  <StyledLink
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    title={title}
  >
    <i>{icon}</i>
  </StyledLink>
);

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  width: 32,
  color: theme.palette.common.white,
  padding: 0,
  transition: 'color 0.3s ease',

  '& i': {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },

  '& svg': {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },

  '&:hover, &:focus': {
    color: theme.palette.primary.main
  },
}));
