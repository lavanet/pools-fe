'use client';

import styles from '@/styles/HomeSectionDataCardsItem.module.scss';

import clsx from 'clsx';

import { IDataCard } from '@/types';

export const DataCardItem = ({ message, title, value }: IDataCard) => (
  <article className={clsx(styles.cHomeSectionDataCardsItem, "c-home-section-data-cards-item")}>

    <div>

      <h2 className="h6">
        {title}
      </h2>

      {message && (
        <small>
          {message}
        </small>
      )}

    </div>

    <h3 className="h2 sharp-book">
      {value}
    </h3>

  </article>
);
