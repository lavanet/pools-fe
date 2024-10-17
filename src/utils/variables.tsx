import { IDataCard, INavItem, INavItemLink, IProduct } from '@/types';
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
    link: "https://www.lavanet.xyz/privacy-policy",
    title: "Privacy Policy",
  },
  {
    link: "https://www.lavanet.xyz/terms-of-service",
    title: "Terms of Service",
  },
]

export const navItems: INavItem[] = [
  {
    id: 'products',
    title: 'Products',
    links: [
      {
        link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        title: 'Lava Gateway',
        description: 'Get easy-to-use access to RPC and APIs across 15+ networks.',
        icon: ''
      },
      {
        link: 'https://docs.lavanet.xyz/access-sdk?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        title: 'Lava SDK',
        description: 'Try it now for free across 25+ networks.',
        icon: ''
      },
      {
        link: 'https://info.lavanet.xyz/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+info',
        title: 'Lava Info',
        description: 'View real-time Lava Network data, analytics, and performance.',
        icon: '️'
      },
      {
        link: 'https://lava.explorers.guru/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+bd',
        title: 'Block Explorer',
        description: 'Find and filter through transactions, proposals and metrics on the Lava blockchain.',
        icon: ''
      },
    ]
  },
  {
    id: 'learn',
    title: 'Learn',
    links: [
      {
        link: 'http://lavafoundation.notion.site/',
        title: 'What is Lava?',
        description: 'Discover the world of Lava',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/blog',
        title: 'Blog',
        description: 'Stay updated with our latest articles',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/news',
        title: 'News and interviews',
        description: 'Catch up on recent news and interviews',
        icon: ''
      },
      {
        link: 'http://docs.lavanet.xyz/token',
        title: 'Tokenomics',
        description: 'Understand our token economy',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/roadmap',
        title: 'Roadmap',
        description: 'View our future plans and milestones',
        icon: ''
      },
      {
        link: 'http://lavanet.xyz/whitepaper',
        title: 'Whitepaper',
        description: 'Read our comprehensive whitepaper',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/partnerships',
        title: 'Partnerships',
        description: 'Explore our collaborations and partnerships',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/specs',
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
        link: 'https://twitter.com/lavanetxyz',
        title: 'Twitter',
        description: 'Stay updated on Twitter',
        icon: ''
      },
      {
        link: 'https://discord.com/invite/Tbk5NxTCdA',
        title: 'Discord',
        description: 'Join our Discord community',
        icon: ''
      },
      {
        link: 'https://community.lavanet.xyz/',
        title: 'Forum',
        description: 'Engage in discussions on our forum',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/partnerships',
        title: 'Run a Node',
        description: 'Become a node operator',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/specs',
        title: 'Build Specs',
        description: 'Access build specifications',
        icon: ''
      },
      {
        link: 'https://lavanet.applytojob.com/apply',
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
        link: 'https://docs.lavanet.xyz/chains',
        title: 'See all chains',
        description: 'View incentive pools across all supported chains',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/get-started/axelar',
        title: 'Axelar',
        description: 'Explore Axelar-specific incentives',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/get-started/evmos',
        title: 'Evmos',
        description: 'Check out Evmos-related incentives',
        icon: ''
      },
      {
        link: 'https://www.lavanet.xyz/get-started/starknet',
        title: 'Starknet',
        description: 'Discover Starknet-based incentives',
        icon: '💎'
      },
      {
        link: 'https://www.lavanet.xyz/get-started/near',
        title: 'Near',
        description: 'Learn about Near protocol incentives',
        icon: '🏠'
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Ethereum',
        description: 'Explore Ethereum-based incentives',
        icon: '♦️'
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Solana',
        description: 'Find Solana-specific incentives',
        icon: '☀️'
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Filecoin',
        description: 'Understand Filecoin-related incentives',
        icon: '📁'
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Osmosis',
        description: 'Discover Osmosis-based incentives',
        icon: '🔄'
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Arbitrum Nova',
        description: 'Explore Arbitrum Nova incentives',
        icon: '✨'
      }
    ]
  },
]

export const homeSectionDataCards: IDataCard[] = [
  {
    title: 'Total requests',
    value: '49.23M',
  },
  {
    message: 'Updated in real-time',
    title: 'Total rewards, USD',
    value: '$490,230',
  },
  {
    title: 'Distributed rewards, USD',
    value: '$1,889,289.22',
  },
  {
    title: 'Upcoming rewards, USD',
    value: '$2,500,000',
  },
];

export const homeSectionProducts: IProduct[] = [
  {
    text: 'Smooth UI and analytics for your RPC endpoints',
    title: 'Gateway',
    type: 'red',
    link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=above_footer&utm_campaign=website_to_gateway&utm_content=try_gateway',
  },
  {
    text: 'Get the low-down on the Lava blockchain with Lava Info',
    title: 'Lava Info',
    type: 'orange',
    link: 'https://info.lavanet.xyz/?utm_source=above-footer&utm_medium=website&utm_campaign=website-to-lavainfo',
  },
  {
    text: 'See how Providers perform with rich Analytics',
    title: 'Provider analytics',
    type: 'orange',
    link: 'https://info.lavanet.xyz/?utm_source=above-footer&utm_medium=website&utm_campaign=website-to-provider-analytics',
  },
];
