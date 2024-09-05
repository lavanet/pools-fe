'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';
import clsx from 'clsx';
import { navItems } from '@/utils/variables';
import { CustomButton, CustomAccordion } from '@/components/common';
import styles from '@/styles/MobileMenu.module.scss'

const NavItemsList = () => {
  return navItems.map(item => ({
    title: item.title,
    content: (
      <ul>
        {item.links.map(link => (
          <li key={link.title}>
            <a href={link.link} title={link.title}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    )
  }));
};

export const MobileMenu = () => {
  const isMobile /* boolean | undefined */ = useMediaQuery('(max-width: 991px)', {
    initializeWithValue: false,
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleToggleOpen = useCallback(() => {
    setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)
  }, [setMobileMenuOpen])

  const handleClose = useCallback(() => {
    setMobileMenuOpen(false)
  }, [setMobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen && isMobile) {
      document.body.classList.add('menu-is-open')
    } else {
      document.body.classList.remove('menu-is-open')
      setMobileMenuOpen(false)
    }
  }, [setMobileMenuOpen, mobileMenuOpen, isMobile])

  useOnClickOutside(mobileMenuRef, handleClose)

  return (
    <div className={clsx(styles.cMobileMenu, "c-mobile-menu")} ref={mobileMenuRef}>

      <CustomButton
        btnColor="white-outline"
        extraClassName={clsx("c-mobile-menu-toggle-btn", mobileMenuOpen && "is-open")}
        title={mobileMenuOpen? 'Close menu' : "Open menu"}
        onClick={handleToggleOpen}
      >
        <span className="c-mobile-menu-toggle-btn-icon"/>

      </CustomButton>

      <aside className={clsx("c-mobile-menu-content", mobileMenuOpen && "is-open")}>

        <div className='c-mobile-menu-content-wrapper'>

          <CustomAccordion
            accordionItems={NavItemsList()}
            name="mobile-menu"
          />
        </div>

      </aside>

    </div>
  );
};
