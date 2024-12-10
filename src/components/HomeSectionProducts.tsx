'use client';

import styles from '@/styles/HomeSectionProducts.module.scss';

import clsx from 'clsx';

import { homeSectionProducts } from '@/utils';

import { HomeSectionProductsCard } from '@/components';

export const HomeSectionProducts = () => (
  <section className={clsx(styles.cHomeSectionProducts,"c-home-section-products")}>
      {homeSectionProducts.map((product) => (
        <HomeSectionProductsCard
          key={product.title}
          {...product}
        />
      ))}
  </section>
);
