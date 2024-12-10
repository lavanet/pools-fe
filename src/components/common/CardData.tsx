'use client';

import styles from '@/styles/CardData.module.scss';

import clsx from 'clsx';

import { IDataCard } from '@/types';

export const CardData = ({ extraClassName, title, message, value }: IDataCard) => (
  <article className={clsx(styles.cCardData, "c-card-data", extraClassName && extraClassName)}>

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