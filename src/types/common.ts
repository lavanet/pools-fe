
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
