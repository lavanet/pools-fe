'use client';

import styles from '@/styles/HomeBanner.module.scss';

import { ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { ButtonLink } from '@/components/common';

type BannerProps = {
  image?: 'lavuci' | 'lavuci-bag';
  title: string;
  message: string;
  btnLink: string;
  btnText: string;
  btnColor?: "white" | "white-outline" | "ghost";
  btnVariant?: "icon" | "link";
  btnIcon?: ReactNode;
  btnIconPlacement?: "right";
};

export const HomeBanner = (
  {
    image = 'lavuci',
    title,
    message,
    btnLink,
    btnText,
    btnColor,
    btnVariant,
    btnIcon,
    btnIconPlacement,
  }: BannerProps) => {

  return (
    <aside className={clsx(styles.cHomeBanner, "c-home-banner", image)}>

      <div className='c-home-banner-grid'>

        <div className='c-home-banner-grid-item-text'>

          <h2 className="h5 sharp-medium">
            {title}
          </h2>

          <p>
            {message}
          </p>

        </div>

        <div className="c-button-container">

          <ButtonLink
            href={btnLink}
            btnVariant={btnVariant && btnVariant}
            btnColor={btnColor && btnColor}
            text={btnText}
            icon={btnIcon && btnIcon}
            iconPlacement={btnIconPlacement && btnIconPlacement}
          />

        </div>


        <div className="c-home-banner-grid-item-image">
          <Image
            alt="Lavuci"
            src={`/images/${image}-x2.webp`}
            width={146}
            height={146}
          />
        </div>

      </div>

    </aside>
  );
};

