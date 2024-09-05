'use client';

import clsx from 'clsx';
import { SocialNavItems } from '@/utils/variables';
import { CustomButtonLink, HomeSectionHeroEmailForm } from '@/components';
import styles from '@/styles/HomeSectionHeroEmail.module.scss';

export const HomeSectionHeroEmail = () => {
  return (
    <section className={clsx(styles.cHomeSectionHeroEmail, "c-home-section-hero-email")}>

      <div className="c-home-section-hero-email-wrapper">

        <h2 className="h1 sharp-medium">
          Stay updated on volcanic activity
        </h2>

        <HomeSectionHeroEmailForm/>

        <div className="c-home-section-hero-email-footer">

          <h3 className="h6 retro">
            Join Our Community
          </h3>

          <div>
            {SocialNavItems.map((link, linkIdx) => (
              <CustomButtonLink
                key={linkIdx}
                href={link.link}
                isExternal
                btnVariant="icon"
                btnColor="white"
                title={link.title}
                icon={link.icon}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};
