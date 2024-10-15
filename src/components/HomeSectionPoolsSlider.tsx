'use client'

import {
  IcnDiscord,
  IcnGithub,
  IcnLongArrowLeft, IcnLongArrowRight,
  IcnTelegram,
  IcnX,
} from '@assets/icons';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';

import { IPool } from '@/types';
import { getChainInfo } from '@/utils/chainInfo';

import { Button, HomeSectionPoolsCard } from '@/components';
import { IcnAgoric } from '@assets/images/rounded-chains';
import { useMediaQuerySafe } from '@/hooks';

interface HomeSectionPoolsSliderProps {
  pools?: IPool[];
}

export const HomeSectionPoolsSlider = ({ pools }: HomeSectionPoolsSliderProps) => {
  const isMobile /* boolean | undefined */ = useMediaQuerySafe('(max-width: 991px)');
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <div className='loader'/>
  }

  if (!pools || pools.length === 0) {
    return (
      <>
        <p>No pools available at the moment.</p>
      </>
    );
  }

  return (
    <div className="c-home-section-pools-slider-wrapper">

      <div className='c-home-section-pools-slider-content'>

        <Swiper
          modules={[Grid, Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          slidesPerGroup={1}
          grid={{
            rows: 0,
          }}
          navigation={{
            enabled: false,
            prevEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-prev`,
            nextEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-next`,
          }}
          pagination={{
            el: `.c-home-section-pools .c-home-section-pools-footer .swiper-pagination`,
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              navigation: {
                enabled: true,
                prevEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-prev`,
                nextEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-next`,
              },
              grid: {
                rows: 2,
                fill: "row"
              }
            },
            1200: {
              slidesPerView: 3,
              navigation: {
                enabled: true,
                prevEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-prev`,
                nextEl: `.c-home-section-pools .c-home-section-pools-footer .swiper-button-next`,
              },
              grid: {
                rows: 2,
                fill: "row"
              }
            },
          }}

        >
          {pools.map((pool) => (
            <SwiperSlide
              key={pool.id}
            >
              <HomeSectionPoolsCard
                {...pool}
                icon={getChainInfo(pool.title, 'icon')}
              />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <HomeSectionPoolsCard
              id="test-1"
              title="Title"
              service="service"
              node_runner={12}
              requests={16}
              value={"2000"}
              currency={"Eth"}
              monthly_rewards={12}
              future_rewards={45}
              past_rewards={24}
              icon={<IcnDiscord/>}
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomeSectionPoolsCard
              id="test-2"
              title="Title"
              service="service"
              node_runner={12}
              requests={16}
              value={"2000"}
              currency={"Eth"}
              monthly_rewards={12}
              future_rewards={45}
              past_rewards={24}
              icon={<IcnDiscord/>}
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomeSectionPoolsCard
              id="test-3"
              title="Title"
              service="service"
              node_runner={12}
              requests={16}
              value={"2000"}
              currency={"Eth"}
              monthly_rewards={12}
              future_rewards={45}
              past_rewards={24}
              icon={<IcnDiscord/>}
            />
          </SwiperSlide>

          {/*  <SwiperSlide>*/}
          {/*  <HomeSectionPoolsCard*/}
          {/*    id="test-4"*/}
          {/*    title="Title"*/}
          {/*    service="service"*/}
          {/*    node_runner={12}*/}
          {/*    requests={16}*/}
          {/*    value={"2000"}*/}
          {/*    currency={"Eth"}*/}
          {/*    monthly_rewards={12}*/}
          {/*    future_rewards={45}*/}
          {/*    past_rewards={24}*/}
          {/*    icon={<IcnDiscord/>}*/}
          {/*  />*/}
          {/*</SwiperSlide>*/}


        </Swiper>

      </div>

      <div className='c-home-section-pools-footer'>

          <Button
            extraClassName="swiper-button-prev c-desktop"
            btnColor="grey"
            title="Previous"
            icon={<IcnLongArrowLeft/>}
          />

        <div>
          <div className="swiper-pagination" />
        </div>

          <Button
            extraClassName="swiper-button-next c-desktop"
            btnColor="grey"
            title="Next"
            icon={<IcnLongArrowRight/>}
          />

      </div>

    </div>
  );
};
