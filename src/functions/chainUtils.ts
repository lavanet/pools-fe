import { IChain, IPool } from '@/types';
import { RawHomeData } from '@/types/home';
import { formatNumber, chainInfo } from '@/functions';

export const isUndefinedEnd = (rewards_end: string | null | undefined) =>
  rewards_end === 'TBD' || rewards_end === null || rewards_end === undefined;

export const hasActivity = (chain: RawHomeData['chains'][0]) =>
  (chain.rpc_node_runners && chain.rpc_node_runners > 0) ||
  (chain.total_requests && chain.total_requests > 0);

export function processChains(chains: RawHomeData['chains']): { pools: IPool[], activeChains: IChain[] } {
  const pools = chains
    .filter(chain => (chain.total_rewards && chain.total_rewards > 0))
    .sort((a, b) => {
      if (isUndefinedEnd(a.rewards_end) && isUndefinedEnd(b.rewards_end)) {
        return (b.future_rewards_usd || 0) - (a.future_rewards_usd || 0);
      }
      if (!isUndefinedEnd(a.rewards_end) && !isUndefinedEnd(b.rewards_end)) {
        return (b.future_rewards_usd || 0) - (a.future_rewards_usd || 0);
      }
      return isUndefinedEnd(a.rewards_end) ? 1 : -1;
    })
    .map(chain => ({
      id: chain.chain_id ? chain.chain_id.toLowerCase() : 'N/A',
      title: chain.clean_name || 'N/A',
      service: chain.service || 'N/A',
      node_runner: chain.rpc_node_runners || 0,
      requests: chain.total_requests || 0,
      value: chain.total_rewards_usd ? `$${formatNumber(chain.total_rewards_usd, true)}` : 'N/A',
      currency: chain.denom ? chain.denom.toUpperCase() : 'N/A',
      monthly_rewards: Number(chain.current_rewards) || 0,
      future_rewards: Number(chain.future_rewards) || 0,
      past_rewards: Number(chain.past_rewards) || 0,
      icon: chainInfo(chain.chain_id ? chain.chain_id.toLowerCase() : 'N/A', 'icon', chain.logo),
      months_remaining: chain.months_remaining || 0,
      rewards_end: chain.rewards_end || 'TBD',
      rewards_days_remaining: chain.rewards_days_remaining,
      rpc_url: chain.rpc_url,
    }));

  const activeChains = chains
    .filter(chain => (!chain.total_rewards || chain.total_rewards === 0) && hasActivity(chain))
    .map(chain => ({
      name: chain.clean_name || 'N/A',
      requests: chain.total_requests || 0,
      rpcProviders: chain.rpc_node_runners || 0,
      service: chain.service || 'N/A',
      rpc_url: chain.rpc_url,
      logo: chain.logo,
    }));

  return { pools, activeChains };
}
