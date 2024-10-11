'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

import { IChain } from '@/types';

import { HomeSectionChainsMobileCard } from '@/components/HomeSectionChainMobileCard';
import { useEffect, useState } from 'react';

type HomeSectionChainsMobileSliderProps = {
  data: IChain[];
};

export const HomeSectionChainsMobileSlider = ({ data }: HomeSectionChainsMobileSliderProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <div className="c-home-section-chains-mobile-slider-wrapper">

      <Swiper
        modules={[Grid, Pagination]}
        slidesPerView={1}
        spaceBetween={12}
        grid={{
          rows: 2,
          fill: "column"
        }}
        pagination={{
          el: `.c-home-section-chains-mobile-slider-footer .swiper-pagination`,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
        }}
      >
        {data.map((card, cardIdx) => (
          <SwiperSlide
            key={cardIdx}
          >
            <HomeSectionChainsMobileCard
              {...card}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='c-home-section-chains-mobile-slider-footer'>
        <div className='swiper-pagination'/>
      </div>

    </div>
  );
};
