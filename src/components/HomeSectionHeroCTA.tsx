'use client';

import styles from '@/styles/HomeSectionHeroCTA.module.scss'

import clsx from 'clsx';

import { ButtonLink } from '@/components/common';

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

    <ButtonLink
      href="/"
      text="Learn more"
    />

  </section>
);
