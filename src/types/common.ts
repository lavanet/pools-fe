import { ReactNode } from 'react';

export interface IButton {
  title?: string;
  text?: string;
  children?: ReactNode;
  btnColor?: "white" | "white-outline" | "grey"|"ghost";
  btnSize?: "xl" | "lg" | "sm"; // xl: 56px | lg: 48px | sm: 28px | default: 36px
  btnVariant?: "link" | "icon";
  icon?: ReactNode;
  iconPlacement?: "right";
}

export interface ISelectOption {
  label: string;
  value: any;
  icon?: ReactNode;
}

export interface IFormGroup {
  extraClassName?: string;
  labelText: string;
  labelIsHidden?: boolean;
  inputStyle?: 'filled',
  inputGroupText?: ReactNode;
  inputGroupPlacement?: "left";
  helpText?: ReactNode,
}

export interface IChain {
  name: string,
  requests: number,
  rpcProviders: number,
  service: string,
  rpc_url: string,
}

export interface IDataCard {
  title: string;
  value: string;
  message?: string;
}

export interface INavItem {
  id?: string,
  links: INavItemLink[],
  title: string;
}

export interface INavItemLink {
  link: string,
  title: string;
  description?: string,
  icon?: ReactNode;
}

export interface IPool {
  id: string;
  title: string;
  service: string;
  node_runner?: number;
  requests?: number;
  value: string;
  currency?: string;
  monthly_rewards?: number;
  future_rewards?: number;
  past_rewards?: number;
  icon?: ReactNode,
  rewards_end?: string;
  rewards_days_remaining?: number;
  rpc_url: string;
}

export interface IProduct {
  text: string;
  title: string;
  type: 'orange' | 'red';
}

export interface ProcessedHomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}
