'use client';

import styles from '@/styles/Header.module.scss';

import clsx from 'clsx';

import { useMediaQuerySafe } from '@/hooks';
import { headerNavItems } from '@/utils/variables';

import { HeaderDropdown, MobileMenu, ButtonLink, Logo } from '@/components/common';

export const Header = () => {
  const isMobile /* boolean | undefined */ = useMediaQuerySafe('(max-width: 991px)');

  return (
    <header className={clsx(styles.cHeader, "c-header")}>

      <nav className="c-container c-header-nav">

        <Logo/>

        {isMobile ? (
          <MobileMenu/>
        ):(
          <>
            <div className="c-button-container c-desktop">

              <ButtonLink
                extraClassName='c-header-nav-link'
                btnColor='ghost'
                btnSize="lg"
                href='https://www.lavanet.xyz/rollup-developer'
                text='Rollup Developers'
              />

              {headerNavItems.map((item) => (
                <HeaderDropdown key={item.title} {...item} />
              ))}

              <ButtonLink
                extraClassName='c-header-nav-link'
                btnColor='ghost'
                btnSize="lg"
                text="Incentive Pools"
                href="/"
              />

            </div>

            <ButtonLink
              extraClassName="c-header-desktop-docs-btn c-desktop"
              btnColor="white"
              btnSize="lg"
              text="Delegate Lava"
              href="https://www.lavanet.xyz/stakers"
            />

          </>
        )}
      </nav>

    </header>
  );
};
