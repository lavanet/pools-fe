import { IChain, IDataCard, IPool } from '@/types/common';

export type RawHomeData = {
  chains: Array<{
    chain_id?: string;
    clean_name?: string;
    service?: string;
    rpc_node_runners?: number;
    total_requests?: number;
    total_rewards?: number;
    total_rewards_usd?: number;
    denom?: string;
    rewards_per_month?: number;
    future_rewards?: number;
    future_rewards_usd: number;
    past_rewards?: number;
    months_remaining?: number;
    current_rewards: number;
    rewards_end?: string;
    rewards_days_remaining?: number;
    rpc_url: string;
    logo: string;
  }>;
  total_requests?: number;
  total_rewards?: number;
  total_past_rewards?: number;
  total_future_rewards?: number;
};

export interface ProcessedHomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}
