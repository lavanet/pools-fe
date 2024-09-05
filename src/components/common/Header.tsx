'use client';

import clsx from 'clsx';
import {useMediaQuery} from 'usehooks-ts';
import { navItems } from '@/utils/variables';
import { HeaderDropdown, MobileMenu, CustomButtonLink, Logo } from '@/components/common';
import styles from '@/styles/Header.module.scss';

export const Header = () => {
  const isMobile /* boolean | undefined */ = useMediaQuery('(max-width: 991px)', {
    initializeWithValue: false,
  })

  return (
    <header className={clsx(styles.cHeader, "c-header")}>

      <nav className="c-container c-header-nav">

        <Logo/>

        {isMobile ?(
          <MobileMenu/>
        ):(
          <>
            <div className="c-button-container">

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
