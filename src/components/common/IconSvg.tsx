'use client'

import { styled } from '@mui/material';
import { ReactNode } from 'react';

type IconSvgProps = {
  children: ReactNode;
};

export const IconSvg = ({ children }: IconSvgProps) => (
  <StyledIcon>{children}</StyledIcon>
);

const StyledIcon = styled('i')(() => ({
  display: 'inline-flex',
  height: '1em',
  width: '1em',
  color: 'inherit',
}));
