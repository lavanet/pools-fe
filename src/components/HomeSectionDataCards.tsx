'use client';

import styles from '@/styles/HomeSectionDataCards.module.scss';

import clsx from 'clsx';

import { IDataCard } from '@/types';

import { DataCardItem } from '@/components';

interface HomeSectionDataCardsProps {
  dataCards?: IDataCard[];
}

export function HomeSectionDataCards({ dataCards }: HomeSectionDataCardsProps) {
  if (!dataCards || dataCards.length === 0) {
    return <section className={clsx(styles.cHomeSectionDataCards, "c-home-section-data-cards")}>No data available</section>;
  }

  return (
    <section className={clsx(styles.cHomeSectionDataCards, "c-home-section-data-cards")}>
      {dataCards.map((card) => (
        <DataCardItem {...card} key={card.title} />
      ))}
    </section>
  );
}
