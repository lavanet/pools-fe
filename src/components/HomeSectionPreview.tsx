'use client';

import clsx from 'clsx';
import { HomeBanner } from '@/components';
import { IcnArrowUp } from '@assets/icons';
import styles from '@/styles/HomeSectionPreview.module.scss';

export const HomeSectionPreview = () => (
  <section className={clsx(styles.cHomeSectionPreview, "c-home-section-preview",)}>

    <div className="c-home-section-preview-text">

      <h1 className="sharp-medium">
        Lava Incentive Pools
      </h1>

      <p>
        Boost infrastructure for your favourite chain, earn rewards.
      </p>

    </div>

    <div className="c-home-section-preview-banner">

      <HomeBanner
        btnLink="/"
        btnVariant="link"
        btnText="Become an RPC Provider"
        btnIcon={<IcnArrowUp/>}
        btnIconPlacement="right"
        image="lavuci-bag"
        message="He loves dealing with node runners. "
        title="Meet Lavuci"
      />

    </div>

  </section>
);
