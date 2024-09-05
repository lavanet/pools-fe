'use client';

import clsx from 'clsx';
import { homeSectionPools } from '@/utils/dummyData';
import { HomeSectionPoolsCard } from '@/components';
import styles from '@/styles/HomeSectionPools.module.scss';

export const HomeSectionPools = () => (
  <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>
    {homeSectionPools.map((pool, poolIdx) => (
      <HomeSectionPoolsCard
        key={poolIdx}
        {...pool}
      />
    ))}
  </section>
);
