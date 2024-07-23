'use client';

import Image from 'next/image';
import { Button, Stack, styled } from '@mui/material';

import { HeaderDropdown } from '@/modules';
import { INavItem } from '@/types';

const navItems: INavItem[] = [
  { title: 'Rollup Developers' },
  {
    title: 'Products',
    links: [
      { link: '/', title: 'Lava Gateway' },
      { link: '/', title: 'Lava SDK' },
      { link: '/', title: 'Lava Info' },
      { link: '/', title: 'Block Explorer' },
      { link: '/', title: 'Product Feedback' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { link: '/', title: 'What is Lava?' },
      { link: '/', title: 'Blog' },
      { link: '/', title: 'News and interviews' },
      { link: '/', title: 'Tokenomics' },
      { link: '/', title: 'Roadmap' },
      { link: '/', title: 'Whitepaper' },
      { link: '/', title: 'Partnerships' },
      { link: '/', title: 'Specs' },
    ],
  },
  {
    title: 'Community',
    links: [
      { link: '/', title: 'Twitter' },
      { link: '/', title: 'Discord' },
      { link: '/', title: 'Forum' },
      { link: '/', title: 'Run a Node' },
      { link: '/', title: 'Build Specs' },
      { link: '/', title: 'Join Us' },
    ],
  },
  {
    title: 'Incentive Pools',
    links: [
      { link: '/', title: 'See all chains' },
      { link: '/', title: 'Axelar' },
      { link: '/', title: 'Evmos' },
      { link: '/', title: 'Starknet' },
      { link: '/', title: 'Near' },
      { link: '/', title: 'Ethereum' },
      { link: '/', title: 'Solana' },
      { link: '/', title: 'Filecoin' },
      { link: '/', title: 'Osmosis' },
      { link: '/', title: 'Arbitrum Nova' },
    ],
  },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Image alt="Logo" height={34} src="/images/logo.svg" width={108} />

        <Stack direction="row">
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
