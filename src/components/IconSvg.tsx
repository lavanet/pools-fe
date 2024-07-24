import { styled } from '@mui/material';
import { ReactNode } from 'react';

type IconSvgProps = {
  children: ReactNode;
};

export const IconSvg = ({ children }: IconSvgProps) => (
  <StyledIcon>{children}</StyledIcon>
);

const StyledIcon = styled('div')(() => ({
  color: 'inherit',
  display: 'inline-block',
  height: '1em',
  width: '1em',
}));
