'use client';

import clsx from 'clsx';
import { useHomeData } from './HomeDataProvider';
import { HomeSectionPoolsCard } from '@/components';
import styles from '@/styles/HomeSectionPools.module.scss';
import { getIconForChain } from '@/utils/chainIcons';

export const HomeSectionPools = () => {
  const { pools, loading } = useHomeData();

  if (loading) {
    return <div className={styles.loading}>Loading pools...</div>;
  }

  return (
    <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>
      {pools.map((pool) => (
        <HomeSectionPoolsCard
          key={pool.id}
          {...pool}
          icon={getIconForChain(pool.title)}
        />
      ))}
    </section>
  );
};
