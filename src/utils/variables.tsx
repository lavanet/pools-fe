import { IDataCard, INavItem, INavItemLink, IProduct } from '@/types';
import {
  IcnDiscord,
  IcnX,
  IcnTelegram,
  IcnGithub,
  IcnLavaCube,
  IcnLavaCode,
  IcnLavaChart,
  IcnLavaGit, IcnLavaDocs, IcnCircleInfo, IcnTeam, IcnShow, IcnFile, IcnChat,
} from '@assets/icons';

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
    headerDropdownBanner: {
      title: "RPC Providers & Validators on Lava",
      paragraph: "Lava offers many ways for node operators to participate in the ecosystem. Explore the opportunities below",
      linkUrl: "http://docs.lavanet.xyz/provider-setup",
      linkTitle: "Get started",
      displaySocialMedia: false,
    },
    links: [
      {
        link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        title: 'Lava Gateway',
        description: 'Get easy-to-use access to RPC and APIs across 15+ networks.',
        icon: <IcnLavaCube/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/access-sdk?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        title: 'Lava SDK',
        description: 'Try it now for free across 25+ networks.',
        icon: <IcnLavaCode/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://info.lavanet.xyz/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+info',
        title: 'Lava Info',
        description: 'View real-time Lava Network data, analytics, and performance.',
        icon: <IcnLavaChart/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://lava.explorers.guru/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+bd',
        title: 'Block Explorer',
        description: 'Find and filter through transactions, proposals and metrics on the Lava blockchain.',
        icon: <IcnLavaDocs/>,
        isExternal: false,
        headerDisplay: true,
      },
    ]
  },
  {
    id: 'learn',
    title: 'Learn',
    headerDropdownBanner: {
      title: "Lava Docs",
      paragraph: "Learn how decentralized public RPC works",
      linkUrl: "http://docs.lavanet.xyz/provider-setup",
      linkTitle: "Learn more",
      displaySocialMedia: true,
    },
    links: [
      {
        link: 'http://lavafoundation.notion.site/',
        title: 'What is Lava?',
        description: 'Discover the world of Lava',
        icon: <IcnCircleInfo/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/blog',
        title: 'Blog',
        description: 'Stay updated with our latest articles',
        icon: <IcnLavaDocs/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/news',
        title: 'News and interviews',
        description: 'Catch up on recent news and interviews',
        icon: <IcnLavaDocs/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'http://docs.lavanet.xyz/token',
        title: 'Tokenomics',
        description: 'Understand our token economy',
        icon: <IcnLavaDocs/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/roadmap',
        title: 'Roadmap',
        description: 'View our future plans and milestones',
        icon: <IcnShow/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'http://lavanet.xyz/whitepaper',
        title: 'Whitepaper',
        description: 'Read our comprehensive whitepaper',
        icon: <IcnFile/>,
        isExternal: true,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/partnerships',
        title: 'Partnerships',
        description: 'Explore our collaborations and partnerships',
        icon: <IcnTeam/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/specs',
        title: 'Specs',
        description: 'View technical specifications',
        icon: <IcnLavaDocs/>,
        isExternal: false,
        headerDisplay: true,
      }
    ]
  },
  {
    id: 'community',
    title: 'Community',
    headerDropdownBanner: {
      title: "Lava Docs",
      paragraph: "Learn how decentralized public RPC works",
      linkUrl: "http://docs.lavanet.xyz/provider-setup",
      linkTitle: "Learn more",
      displaySocialMedia: true,
    },
    links: [
      {
        link: 'https://twitter.com/lavanetxyz',
        title: 'Twitter',
        description: 'Stay updated on Twitter',
        icon: '',
        isExternal: true,
        headerDisplay: false,
      },
      {
        link: 'https://discord.com/invite/Tbk5NxTCdA',
        title: 'Discord',
        description: 'Join our Discord community',
        icon: '',
        isExternal: true,
        headerDisplay: false,
      },
      {
        link: 'https://community.lavanet.xyz/',
        title: 'Forum',
        description: 'Engage in discussions on our forum',
        icon: <IcnChat/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/partnerships',
        title: 'Run a Node',
        description: 'Become a node operator',
        icon: <IcnLavaCode/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/specs',
        title: 'Build Specs',
        description: 'Access build specifications',
        icon: <IcnLavaGit/>,
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://lavanet.applytojob.com/apply',
        title: 'Join Us',
        description: 'Explore career opportunities',
        icon: <IcnTeam/>,
        isExternal: false,
        headerDisplay: true,
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
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/get-started/axelar',
        title: 'Axelar',
        description: 'Explore Axelar-specific incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/get-started/evmos',
        title: 'Evmos',
        description: 'Check out Evmos-related incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/get-started/starknet',
        title: 'Starknet',
        description: 'Discover Starknet-based incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://www.lavanet.xyz/get-started/near',
        title: 'Near',
        description: 'Learn about Near protocol incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Ethereum',
        description: 'Explore Ethereum-based incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Solana',
        description: 'Find Solana-specific incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Filecoin',
        description: 'Understand Filecoin-related incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Osmosis',
        description: 'Discover Osmosis-based incentives',
        icon: '',
        isExternal: false,
        headerDisplay: true,
      },
      {
        link: 'https://docs.lavanet.xyz/gateway-access/?utm_source=website+&utm_medium=navbar+chains+&utm_content=see+more',
        title: 'Arbitrum Nova',
        description: 'Explore Arbitrum Nova incentives',
        icon: "",
        isExternal: false,
        headerDisplay: true,
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
