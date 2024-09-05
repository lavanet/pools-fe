'use client';

import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';

import clsx from 'clsx';
import { IProduct } from '@/types';
import { CustomButtonLink } from '@/components/common';
import {IcnArrowUpRetro, IcnArrowRightRetro} from '@assets/icons'
import styles from '@/styles/HomeSectionProductsCard.module.scss';

export const HomeSectionProductsCard = ({ text, title, type }: IProduct) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <article className={clsx(styles.cHomeSectionProductsCard, "c-home-section-products-card")}>

      <div className="c-home-section-products-card-wrapper">

        <div className="c-home-section-products-card-body">

          <div className="c-home-section-products-card-badge">
            <span className={clsx(type)}>
              <span>{title}</span>
            </span>
          </div>

          <h2 className="h3">
            {text}
          </h2>

          <div className='c-button-container'>
            {isMobile?(
              <CustomButtonLink
                href='/'
                title={`Try ${title}`}
                btnVariant="link"
                icon={<IcnArrowUpRetro/>}
              />
            ):(
              <CustomButtonLink
                btnColor="white-outline"
                btnSize="xl"
                href="/"
                text={`Try ${title}`}
                icon={<IcnArrowRightRetro/>}
                iconPlacement="right"
              />
            )}
          </div>

        </div>

      </div>

    </article>
  );
};
