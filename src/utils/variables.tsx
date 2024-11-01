import { IDataCard, IFooterNavItem, IFooterNavItemLink, IHeaderNavItem, IHeaderNavItemLink, IProduct } from '@/types';
import { IcnDiscord, IcnX, IcnGithub, IcnLavaCube, IcnLavaCode, IcnLavaChart, IcnLavaDocs, IcnCircleInfo, IcnTeam, IcnShow, IcnFile, IcnChat, IcnPuzzle, IcnNode, IcnCirclePyramid,
} from '@assets/icons';

export const SocialNavItems: IFooterNavItemLink[] = [
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
  {
    link: "https://github.com/lavanet",
    title: "Github",
    icon: <IcnGithub/>
  },
]

export const LegalNavItems: IFooterNavItemLink[] = [
  {
    title: "Privacy Policy",
    link: "https://www.lavanet.xyz/privacy-policy",
  },
  {
    title: "Terms of Service",
    link: "https://www.lavanet.xyz/terms-of-service",
  },
]

export const headerNavItems: IHeaderNavItem[] = [
  {
    id: 'products',
    title: 'Products',
    headerDropdownBanner: {
      title: "Lava Docs",
      paragraph: "Get RPC endpoints for 40+ chains and learn how to become a node provider on Lava.",
      linkUrl: "http://docs.lavanet.xyz/provider-setup",
      linkTitle: "Become a partner",
      displaySocialMedia: false,
    },
    links: [
      {
        id: "gateway",
        title: 'Lava Gateway',
        description: 'Get easy-to-use access to RPC and APIs across 15+ networks.',
        icon: <IcnLavaCube/>,
        link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        isExternal: true,
      },
      {
        id: "sdk",
        title: 'Lava SDK',
        description: 'Try it now for free across 25+ networks.',
        icon: <IcnLavaCode/>,
        link: 'https://docs.lavanet.xyz/access-sdk/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        isExternal: true,
      },
      {
        id: "info",
        title: 'Lava Info',
        description: 'View real-time Lava Network data, analytics, and performance.',
        icon: <IcnLavaChart/>,
        link: 'https://info.lavanet.xyz/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+info',
        isExternal: true,
      },
      {
        id: "block-explorer",
        title: 'Block Explorer',
        description: 'Find and filter through transactions, proposals and metrics on the Lava blockchain.',
        icon: <IcnLavaDocs/>,
        link: 'https://lava.explorers.guru/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+bd',
        isExternal: true,
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
        id: "what-is-lava",
        title: 'What is Lava?',
        description: 'The underlying protocol for access to blockchains',
        icon: <IcnCircleInfo/>,
        link: 'https://x.com/consensus128/status/1802753690593370320',
        isExternal: true,
      },
      {
        id: "blog",
        title: 'Blog',
        description: 'Learn more about Lava through articles and guides',
        icon: <IcnLavaDocs/>,
        link: 'https://www.lavanet.xyz/blog',
        isExternal: false,
      },
      {
        id: "news",
        title: 'News & Interviews',
        description: 'Keep up with the latest media about Lava',
        icon: <IcnChat/>,
        link: 'https://www.lavanet.xyz/news',
        isExternal: false,
      },
      {
        id: "tokenomics",
        title: 'Tokenomics',
        description: 'LAVA is the native asset of the Lava Network',
        icon: <IcnCirclePyramid/>,
        link: 'https://docs.lavanet.xyz/token/',
        isExternal: true,
      },
      {
        id: "roadmap",
        title: 'Roadmap',
        description: 'View our future plans and milestones',
        icon: <IcnShow/>,
        link: 'https://www.lavanet.xyz/roadmap',
        isExternal: false,
      },
      {
        id: "whitepaper",
        title: 'Whitepaper',
        description: 'Deep dive into how Lava works and the Lava vision',
        icon: <IcnFile/>,
        link: 'https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/66fd507cdd54cabe7496d478_LavaNetwork-AccessingBlockchains.pdf',
        isExternal: true,
      },
      {
        id: "partnership",
        title: 'Partnerships',
        description: 'Chains, rollups, RPC providers, indexers get in touch',
        icon: <IcnTeam/>,
        link: 'https://www.lavanet.xyz/partnerships',
        isExternal: false,
      },
      {
        id: "specs",
        title: 'Specs',
        description: 'Learn more about how Specs expand Lava to more chains and services',
        icon: <IcnPuzzle/>,
        link: 'https://www.lavanet.xyz/specs',
        isExternal: false,
      }
    ]
  },
  {
    id: 'community',
    title: 'Community',
    headerDropdownBanner: {
      title: "Lava Docs",
      paragraph: "Get RPC endpoints for 40+ chains and learn how to become a node provider on Lava.",
      linkUrl: "http://docs.lavanet.xyz/provider-setup",
      linkTitle: "Learn more",
      displaySocialMedia: false,
    },
    links: [
      {
        id: "twitter",
        title: 'Twitter',
        description: "Follows Lava's latest announcements and content",
        icon: <IcnX/>,
        link: 'https://x.com/lavanetxyz',
        isExternal: true,
      },
      {
        id: "discord",
        title: 'Discord',
        description: 'Join the Lava community of dapp developers, restakers and node providers',
        icon: <IcnDiscord/>,
        link: 'https://discord.com/invite/Tbk5NxTCdA',
        isExternal: true,
      },
      {
        id: "forum",
        title: 'Forum',
        description: 'Engage with research and governance proposals on Lava testnet and mainnet',
        icon: <IcnChat/>,
        link: 'https://community.lavanet.xyz/',
        isExternal: true,
      },
      {
        id: "run-node",
        title: 'Run a Node',
        description: 'Start providing RPC & APIs over Lava and earning rewards',
        icon: <IcnNode/>,
        link: 'https://www.lavanet.xyz/partnerships',
        isExternal: false,
      },
      {
        id: "build-specs",
        title: 'Build Specs',
        description: 'Learn how to add more chains and services to Lava',
        icon: <IcnPuzzle/>,
        link: 'https://www.lavanet.xyz/specs',
        isExternal: false,
      },
      {
        id: "join",
        title: 'Join Us',
        description: 'Learn how to add more chains and services to Lava',
        icon: <IcnPuzzle/>,
        link: 'https://www.lavanet.xyz/specs',
        isExternal: false,
      },
    ]
  },
]

export const FooterNavItems: IFooterNavItem[] = [
  {
    id: 'products',
    title: 'Products',
    links: [
      {
        title: 'Lava Gateway',
        link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        isExternal: true,
      },
      {
        title: 'Lava SDK',
        link: 'https://docs.lavanet.xyz/access-sdk/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+gateway',
        isExternal: true,
      },
      {
        title: 'Lava Info',
        link: 'https://info.lavanet.xyz/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+info',
        isExternal: true,
      },
      {
        title: 'Block Explorer',
        link: 'https://lava.explorers.guru/?utm_source=homepage&utm_medium=navbar&utm_campaign=website+to+bd',
        isExternal: true,
      },
    ]
  },
  {
    id: 'learn',
    title: 'Learn',
    links: [
      {
        title: 'Blog',
        link: 'https://www.lavanet.xyz/blog',
        isExternal: false,
      },
      {
        title: 'Github',
        link: 'https://github.com/lavanet?utm_source=homepage&utm_medium=footer&utm_campaign=website+to+github',
        isExternal: true,
      },
      {
        title: 'Docs',
        link: 'https://docs.lavanet.xyz/?utm_source=homepage&utm_medium=footer&utm_campaign=website_to_docs&utm_content=docs',
        isExternal: true,
      },
      {
        title: 'What is Lava?',
        link: 'https://x.com/consensus128/status/1802753690593370320',
        isExternal: true,
      },
      {
        title: 'News',
        link: 'https://www.lavanet.xyz/news',
        isExternal: false,
      },
      {
        title: 'Audits (Ottersec)',
        link: 'https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/669fbcbb3b3b46bb8000f35a_lava_audit_final%20(1).pdf',
        isExternal: true,
      },
      {
        title: 'Audit (Fault Tolerance)',
        link: 'https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/669fbcbb03ccabf51c8ebe83_lava%20audit%20v2.0%20(1).pdf',
        isExternal: true,
      }
    ]
  },
  {
    id: 'get-started',
    title: 'Get started',
    links: [
      {
        title: 'Add support for your blockchain',
        link: 'https://www.lavanet.xyz/rollup-developer',
        isExternal: false,
      },
      {
        title: 'Get Endpoints',
        link: 'https://discord.com/invite/Tbk5NxTCdA',
        isExternal: true,
      },
      {
        title: 'Become a Node Runner',
        link: 'https://docs.lavanet.xyz/validator/?utm_source=homepage&utm_medium=footer&utm_content=run+validator',
        isExternal: true,
      },
      {
        title: 'Brand Kit',
        link: 'https://www.lavanet.xyz/brand',
        isExternal: false,
      },
      {
        title: 'How to Stake',
        link: 'https://www.lavanet.xyz/stakers',
        isExternal: false,
      },
    ]
  },
  {
    id: 'Foundation',
    title: 'Foundation',
    links: [
      {
        title: 'About',
        link: 'https://www.lavanet.xyz/foundation',
        isExternal: false,
      },
      {
        title: 'Whitepaper',
        link: 'https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/66fd507cdd54cabe7496d478_LavaNetwork-AccessingBlockchains.pdf',
        isExternal: true,
      },
      {
        title: 'Partner With Us',
        link: 'https://www.lavanet.xyz/partnerships',
        isExternal: false,
      },
      {
        title: 'Forum',
        link: 'https://community.lavanet.xyz/',
        isExternal: true,
      },
      {
        title: 'Join Us',
        link: 'https://www.linkedin.com/company/lava-network/jobs/?viewAsMember=true',
        isExternal: true,
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
