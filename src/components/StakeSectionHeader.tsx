import styles from '@/styles/StakeSectionHeader.module.scss'

import clsx from 'clsx';
import { Button } from '@/components/common';
import Image from 'next/image';

export const StakeSectionHeader = () => (
  <section className={clsx(styles.cStakeSectionHeader, "c-stake-section-header")}>

    <div className='c-stake-section-header-text'>

      <div className='c-stake-section-header-text-wrapper'>

        <h1 className="sharp-medium responsive-text-56">
          Lava Staking & Restaking
        </h1>

        <p className="responsive-text-20 text-grey-100">
          Restaking lets you maximize your staked Lava tokens potential. Delegate Lava with a Provider to boost rewards and earn APR through traditional staking.
        </p>

        <Button text="How to restake" btnColor="white-outline"/>

      </div>

    </div>

    <div className='c-stake-section-header-image'>
      <Image
        src="/images/lava-blockchain-3d-x2.webp"
        alt="Lava Staking & Restaking"
        width={512}
        height={512}
      />
    </div>

  </section>
);