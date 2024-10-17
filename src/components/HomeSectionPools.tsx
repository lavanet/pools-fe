'use client'

import styles from '@/styles/HomeSectionPools.module.scss';
import { IcnSearch } from '@assets/icons';

import clsx from 'clsx';
import { IPool } from '@/types';

import { HomeSectionPoolsSlider } from '@/components/HomeSectionPoolsSlider';
import { Input, InputSelect } from '@/components/form-elements';
import { InputCheckRadio } from '@/components/form-elements/InputCheckRadio';
import { useState } from 'react';

interface HomeSectionPoolsProps {
  pools?: IPool[];
}

const HomePoolSortOptions = [
  {label: "Total reward (Descending)", value: "total-rewards-desc"},
  {label: "Total reward (Ascending)", value: "total-rewards-asc"},
  {label: "Other", value: "other"},
  {label: "Vanilla", value: "vanilla"},
  {label: "Chocolate", value: "chocolate"},
]

const HomePoolFilters = [
  {label: "Hot", value: "hot", icon: "🌋"},
  {label: "New", value: "new", icon: "⭐️"},
  {label: "Upcoming", value: "upcoming", icon: "🚀"},
]

export const HomeSectionPools = ({ pools }: HomeSectionPoolsProps) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const handleFilterChange = (index: number) => {
    setActiveFilter(index);
  };

  return (
    <section className={clsx(styles.cHomeSectionPools, "c-home-section-pools")}>

      <div className='c-home-section-pools-header'>
        {/*
        <Input
          type="search"
          name="home_pool_search"
          labelText="Search chain name"
          labelIsHidden
          placeholder="Search chain name"
          inputGroupText={<IcnSearch />}
          inputGroupPlacement="left"
          disabled
        />
        */}

        <InputSelect
          name="home_pool_sort"
          options={HomePoolSortOptions}
          labelText="Sort"
          labelIsHidden
          inputStyle="filled"
          inputGroupText="Sort by: "
          defaultValue={[HomePoolSortOptions[0]]}
          isDisabled
        />

      </div>

      <div className='c-home-section-pools-slider'>
        <HomeSectionPoolsSlider pools={pools}/>
      </div>
    </section>
  );
};
