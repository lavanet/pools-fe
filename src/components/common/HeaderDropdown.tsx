'use client';

import styles from '@/styles/HeaderDropdown.module.scss'
import { IcnChevronDown, IcnArrowUp } from '@assets/icons';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';

import { IheaderDropdownBanner, INavItemLink } from '@/types';

import { ButtonLink } from '@/components';
import { SocialNavItems } from '@/utils/variables';

type HeaderDropdownProps = {
  id?: string,
  title: string;
  links?: INavItemLink[];
  headerDropdownBanner?: IheaderDropdownBanner;
};

export const HeaderDropdown = ({id, title, links, headerDropdownBanner }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const filteredLinks = links?.filter(link => link.headerDisplay === true);

  return (
    <Tippy
      interactive
      trigger="click"
      onShow={() => setIsOpen(true)}
      onHide={() => setIsOpen(false)}
      offset={[0, 0]}
      delay={[0, 300]}
      arrow={false}
      zIndex={9997}
      maxWidth='none'
      appendTo={() => document.body}
      animation="shift-away"
      placement="bottom"
      className={clsx(styles.cHeaderDropdown, "c-header-dropdown", id)}
      content={
        <div className="c-header-dropdown-grid">

          <div className='c-header-dropdown-grid-item menu'>

            {filteredLinks && (
              <div>
                {filteredLinks.map((link, linkIdx) => (

                  <Link
                    key={linkIdx}
                    href={link.link}
                  >
                    {link.icon && (
                      <i className="icon">{link.icon}</i>
                    )}

                    <span className="text">
                      <span>{link.title}</span>
                      {link.description && (
                        <small>{link.description}</small>
                      )}
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
                  href={headerDropdownBanner.linkUrl}
                  btnColor="white-outline"
                  text={headerDropdownBanner.linkTitle}
                  icon={<IcnArrowUp/>}
                  iconPlacement="right"
                />

              </div>

              {headerDropdownBanner.displaySocialMedia && (

                <div className="c-header-dropdown-grid-item-social-media">

                  <p>Join our community</p>

                  <div className="c-header-dropdown-grid-item-social-media-list">
                    {SocialNavItems.map((social, socialIdx) => (

                      <ButtonLink
                        key={socialIdx}
                        href={social.link}
                        btnVariant='icon'
                        btnColor='white'
                        title={social.title}
                        icon={social.icon}
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
