'use client';

import clsx from 'clsx';
import { useHomeData } from './HomeDataProvider';
import { HomeSectionPoolsCard } from '@/components';
import styles from '@/styles/HomeSectionPools.module.scss';
import { getIconForChain } from '@/utils/chainIcons';

export const HomeSectionPools = () => {
  const { pools } = useHomeData();

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
