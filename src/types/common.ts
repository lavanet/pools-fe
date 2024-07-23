export interface INavItem { 
  title: string;
  links?: INavItemLink[],
}

export interface INavItemLink { 
  link: string,
  title: string;
}
