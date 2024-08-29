import { INavItem, INavItemLink } from '@/types';
import {IcnDiscord, IcnX, IcnTelegram, IcnGithub} from '@assets/icons';

export const SocialNavItems: INavItemLink[] = [
  {
    link: "https://discord.gg/Tbk5NxTCdA",
    title: "Discord",
    icon: <IcnDiscord/>
  },
  {
    link: "https://twitter.com/lavanetxyz",
    title: "X",
    icon: <IcnX/>
  },
  // {
  //   link: "https://discord.gg/Tbk5NxTCdA",
  //   title: "Telegram",
  //   icon: <IcnTelegram/>
  // },
  {
    link: "https://github.com/lavanet",
    title: "Github",
    icon: <IcnGithub/>
  },
]

export const LegalNavItems: INavItemLink[] = [
  {
    link: "/",
    title: "Privacy Policy",
  },
  {
    link: "/",
    title: "Terms of Service",
  },
]

export const navItems: INavItem[] = [
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