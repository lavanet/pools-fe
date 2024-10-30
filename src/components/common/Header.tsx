'use client';

import styles from '@/styles/Header.module.scss';

import clsx from 'clsx';

import { useMediaQuerySafe } from '@/hooks';
import { navItems } from '@/utils/variables';

import { HeaderDropdown, MobileMenu, ButtonLink, Logo } from '@/components/common';
import { Fragment } from 'react';

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

              {navItems.map((item) => (
                <Fragment key={item.title}>

                  {item.id === "incentive-pools"? (
                    <ButtonLink
                      key={item.title}
                      extraClassName='c-header-nav-link'
                      btnColor='ghost'
                      btnSize="lg"
                      text={item.title}
                      href="/"
                    />
                  ):(
                    <HeaderDropdown {...item} />
                  )}
                </Fragment>
              ))}

            </div>

            <ButtonLink
              extraClassName="c-header-desktop-docs-btn c-desktop"
              btnColor="white"
              btnSize="lg"
              text="Read Docs"
              isExternal
              href="https://docs.lavanet.xyz/"
            />

          </>
        )}
      </nav>

    </header>
  );
};
