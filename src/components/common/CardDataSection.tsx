'use client';

import styles from '@/styles/CardDataSection.module.scss';

import clsx from 'clsx';

import { IDataCard } from '@/types';

import { CardData } from '@/components';

interface CardDataSectionProps {
  extraClassName?: string;
  dataCards?: IDataCard[];
}

export function CardDataSection({ dataCards }: CardDataSectionProps) {
  if (!dataCards || dataCards.length === 0) {
    return (
      <section className={clsx(styles.cCardDataSection, "c-card-data-section")}>
        No data available
      </section>
    );
  }

  return (
    <section className={clsx(styles.cCardDataSection, "c-card-data-section")}>
      {dataCards.map((card) => (
        <CardData {...card} key={card.title} />
      ))}
    </section>
  );
}
