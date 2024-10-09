'use client'

import styles from '@/styles/HomeSectionPools.module.scss';
import { IcnArrowLeftRetro, IcnArrowRightRetro, IcnGithub, IcnTelegram, IcnX } from '@assets/icons';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Grid } from 'swiper/modules';

import { IPool } from '@/types';
import { getChainInfo } from '@/utils/chainInfo';

import { CustomButton, HomeSectionPoolsCard } from '@/components';

interface HomeSectionPoolsProps {
  pools?: IPool[];
}

export const HomeSectionPools = ({ pools }: HomeSectionPoolsProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null
  }

  if (!pools || pools.length === 0) {
    return (
      <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>
        <p>No pools available at the moment.</p>
      </section>
    );
  }

  return (
    <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>

      <div className='c-button-container'>
        <CustomButton
          extraClassName="swiper-button-prev"
          btnVariant="icon"
          btnColor="white-outline"
          title="Previous"
          icon={<IcnArrowLeftRetro/>}
        />

        <CustomButton
          extraClassName="swiper-button-next"
          btnVariant="icon"
          btnColor="white-outline"
          title="Next"
          icon={<IcnArrowRightRetro/>}
        />
      </div>

      <div className='c-home-section-pools-slider'>

        <div className="c-home-section-pools-slider-content">
          <Swiper
            modules={[Grid, Navigation, Pagination, Scrollbar]}
            spaceBetween={12}
            slidesPerView={1}
            slidesPerGroup={1}
            grid={{
              rows: 0,
            }}
            navigation={{
              enabled: false,
              prevEl: `.c-home-section-pools .swiper-button-prev`,
              nextEl: `.c-home-section-pools .swiper-button-next`,
            }}
            pagination={{
              el: `.c-home-section-pools .swiper-pagination`,
              clickable: true,
            }}
            scrollbar={{
              el: ".c-home-section-pools .c-home-section-pools-footer .swiper-scrollbar",
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                navigation: {
                  enabled: true,
                },
                grid: {
                  rows: 2,
                  fill: "row"
                }
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 4,
                navigation: {
                  enabled: true,
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
                icon={<IcnX/>}
              />
            </SwiperSlide>

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
                icon={<IcnX/>}
              />
            </SwiperSlide>

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
                icon={<IcnGithub/>}
              />
            </SwiperSlide>

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
                icon={<IcnTelegram/>}
              />
            </SwiperSlide>

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
                icon={<IcnTelegram/>}
              />
            </SwiperSlide>

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
                icon={<IcnTelegram/>}
              />
            </SwiperSlide>

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
                icon={<IcnTelegram/>}
              />
            </SwiperSlide>

          </Swiper>

        </div>

      </div>

      <div className='c-home-section-pools-footer'>
        <div className="swiper-scrollbar" />
        <div className="swiper-pagination" />
      </div>

    </section>
  );
};
