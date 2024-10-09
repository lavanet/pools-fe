'use client';

import clsx from 'clsx';
import { CustomButtonLink } from '@/components/common';
import styles from '@/styles/HomeSectionHeroCTA.module.scss'

export const HomeSectionHeroCTA = () => (
  <section className={clsx(styles.cHomeSectionHeroCTA, "c-home-section-hero-cta")}>

    <div>
      <h2 className="sharp-medium">
        Create an incentive pool
      </h2>

      <p className="h5">
        Launch, scale and optimize the public RPC for your ecosystem.
      </p>

    </div>

    <CustomButtonLink
      href="/"
      text="Learn more"
    />

  </section>
);
