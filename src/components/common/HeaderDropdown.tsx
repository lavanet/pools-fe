'use client';

import styles from '@/styles/HeaderDropdown.module.scss'
import { IcnChevronDown, IcnArrowUp } from '@assets/icons';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';

import { INavItemLink } from '@/types';

import { ButtonLink } from '@/components';

type HeaderDropdownProps = {
  id?: string,
  title: string;
  links?: INavItemLink[];
  content?: ReactNode;
};

export const HeaderDropdown = ({ links, title, id }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

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
      className={clsx(styles.cHeaderCustomDropdown, "c-header-custom-dropdown", id)}
      content={
        <div className="c-header-custom-dropdown-grid">

          <div className='c-header-custom-dropdown-grid-item menu'>

            {links && (
              <div>
                {links.map((link, linkIdx) => (

                  <Link
                    key={linkIdx}
                    href={link.link}
                  >
                    {link.icon && (
                      <span className="icon">
                        <i>{link.icon}</i>
                      </span>
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

          <aside className='c-header-custom-dropdown-grid-item banner'>

            <div className="text">

              <h2 className='h3 sharp-medium'>
                RPC Providers & Validators on Lava
              </h2>

              <p>
                Lava offers many ways for node operators to participate in the ecosystem. Explore the opportunities below
              </p>
            </div>

            <div className="c-button-container">

                <ButtonLink
                  href="/"
                  btnColor="white-outline"
                  text="Get started"
                  icon={<IcnArrowUp/>}
                  iconPlacement="right"
                />

            </div>

          </aside>

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
