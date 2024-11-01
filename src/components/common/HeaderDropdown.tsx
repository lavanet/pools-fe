'use client';

import styles from '@/styles/HeaderDropdown.module.scss'
import { IcnChevronDown, IcnArrowUp, IcnArrowRightRetro, IcnArrowUpRetro } from '@assets/icons';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';

import { IHeaderDropdownBanner, IHeaderNavItemLink } from '@/types';

import { ButtonLink } from '@/components';
import { SocialNavItems } from '@/utils/variables';

type HeaderDropdownProps = {
  id?: string,
  title: string;
  links?: IHeaderNavItemLink[];
  headerDropdownBanner?: IHeaderDropdownBanner;
};

export const HeaderDropdown = (
  {
    id,
    title,
    links,
    headerDropdownBanner
  }: HeaderDropdownProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const [navEl, setNavEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.querySelector('.c-header-nav');
    if (el instanceof HTMLElement) {
      setNavEl(el);
    }
  }, []);

  return (
    <Tippy
      interactive
      trigger="click"
      hideOnClick
      onShow={() => setIsOpen(true)}
      onHide={() => setIsOpen(false)}
      offset={[0, 0]}
      delay={[0, 300]}
      arrow={false}
      zIndex={9997}
      maxWidth='100%'
      appendTo={() => navEl || document.body}
      // appendTo={() => document.body}
      animation="shift-away"
      placement="bottom"
      className={clsx(styles.cHeaderDropdown, "c-header-dropdown", id)}
      content={
        <div className="c-header-dropdown-grid">

          <div className='c-header-dropdown-grid-item menu'>

            {links && (
              <div>
                {links.map((link) => (

                  <Link
                    className={link.id}
                    key={link.title}
                    href={link.link}
                    target={link.isExternal? "_blank" : "_self"}
                    rel={link.isExternal? "noreferrer noopener": undefined}
                  >
                    {link.icon && (
                      <span className="icon">
                        <span>
                          <i>{link.icon}</i>
                        </span>
                      </span>
                    )}

                    <span className="text">

                      <span>
                        {link.title}
                      </span>

                      {link.description && (
                        <small>{link.description}</small>
                      )}

                    </span>

                    <span className="low-icon">
                      <i><IcnArrowUpRetro/></i>
                    </span>

                  </Link>
                ))}

              </div>
            )}

          </div>

          {headerDropdownBanner && (
            <aside className='c-header-dropdown-grid-item banner'>

              <div className="text">

                <h2 className='h3 sharp-medium'>
                  {headerDropdownBanner.title}
                </h2>

                <p>
                  {headerDropdownBanner.paragraph}
                </p>

              </div>

              <div className="c-button-container">

                <ButtonLink
                  btnColor="white-outline"
                  text={headerDropdownBanner.linkTitle}
                  icon={<IcnArrowUp/>}
                  iconPlacement="right"
                  href={headerDropdownBanner.linkUrl}
                />

              </div>

              {headerDropdownBanner.displaySocialMedia && (

                <div className="c-header-dropdown-grid-item-social-media">

                  <p>Join our community</p>

                  <div className="c-header-dropdown-grid-item-social-media-list">
                    {SocialNavItems.map((social) => (

                      <ButtonLink
                        key={social.title}
                        btnVariant='icon'
                        btnColor='white'
                        title={social.title}
                        icon={social.icon}
                        href={social.link}
                        isExternal
                      />
                    ))}
                  </div>

                </div>
              )}

            </aside>
          )}

        </div>
      }
    >
      <button
        className={clsx("c-header-nav-link", "c-button", isOpen && "is-open")}
        data-color="ghost"
        data-size="lg"
        title={title}
        aria-label={title}
      >
        <span className='c-button-text'>
          {title}
        </span>

        <i className="c-button-icon-chevron">
          <IcnChevronDown />
        </i>

      </button>

    </Tippy>
  );
};
