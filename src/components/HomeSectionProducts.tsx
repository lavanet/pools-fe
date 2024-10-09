'use client';

import clsx from 'clsx';
import { homeSectionProducts } from '@/utils/variables';
import { HomeSectionProductsCard } from '@/components';
import styles from '@/styles/HomeSectionProducts.module.scss';

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
