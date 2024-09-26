'use client';

import { useHomeData } from './HomeDataProvider';
import clsx from 'clsx';
import { DataCardItem } from '@/components';
import styles from '@/styles/HomeSectionDataCards.module.scss';

export function HomeSectionDataCards() {
  // Fetch data on the server
  const { dataCards } = useHomeData();

  return (
    <section className={clsx(styles.cHomeSectionDataCards, "c-home-section-data-cards")}>

      {dataCards.map((card) => (
        <DataCardItem {...card} key={card.title} />
      ))}

    </section>
  );
}

