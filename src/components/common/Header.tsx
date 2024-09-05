'use client';

import clsx from 'clsx';
import { useMediaQuerySafe } from '@/hooks';
import { navItems } from '@/utils/variables';
import { HeaderDropdown, MobileMenu, CustomButtonLink, Logo } from '@/components/common';
import styles from '@/styles/Header.module.scss';

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

              <CustomButtonLink
                extraClassName='c-header-nav-link'
                btnColor='ghost'
                btnSize="lg"
                href='/'
                text='Rollup Developers'
              />

              {navItems.map((item) => (
                <HeaderDropdown key={item.title} {...item} />
              ))}

            </div>

            <CustomButtonLink
              extraClassName="c-header-desktop-docs-btn c-desktop"
              btnColor="white"
              btnSize="lg"
              text="Read Docs"
              href="/"
            />

          </>
        )}
      </nav>

    </header>
  );
};
