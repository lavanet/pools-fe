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
    id: 'products',
    title: 'Products',
    links: [
      {
        link: '/',
        title: 'Lava Gateway',
        description: 'Get easy-to-use access to RPC and APIs across 15+ networks.',
        icon: ''
      },
      {
        link: '/',
        title: 'Lava SDK',
        description: 'Try it now for free across 25+ networks.',
        icon: ''
      },
      {
        link: '/',
        title: 'Lava Info',
        description: 'View real-time Lava Network data, analytics, and performance.',
        icon: '️'
      },
      {
        link: '/',
        title: 'Block Explorer',
        description: 'Find and filter through transactions, proposals and metrics on the Lava blockchain.',
        icon: ''
      },
      {
        link: '/',
        title: 'Product Feedback',
        description: 'Share your thoughts on our products',
        icon: ''
      }
    ]
  },
  {
    id: 'learn',
    title: 'Learn',
    links: [
      {
        link: '/',
        title: 'What is Lava?',
        description: 'Discover the world of Lava',
        icon: ''
      },
      {
        link: '/',
        title: 'Blog',
        description: 'Stay updated with our latest articles',
        icon: ''
      },
      {
        link: '/',
        title: 'News and interviews',
        description: 'Catch up on recent news and interviews',
        icon: ''
      },
      {
        link: '/',
        title: 'Tokenomics',
        description: 'Understand our token economy',
        icon: ''
      },
      {
        link: '/',
        title: 'Roadmap',
        description: 'View our future plans and milestones',
        icon: ''
      },
      {
        link: '/',
        title: 'Whitepaper',
        description: 'Read our comprehensive whitepaper',
        icon: ''
      },
      {
        link: '/',
        title: 'Partnerships',
        description: 'Explore our collaborations and partnerships',
        icon: ''
      },
      {
        link: '/',
        title: 'Specs',
        description: 'View technical specifications',
        icon: ''
      }
    ]
  },
  {
    id: 'community',
    title: 'Community',
    links: [
      {
        link: '/',
        title: 'Twitter',
        description: 'Stay updated on Twitter',
        icon: ''
      },
      {
        link: '/',
        title: 'Discord',
        description: 'Join our Discord community',
        icon: ''
      },
      {
        link: '/',
        title: 'Forum',
        description: 'Engage in discussions on our forum',
        icon: ''
      },
      {
        link: '/',
        title: 'Run a Node',
        description: 'Become a node operator',
        icon: ''
      },
      {
        link: '/',
        title: 'Build Specs',
        description: 'Access build specifications',
        icon: ''
      },
      {
        link: '/',
        title: 'Join Us',
        description: 'Explore career opportunities',
        icon: ''
      }
    ]
  },
  {
    id: 'incentive-pools',
    title: 'Incentive Pools',
    links: [
      {
        link: '/',
        title: 'See all chains',
        description: 'View incentive pools across all supported chains',
        icon: ''
      },
      {
        link: '/',
        title: 'Axelar',
        description: 'Explore Axelar-specific incentives',
        icon: ''
      },
      {
        link: '/',
        title: 'Evmos',
        description: 'Check out Evmos-related incentives',
        icon: ''
      },
      {
        link: '/',
        title: 'Starknet',
        description: 'Discover Starknet-based incentives',
        icon: '💎'
      },
      {
        link: '/',
        title: 'Near',
        description: 'Learn about Near protocol incentives',
        icon: '🏠'
      },
      {
        link: '/',
        title: 'Ethereum',
        description: 'Explore Ethereum-based incentives',
        icon: '♦️'
      },
      {
        link: '/',
        title: 'Solana',
        description: 'Find Solana-specific incentives',
        icon: '☀️'
      },
      {
        link: '/',
        title: 'Filecoin',
        description: 'Understand Filecoin-related incentives',
        icon: '📁'
      },
      {
        link: '/',
        title: 'Osmosis',
        description: 'Discover Osmosis-based incentives',
        icon: '🔄'
      },
      {
        link: '/',
        title: 'Arbitrum Nova',
        description: 'Explore Arbitrum Nova incentives',
        icon: '✨'
      }
    ]
  },
]
