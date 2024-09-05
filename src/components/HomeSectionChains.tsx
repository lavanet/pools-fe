'use client';

import { useState } from 'react';
import clsx from 'clsx';
import useDebounce from '@/hooks/useDebounce';
import { CustomInput, HomeBanner, HomeSectionChainsTable } from '@/components';
import {IcnSearch} from '@assets/icons';
import styles from '@/styles/HomeSectionChains.module.scss';

export const HomeSectionChains = () => {
  const [searchValue, setSeachValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  return (
    <section className={clsx(styles.cHomeSectionChains, "c-home-section-chains")}>

      <div className="c-home-section-chains-grid">

        <div className="c-home-section-chains-grid-item-text">

          <h2 className="sharp-medium">
            Other chains
          </h2>

          <p className="h5">
            Chains that do not yet have incentivized pools.
          </p>

        </div>

        <HomeBanner
          btnColor="white"
          btnText="Learn more"
          btnLink="/"
          message="Add it yourself as a specification and earn LAVA for every request served"
          title="Don't see your favourite chain?"
        />

        <CustomInput
          type="text"
          name="search_chain_table"
          labelText="Search chain name"
          labelIsHidden
          placeholder="Search chain name"
          inputGroupText={<IcnSearch />}
          inputGroupPlacement="left"
          value={searchValue}
          onChange={(e) => {
            setSeachValue(e.currentTarget.value);
          }}
        />

      </div>

      <HomeSectionChainsTable
        filter={debouncedSearchValue}
      />

    </section>
  );
};
