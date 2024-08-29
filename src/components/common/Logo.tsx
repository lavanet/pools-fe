'use client'

import {styled} from '@mui/material';
import Link, { LinkProps } from 'next/link';

import MainLogo from "@assets/images/logo.svg";

export const Logo = () => {
  return (
    <StyledLink href="/" title="Home">
      <MainLogo/>
    </StyledLink>
  );
};

const StyledLink = styled(Link)<LinkProps>({
  flexShrink: 0,
  display: "inline-flex",
  alignItems: 'center',
});