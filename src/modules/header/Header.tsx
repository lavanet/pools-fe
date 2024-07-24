'use client';

import Image from 'next/image';
import { Button, Stack, styled } from '@mui/material';

import { HeaderDropdown } from '@/modules';
import { navItems } from '@/utils/variables';

export const Header = () => {
  return (
    <StyledHeader>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Image alt="Logo" height={34} src="/images/logo.svg" width={108} />

        <Stack direction="row">
          <HeaderDropdown title="Rollup Developers" />
          {navItems.map((item) => (
            <HeaderDropdown key={item.title} {...item} />
          ))}
        </Stack>

        <Button color="secondary" size="large" variant="contained">
          Read Docs
        </Button>
      </Stack>
    </StyledHeader>
  );
};

const StyledHeader = styled('header')({ padding: '20px 0' });
