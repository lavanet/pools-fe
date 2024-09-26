import { ReactNode } from 'react';
import { IcnAxelar, IcnCelestia, IcnEvmos, IcnKoii, IcnNear, IcnStarknet } from '@assets/images/rounded-chains';

const chainIconMap: { [key: string]: ReactNode } = {
  NEAR: <IcnNear />,
  EVMOS: <IcnEvmos />,
  AXELAR: <IcnAxelar />,
  STRK: <IcnStarknet />,
  KOII: <IcnKoii />,
  CELESTIA: <IcnCelestia />,
  // Add more mappings as needed
};

export function getIconForChain(chainIdentifier: string): ReactNode {
  // First, try to match by exact key (uppercase)
  if (chainIconMap[chainIdentifier.toUpperCase()]) {
    return chainIconMap[chainIdentifier.toUpperCase()];
  }

  // If no exact match, try to find a partial match
  const normalizedIdentifier = chainIdentifier.toLowerCase();
  const matchingKey = Object.keys(chainIconMap).find(key =>
    normalizedIdentifier.includes(key.toLowerCase())
  );

  return matchingKey ? chainIconMap[matchingKey] : null;
}
