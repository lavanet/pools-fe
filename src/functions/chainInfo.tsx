import Image from 'next/image'
import { ReactNode } from 'react';

const chainData: Record<string, { icon: string, fullName: string, abbreviatedName: string }> = {
  cardano: {
    icon: "/images/rounded-chains/icn-rounded-ada.svg",
    fullName: "Cardano",
    abbreviatedName: "ADA"
  },
  apecoin: {
    icon: "/images/rounded-chains/icn-rounded-ape.svg",
    fullName: "ApeCoin",
    abbreviatedName: "APE"
  },
  aptos: {
    icon: "/images/rounded-chains/icn-rounded-apt.svg",
    fullName: "Aptos",
    abbreviatedName: "APT"
  },
  arbitrum: {
    icon: "/images/rounded-chains/icn-rounded-arb.svg",
    fullName: "Arbitrum",
    abbreviatedName: "ARB"
  },
  cosmos: {
    icon: "/images/rounded-chains/icn-rounded-atom.svg",
    fullName: "Cosmos",
    abbreviatedName: "ATOM"
  },
  avalanche: {
    icon: "/images/rounded-chains/icn-rounded-avax.svg",
    fullName: "Avalanche",
    abbreviatedName: "AVAX"
  },
  basecoin: {
    icon: "/images/rounded-chains/icn-rounded-base.svg",
    fullName: "Basecoin",
    abbreviatedName: "BASE"
  },
  blur: {
    icon: "/images/rounded-chains/icn-rounded-blur.svg",
    fullName: "Blur",
    abbreviatedName: "BLUR"
  },
  bitcoin: {
    icon: "/images/rounded-chains/icn-rounded-btc.svg",
    fullName: "Bitcoin",
    abbreviatedName: "BTC"
  },
  canto: {
    icon: "/images/rounded-chains/icn-rounded-canto.svg",
    fullName: "Canto",
    abbreviatedName: "CANTO"
  },
  compound: {
    icon: "/images/rounded-chains/icn-rounded-comp.svg",
    fullName: "Compound",
    abbreviatedName: "COMP"
  },
  cronos: {
    icon: "/images/rounded-chains/icn-rounded-cro.svg",
    fullName: "Cronos",
    abbreviatedName: "CRO"
  },
  curvedao: {
    icon: "/images/rounded-chains/icn-rounded-crv.svg",
    fullName: "Curve DAO",
    abbreviatedName: "CRV"
  },
  polkadot: {
    icon: "/images/rounded-chains/icn-rounded-dot.svg",
    fullName: "Polkadot",
    abbreviatedName: "DOT"
  },
  ethereum: {
    icon: "/images/rounded-chains/icn-rounded-eth.svg",
    fullName: "Ethereum",
    abbreviatedName: "ETH"
  },
  fantom: {
    icon: "/images/rounded-chains/icn-rounded-ftm.svg",
    fullName: "Fantom",
    abbreviatedName: "FTM"
  },
  fuse: {
    icon: "/images/rounded-chains/icn-rounded-fuse.svg",
    fullName: "Fuse",
    abbreviatedName: "FUSE"
  },
  n: {
    icon: "/images/rounded-chains/icn-rounded-glmr.svg",
    fullName: "Moonbeam",
    abbreviatedName: "GLMR"
  },
  ibex: {
    icon: "/images/rounded-chains/icn-rounded-ibex.svg",
    fullName: "Ibex",
    abbreviatedName: "IBEX"
  },
  internetcomputer: {
    icon: "/images/rounded-chains/icn-rounded-icp.svg",
    fullName: "Internet Computer",
    abbreviatedName: "ICP"
  },
  kava: {
    icon: "/images/rounded-chains/icn-rounded-kava.svg",
    fullName: "Kava",
    abbreviatedName: "KAVA"
  },
  lido: {
    icon: "/images/rounded-chains/icn-rounded-ldo.svg",
    fullName: "Lido",
    abbreviatedName: "LDO"
  },
  chainlink: {
    icon: "/images/rounded-chains/icn-rounded-link.svg",
    fullName: "Chainlink",
    abbreviatedName: "LINK"
  },
  polygon: {
    icon: "/images/rounded-chains/icn-rounded-matic.svg",
    fullName: "Polygon",
    abbreviatedName: "MATIC"
  },
  metis: {
    icon: "/images/rounded-chains/icn-rounded-metis.svg",
    fullName: "Metis",
    abbreviatedName: "METIS"
  },
  maker: {
    icon: "/images/rounded-chains/icn-rounded-mkr.svg",
    fullName: "Maker",
    abbreviatedName: "MKR"
  },
  moonriver: {
    icon: "/images/rounded-chains/icn-rounded-movr.svg",
    fullName: "Moonriver",
    abbreviatedName: "MOVR"
  },
  near: {
    icon: "/images/rounded-chains/icn-rounded-near.svg",
    fullName: "Near Protocol",
    abbreviatedName: "NEAR"
  },
  optimism: {
    icon: "/images/rounded-chains/icn-rounded-op.svg",
    fullName: "Optimism",
    abbreviatedName: "OP"
  },
  pepe: {
    icon: "/images/rounded-chains/icn-rounded-pepe.svg",
    fullName: "Pepe",
    abbreviatedName: "PEPE"
  },
  sei: {
    icon: "/images/rounded-chains/icn-rounded-sei.svg",
    fullName: "Sei",
    abbreviatedName: "SEI"
  },
  synthetix: {
    icon: "/images/rounded-chains/icn-rounded-snx.svg",
    fullName: "Synthetix",
    abbreviatedName: "SNX"
  },
  solana: {
    icon: "/images/rounded-chains/icn-rounded-sol.svg",
    fullName: "Solana",
    abbreviatedName: "SOL"
  },
  sui: {
    icon: "/images/rounded-chains/icn-rounded-sui.svg",
    fullName: "Sui",
    abbreviatedName: "SUI"
  },
  tron: {
    icon: "/images/rounded-chains/icn-rounded-trx.svg",
    fullName: "Tron",
    abbreviatedName: "TRX"
  },
  uniswap: {
    icon: "/images/rounded-chains/icn-rounded-uni.svg",
    fullName: "Uniswap",
    abbreviatedName: "UNI"
  },
  usdc: {
    icon: "/images/rounded-chains/icn-rounded-usdc.svg",
    fullName: "USDC",
    abbreviatedName: "USDC"
  },
  tether: {
    icon: "/images/rounded-chains/icn-rounded-usdt.svg",
    fullName: "Tether",
    abbreviatedName: "USDT"
  },
  xibex: {
    icon: "/images/rounded-chains/icn-rounded-ibex.svg",
    fullName: "xIbex",
    abbreviatedName: "xIBEX"
  },
  worldcoin: {
    icon: "/images/rounded-chains/icn-rounded-wld.svg",
    fullName: "Worldcoin",
    abbreviatedName: "WLD"
  },
  stellar: {
    icon: "/images/rounded-chains/icn-rounded-xlm.svg",
    fullName: "Stellar",
    abbreviatedName: "XLM"
  },
  xrp: {
    icon: "/images/rounded-chains/icn-rounded-xrp.svg",
    fullName: "XRP",
    abbreviatedName: "XRP"
  },
  zksync: {
    icon: "/images/rounded-chains/icn-rounded-zk.svg",
    fullName: "zkSync",
    abbreviatedName: "Zksync"
  },
  agoric: {
    icon: "/images/rounded-chains/icn-rounded-agoric.svg",
    fullName: "Agoric",
    abbreviatedName: "BLD"
  },
  axelar: {
    icon: "/images/rounded-chains/icn-rounded-axelar.svg",
    fullName: "Axelar",
    abbreviatedName: "AXL"
  },
  celestia: {
    icon: "/images/rounded-chains/icn-rounded-celestia.svg",
    fullName: "Celestia",
    abbreviatedName: "TIA"
  },
  evmos: {
    icon: "/images/rounded-chains/icn-rounded-evmos.svg",
    fullName: "Evmos",
    abbreviatedName: "EVMOS"
  },
  starknet: {
    icon: "/images/rounded-chains/icn-rounded-starknet.svg",
    fullName: "Starknet",
    abbreviatedName: "STRK"
  },
  stargaze: {
    icon: "/images/rounded-chains/icn-rounded-stars.svg",
    fullName: "Stargaze",
    abbreviatedName: "STARS"
  },
}

type ReturnType = 'icon' | 'fullName' | 'abbreviatedName';

export function chainInfo(chainIdentifier?: string, returnType: ReturnType = "fullName", logoUrl?: string): string | ReactNode {
  if (!chainIdentifier) {
    return returnType === 'icon'
      ? <Image src="/images/rounded-chains/icn-rounded-default-image.svg" alt="Unknown" width={32} height={32} priority />
      : 'N/A';
  }

  const lowerCaseIdentifier = chainIdentifier.toLowerCase();
  const chain = chainData[lowerCaseIdentifier] || Object.values(chainData).find(c => lowerCaseIdentifier.startsWith(c.abbreviatedName.toLowerCase()));

  switch (returnType) {
    case 'icon':
      const iconSrc = logoUrl || (chain?.icon ?? "/images/rounded-chains/icn-rounded-default-image.svg");
      return <Image
        src={iconSrc}
        alt={chain?.fullName || chainIdentifier}
        width={32}
        height={32}
        priority
      />;
    case 'fullName':
      return chain?.fullName || chainIdentifier;
    case 'abbreviatedName':
      return chain?.abbreviatedName || chainIdentifier;
    default:
      return "";
  }
}
