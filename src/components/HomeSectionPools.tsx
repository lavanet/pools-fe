'use client'

import styles from '@/styles/HomeSectionPools.module.scss';
import clsx from 'clsx';
import { IPool } from '@/types';

import { HomeSectionPoolsSlider } from '@/components/HomeSectionPoolsSlider';

interface HomeSectionPoolsProps {
  pools?: IPool[];
}

export const HomeSectionPools = ({ pools }: HomeSectionPoolsProps) => {
  return (
    <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>

      <div className='c-home-section-pools-slider'>
        <HomeSectionPoolsSlider pools={pools}/>
      </div>
    </section>
  );
};
