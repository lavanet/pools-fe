import { ReactNode } from 'react';
import { IcnAxelar, IcnCelestia, IcnEvmos, IcnKoii, IcnNear, IcnStarknet } from '@assets/images/rounded-chains';

const chainIconMap: { [key: string]: ReactNode } = {
  NEAR: <IcnNear />,
  EVMOS: <IcnEvmos />,
  AXELAR: <IcnAxelar />,
  STRK: <IcnStarknet />,
  KOII: <IcnKoii />,
  CELESTIA: <IcnCelestia />,
};

export function getIconForChain(chainId: string): ReactNode {
  return chainIconMap[chainId.toUpperCase()] || null;
}
