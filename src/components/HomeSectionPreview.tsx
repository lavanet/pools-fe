'use client';

import clsx from 'clsx';
import { HomeBanner } from '@/components';
import styles from '@/styles/HomeSectionPreview.module.scss';

export const HomeSectionPreview = () => (
  <section className={clsx(styles.cHomeSectionPreview, "c-home-section-preview",)}>

    <div className="c-home-section-preview-text">

      <h1 className="sharp-medium">
        Lava Incentive Pools
      </h1>

      <p className="h5">
        Boost infrastructure for your favourite chain, earn rewards.
      </p>

    </div>

    <div className="c-home-section-preview-banner">

      <HomeBanner
        button="Become an RPC Provider"
        buttonType="text"
        image="lavuci-bag"
        link="/"
        message="He loves dealing with node runners. "
        title="Meet Lavuci"
      />

    </div>

  </section>
);
