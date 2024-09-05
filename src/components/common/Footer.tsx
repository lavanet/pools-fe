'use client';

import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { LegalNavItems, navItems, SocialNavItems } from '@/utils/variables';
import { Logo } from '@/components';
import styles from '@/styles/Footer.module.scss'

export const Footer = () => {
  const isMobileSm = useMediaQuery('(max-width: 767px)');

  return(
    <footer className={clsx(styles.cFooter, "c-footer")}>

      <div className='c-container'>

        <nav className='c-footer-nav'>

          <div className='c-footer-nav-item logo'>
            <Logo />

            <p>
              Lava is a modular protocol where providers can quickly add
              support for any API and RPC. The multi-chain experience never
              felt so easy.
            </p>

            <div>
              {SocialNavItems.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.link}
                  title={link.title}
                >
                  <i>{link.icon}</i>
                </Link>
              ))}
            </div>

          </div>

          <div className="c-footer-nav-item menu">

            <div className="c-footer-nav-menu-item">
              {!isMobileSm && (
                <p className="c-mobile-sm"/>
              )}

              <Link href="/" title="Rollup Developers">
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