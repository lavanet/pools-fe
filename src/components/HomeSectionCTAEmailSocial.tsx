'use client';

import { IconButton, styled } from '@mui/material';
import { ReactNode } from 'react';
import Link from 'next/link';
import { theme } from '@/contexts';

type CTAEmailSocialProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

export const HomeSectionCTAEmailSocial = ({ link, title, icon }: CTAEmailSocialProps) => (
  <Link href={link} title={title} target="_blank" rel="noreferrer noopener">
    <StyledIconButton>
      {icon}
    </StyledIconButton>
  </Link>
);

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '50%',
  height: 72,
  width: 72,
  color: theme.palette.grey[600],
  fontSize: 32,
  transition: 'color 0.3s',

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    height: 48,
    width: 48,
  }
}));
