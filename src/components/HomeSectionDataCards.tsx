'use client';

import { useHomeData } from '@/contexts/HomeDataContext';
import clsx from 'clsx';
import { DataCardItem } from '@/components';
import styles from '@/styles/HomeSectionDataCards.module.scss';

export function HomeSectionDataCards() {
  // Fetch data on the server
  const { dataCards, loading, error } = useHomeData();

  if (error) return <div>Error loading data cards: {error.message}</div>;
  if (loading) return <div>Loading data cards...</div>;

  return (
    <section className={clsx(styles.cHomeSectionDataCards, "c-home-section-data-cards")}>

      {dataCards.map((card) => (
        <DataCardItem {...card} key={card.title} />
      ))}

    </section>
  );
}

