'use client';

import styles from '@/styles/HomeSectionChainsMobileCard.module.scss';

import clsx from 'clsx';

import { getChainInfo } from '@/utils/chainInfo';
import { IChain } from '@/types';

import { Button } from '@/components/common';

export const HomeSectionChainsMobileCard = ({ name, requests , rpcProviders, service }: IChain) => (
  <article className={clsx(styles.cHomeSectionChainsMobileCard, "c-home-section-chains-mobile-card")}>

    <div className="c-home-section-chains-mobile-card-header">

      <i>
        {getChainInfo(name, 'icon')}
      </i>

      <h3 className="h6">
        {name}
      </h3>

    </div>

    <ul className="c-home-section-chains-mobile-card-list">
      <li>
        <em>Total RPC providers</em>
        <span>{rpcProviders}</span>
      </li>

      <li>
        <em>Total requests</em>
        <span>{requests}</span>
      </li>

      <li>
        <em>Service</em>
        <span>{service}</span>
      </li>
    </ul>

    <div className="c-home-section-chains-mobile-card-footer">
      <Button
        btnSize="sm"
        text="Run a node"
      />

      <Button
        btnSize="sm"
        btnColor="white"
        text="Endpoints"
      />
    </div>

  </article>
);