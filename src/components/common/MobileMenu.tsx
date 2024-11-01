'use client';

import styles from '@/styles/MobileMenu.module.scss'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import clsx from 'clsx';

import { useMediaQuerySafe } from '@/hooks';
import { headerNavItems } from '@/utils/variables';

import { Button, Accordion } from '@/components/common';
import Link from 'next/link';

const NavItemsList = () => {
  return headerNavItems.map(item => ({
    id: item.id,
    title: item.title,
    content: (
      <ul>
        {item.links.map(link => (
          <li key={link.id}>
            <Link
              href={link.link}
              title={link.title}
              target={link.isExternal? "_blank" : "_self"}
              rel={link.isExternal? "noreferrer noopener": undefined}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }));
};

export const MobileMenu = () => {
  const isMobile = useMediaQuerySafe('(max-width: 991px)');

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
    <div
      className={clsx(styles.cMobileMenu, "c-mobile-menu", "c-mobile")}
      ref={mobileMenuRef}
    >

      <Button
        btnColor="white-outline"
        extraClassName={clsx("c-mobile-menu-toggle-btn", mobileMenuOpen && "is-open")}
        title={mobileMenuOpen? 'Close menu' : "Open menu"}
        onClick={handleToggleOpen}
      >
        <span className="c-mobile-menu-toggle-btn-icon"/>

      </Button>

      <aside className={clsx("c-mobile-menu-content", mobileMenuOpen && "is-open")}>

        <div className='c-mobile-menu-content-wrapper'>

          <Accordion
            accordionItems={NavItemsList()}
            name="mobile-menu"
          />
        </div>

      </aside>

    </div>
  );
};
