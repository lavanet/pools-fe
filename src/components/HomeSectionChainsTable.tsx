'use client';

import styles from '@/styles/HomeSectionChainsTable.module.scss'
import {IcnCaretDown, IcnCaretUp} from '@assets/icons';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { ColumnDef } from '@tanstack/react-table';

import { useMediaQuerySafe } from '@/hooks';
import { getChainInfo } from '@/utils/chainInfo';
import { IChain } from '@/types';

import { CustomTable, Button, CustomTableMobileText } from '@/components';
import { HomeSectionChainsMobileSlider } from '@/components/HomeSectionChainsMobileSlider';

type ChainsTableProps = {
  filter: string;
  chains: IChain[];
};

type SortConfig = {
  key: keyof IChain;
  direction: 'asc' | 'desc';
} | null;

const generatedColumns = (
  onSort: (field: keyof IChain, direction: 'asc' | 'desc') => void,
  sortConfig: SortConfig,
  isMobile?: boolean
): ColumnDef<IChain>[] => {
  const createSortButtons = (field: keyof IChain) => (
    <div className="c-table-sort-btn-container">
      <Button
        extraClassName={clsx("c-table-sort-btn", { 'is-active': sortConfig?.key === field && sortConfig.direction === 'asc' })}
        btnVariant="link"
        title="ASC"
        onClick={() => onSort(field, 'asc')}
        icon={<IcnCaretUp/>}
      />
      <Button
        extraClassName={clsx("c-table-sort-btn", { 'is-active': sortConfig?.key === field && sortConfig.direction === 'desc' })}
        btnVariant="link"
        title="DESC"
        onClick={() => onSort(field, 'desc')}
        icon={<IcnCaretDown/>}
      />
    </div>
  );

  return [
    {
      id: "chain",
      header: () => (
        <div className="c-table-sort-th">
          <span>Chain name</span>
          {createSortButtons('name')}
        </div>
      ),
      cell: ({row}) => {
        const chain = row.original.name
        return (
          <>
            {isMobile && (
              <CustomTableMobileText title="Chain name" isHidden/>
            )}

            <div className='c-flexbox'>
              <i>
                {getChainInfo(chain, 'icon')}
              </i>
              <span>{chain}</span>
            </div>
          </>
        )
      }
    },
    {
      id: "rpc-providers",
      header: () => (
        <div className="c-table-sort-th">
          <span>Total RPC providers</span>
          {createSortButtons('rpcProviders')}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <CustomTableMobileText title="Total RPC providers"/>
            )}
            <span>{row.original.rpcProviders}</span>
          </>
        )
      }
    },
    {
      id: "requests",
      header: () => (
        <div className="c-table-sort-th">
          <span>Total requests</span>
          {createSortButtons('requests')}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <CustomTableMobileText title="Total requests"/>
            )}
            <span>{row.original.requests}</span>
          </>
        )
      }
    },
    {
      id: "service",
      header: () => (
        <div className="c-table-sort-th">
          <span>Service</span>
          {createSortButtons('service')}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <CustomTableMobileText title="Service"/>
            )}
            <span>{row.original.service}</span>
          </>
        )
      }
    },
    {
      id: "action",
      header: () => <span className="c-visually-hidden">Actions</span>,
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <CustomTableMobileText title="Actions" isHidden/>
            )}

            <div className="c-button-container">
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
          </>
        )
      }
    },
  ]
}

export const HomeSectionChainsTable = ({ chains, filter }: ChainsTableProps) => {
  const isMobile /* boolean | undefined */ = useMediaQuerySafe('(max-width: 991px)');

  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const handleSort = (field: keyof IChain, direction: 'asc' | 'desc') => {
    setSortConfig({ key: field, direction });
  };

  const columns = useMemo(() => generatedColumns(handleSort, sortConfig, isMobile), [isMobile, sortConfig]);

  const filteredChains = useMemo(() =>
      chains.filter((chain) => chain.name.toLowerCase().includes(filter.toLowerCase())),
    [chains, filter]
  );

  const sortedAndFilteredChains = useMemo(() => {
    let result = [...filteredChains];

    if (sortConfig) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [filteredChains, sortConfig]);

  return (
    <section className={clsx(styles.cHomeSectionChainsTable, "c-home-section-chains-table")}>
      {isMobile? (
        <div className="c-home-section-chains-mobile-slider c-mobile">
          <HomeSectionChainsMobileSlider
            data={sortedAndFilteredChains}
          />
        </div>
      ):(
        <CustomTable
          extraClassName="is-responsive c-desktop"
          columns={columns}
          data={sortedAndFilteredChains}
          defaultEmptyTitle="No results found"
          defaultEmptyParagraph="No chains matching your search criteria were found"
        />

      )}

    </section>
  );
};
