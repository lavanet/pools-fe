import { ReactNode } from 'react';

export interface IChain { 
  name: string,
  requests: number,
  rpcProviders: number,
  service: string
}

export interface IDataCard { 
  title: string;
  value: string;
  message?: string;
}

export interface INavItem { 
  links: INavItemLink[],
  title: string;
}

export interface INavItemLink { 
  link: string,
  title: string;
}

export interface IPool { 
  id: string;
  title: string;
  service: string;
  node_runner?: number;
  requests?: number;
  value: string;
  monthly_rewards?: number;
  future_rewards?: number;
  past_rewards?: number;
  accentColor: string,
  icon: ReactNode,
}

export interface IProduct {
  text: string;
  title: string;
  type: 'orange' | 'red';
}
