import clsx from 'clsx';
import { HomeSectionPoolsCard } from '@/components';
import styles from '@/styles/HomeSectionPools.module.scss';
import { IPool } from '@/types';
import { getChainInfo } from '@/utils/chainInfo';

interface HomeSectionPoolsProps {
  pools?: IPool[];
}

export const HomeSectionPools = ({ pools }: HomeSectionPoolsProps) => {
  if (!pools || pools.length === 0) {
    return (
      <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>
        <p>No pools available at the moment.</p>
      </section>
    );
  }

  return (
    <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>
      {pools.map((pool) => (
        <HomeSectionPoolsCard
          key={pool.id}
          {...pool}
          icon={getChainInfo(pool.title, 'icon')}
        />
      ))}
    </section>
  );
};
