import { IDataCard } from '@/types';
import { ProcessedHomeData, RawHomeData } from '@/types/home';
import { fetchData } from '@/utils';
import { processChains, formatNumber } from '@/functions';

export async function fetchHomeData(): Promise<RawHomeData> {
  return fetchData<RawHomeData>('/home/');
}

export function processHomeData(data: RawHomeData): ProcessedHomeData {
  const dataCards: IDataCard[] = [
    { title: 'Total requests', value: data.total_requests ? formatNumber(data.total_requests) : 'N/A' },
    { title: 'Total rewards, USD', value: data.total_rewards ? `$${formatNumber(data.total_rewards)}` : 'N/A', message: 'Updated in real-time' },
    { title: 'Distributed rewards, USD', value: data.total_past_rewards ? `$${formatNumber(data.total_past_rewards)}` : 'N/A' },
    { title: 'Upcoming rewards, USD', value: data.total_future_rewards ? `$${formatNumber(data.total_future_rewards)}` : 'N/A' },
  ];

  const { pools, activeChains } = processChains(data.chains);

  return { dataCards, pools, chains: activeChains };
}
