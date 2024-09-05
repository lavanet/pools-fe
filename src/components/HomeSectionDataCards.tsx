'use client';

import clsx from 'clsx';
import { homeSectionDataCards } from '@/utils/variables';
import { DataCardItem } from '@/components';
import styles from '@/styles/HomeSectionDataCards.module.scss';

export const HomeSectionDataCards = () => (
  <section className={clsx(styles.cHomeSectionDataCards, "c-home-section-data-cards")}>

    {homeSectionDataCards.map((card) => (
      <DataCardItem {...card} key={card.title}/>
    ))}

  </section>
);

