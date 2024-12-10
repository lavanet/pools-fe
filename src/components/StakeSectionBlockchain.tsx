import styles from '@/styles/StakeSectionHeader.module.scss'

import clsx from 'clsx';
import { Button, ButtonLink } from '@/components/common';
import Image from 'next/image';

export const StakeSectionBlockchain = () => (
  <section className={clsx(styles.cStakeSectionHeader, "c-stake-section-blockchain")}>

    <div className='c-stake-section-blockchain-title'>

      <h2 className="h3">
        Take your Blockchain access to the next level with Lava.
      </h2>

      <h3>
        Lava offers other ecosystems and enterprise support with a unique decentralized RPC marketplace infrastructure. Lava is the most advanced decentralized RPC solution in the industry.
      </h3>

    </div>

    <div className='c-stake-section-blockchain-paragraph'>

      <p>
        Restaking in Lava enhances your staking experience by unlocking additional rewards and diversifying earnings. It allows you to utilize staked Lava tokens to support a Provider, exposing you to more rewards. Earn through traditional staking and elevate your rewards with restaking.
      </p>

      <ButtonLink href="#" text="Learn" btnColor="white-outline"/>
    </div>


  </section>
);