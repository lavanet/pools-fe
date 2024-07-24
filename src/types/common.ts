
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
  service: string;
  title: string;
  type: PoolType;
  value: string;
}

export type PoolType = 'axelar' | 'celestia' | 'evmos' | 'koli' | 'near' | 'starknet';
