'use client';

import styles from '@/styles/Footer.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { useMediaQuerySafe } from '@/hooks';
import { LegalNavItems, navItems, SocialNavItems } from '@/utils/variables';

import { Logo } from '@/components';

export const Footer = () => {
  const isMobileSm = useMediaQuerySafe('(max-width: 767px)');

  return(
    <footer className={clsx(styles.cFooter, "c-footer")}>

      <div className='c-container'>

        <nav className='c-footer-nav'>

          <div className='c-footer-nav-item logo'>
            <Logo />

            <p>
              Lava Network is the underlying protocol which makes dapps and
              wallets faster and more reliable, on any blockchain.
              Lava’s RPC services handle more than 77 billion data requests
              across over 2.3 million monthly users, on 40+ blockchains.
            </p>

            <p>
              Lava’s aim is to 10x the onchain experience for everyone.
            </p>

            <div>
              {SocialNavItems.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.link}
                  title={link.title}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i>{link.icon}</i>
                </Link>
              ))}
            </div>

          </div>

          <div className="c-footer-nav-item menu">

            <div className="c-footer-nav-menu-item">
              {!isMobileSm && (
                <p className="c-tablet-sm"/>
              )}

              <Link href="https://www.lavanet.xyz/rollup-developer" title="Rollup Developers">
                Rollup Developers
              </Link>
            </div>

            {navItems.map((navCategory, navCategoryIdx) => {
              return (
                <div
                  className="c-footer-nav-menu-item"
                  key={navCategoryIdx}
                >
                  <p>
                    {navCategory.title}
                  </p>

                  <ul>
                    {navCategory.links.map((navLink, navLinkIdx) => (

                      <li key={navLinkIdx}>

                        <Link
                          href={navLink.link}
                          title={navLink.title}
                          target={navLink.isExternal? "_blank" : "_self"}
                          rel={navLink.isExternal? "noreferrer noopener": undefined}
                        >
                          {navLink.title}
                        </Link>
                      </li>
                    ))}

                  </ul>

                </div>
              )})}

          </div>

        </nav>

        <div className="c-footer-copyright">

          <span>
            © Lava Foundation., 2024. All Right Reserved.
          </span>

          <ul>
            {LegalNavItems.map((link, legalIdx) => (
              <li key={legalIdx}>
                <Link href={link.link} title={link.title}>{link.title}</Link>
              </li>
            ))}
          </ul>

        </div>

        <div className="c-footer-tagline">
          {isMobileSm? (
            <Image
              className="c-mobile-sm"
              src="/images/lava-tagline-mobile-x2.webp"
              alt='Lava'
              width={288}
              height={322}
            />
          ):(
            <Image
              className="c-tablet-sm"
              src="/images/lava-tagline-x2.webp"
              alt='Lava'
              width={1360}
              height={83}
            />
          )}
        </div>

      </div>

    </footer>
  );
};
