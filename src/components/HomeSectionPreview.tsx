'use client';
import styles from '@/styles/HomeSectionPreview.module.scss';

import clsx from 'clsx';

import { HomeBanner } from '@/components';

import { IcnArrowUp } from '@assets/icons';

export const HomeSectionPreview = () => (
  <section className={clsx(styles.cHomeSectionPreview, "c-home-section-preview",)}>

    <div className="c-home-section-preview-text">

      <h1 className="sharp-medium responsive-text-56">
        Lava Incentive Pools
      </h1>

      <p className="responsive-text-20 text-grey-100">
        Boost infrastructure for your favourite chain, earn rewards.
      </p>

    </div>

    <div className="c-home-section-preview-banner">

      <HomeBanner
        btnLink="http://docs.lavanet.xyz/provider-setup"
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
