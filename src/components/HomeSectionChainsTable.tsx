'use client';

import styles from '@/styles/HomeSectionChainsTable.module.scss'
import {IcnCaretDown, IcnCaretUp} from '@assets/icons';

import { useMemo } from 'react';
import clsx from 'clsx';
import { Column, ColumnDef } from '@tanstack/react-table';

import { useMediaQuerySafe } from '@/hooks';
import { formatNumber, chainInfo } from '@/functions';
import { IChain } from '@/types';

import { ButtonLink, Table, Button, TableMobileText, HomeSectionChainsMobileSlider } from '@/components';

type ChainsTableProps = {
  filter: string;
  chains: IChain[];
};

const generatedColumns = (
  isMobile?: boolean
): ColumnDef<IChain>[] => {
  const createSortButtons = (field: keyof IChain) => {
    const SortButtons = (column: Column<IChain>) => (
      <div className="c-table-sort-btn-container">
        <Button
          extraClassName={clsx("c-table-sort-btn", {
            'is-active': column.getIsSorted() === 'asc'
          })}
          btnVariant="link"
          title="ASC"
          onClick={() => column.getIsSorted() === 'asc' ? column.clearSorting() : column.toggleSorting(false)}
          icon={<IcnCaretUp/>}
        />
        <Button
          extraClassName={clsx("c-table-sort-btn", {
            'is-active': column.getIsSorted() === 'desc'
          })}
          btnVariant="link"
          title="DESC"
          onClick={() => column.getIsSorted() === 'desc' ? column.clearSorting() : column.toggleSorting(true)}
          icon={<IcnCaretDown/>}
        />
      </div>
    );

    SortButtons.displayName = `SortButtons_${field}`;
    return SortButtons;
  };

  return [
    {
      id: "chain",
      accessorKey: 'name',
      enableSorting: true,
      header: ({column}) => (
        <div className="c-table-sort-th">
          <span>Chain name</span>
          {createSortButtons('name')(column)}
        </div>
      ),
      cell: ({row}) => {
        const chain = row.original.name

        return (
          <>
            {isMobile && (
              <TableMobileText title="Chain name" isHidden/>
            )}

            <div className='c-flexbox'>
              <i>
                {chainInfo(chain ? chain.toLowerCase() : 'N/A', 'icon', row.original.logo)}
              </i>
              <span>{chain}</span>
            </div>
          </>
        )
      }
    },
    {
      id: "rpc-providers",
      accessorKey: 'rpcProviders',
      enableSorting: true,
      header: ({column}) => (
        <div className="c-table-sort-th">
          <span>Total RPC providers</span>
          {createSortButtons('rpcProviders')(column)}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <TableMobileText title="Total RPC providers"/>
            )}
            <span>{row.original.rpcProviders}</span>
          </>
        )
      }
    },
    {
      id: "requests",
      accessorKey: 'requests',
      enableSorting: true,
      header: ({column}) => (
        <div className="c-table-sort-th">
          <span>Total requests</span>
          {createSortButtons('requests')(column)}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <TableMobileText title="Total requests"/>
            )}
            <span>{formatNumber(row.original.requests, true)}</span>
          </>
        )
      }
    },
    {
      id: "service",
      accessorKey: 'service',
      enableSorting: true,
      header: ({column}) => (
        <div className="c-table-sort-th">
          <span>Service</span>
          {createSortButtons('service')(column)}
        </div>
      ),
      cell: ({row}) => {
        return (
          <>
            {isMobile && (
              <TableMobileText title="Service"/>
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
              <TableMobileText title="Actions" isHidden/>
            )}

            <div className="c-button-container">
              <ButtonLink
                href={row.original.rpc_url ?? 'https://docs.lavanet.xyz/provider-setup'}
                btnSize="sm"
                text="Run a node"
              />

              <ButtonLink
                href='https://docs.lavanet.xyz/chains'
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

  const columns = useMemo(() => generatedColumns(isMobile), [isMobile]);

  const filteredChains = useMemo(() =>
      chains.filter((chain) => chain.name.toLowerCase().includes(filter.toLowerCase())),
    [chains, filter]
  );

  return (
    <section className={clsx(styles.cHomeSectionChainsTable, "c-home-section-chains-table")}>
      {isMobile? (
        <div className="c-home-section-chains-mobile-slider c-mobile">
          <HomeSectionChainsMobileSlider
            data={filteredChains}
          />
        </div>
      ):(
        <Table
          extraClassName="is-responsive c-desktop"
          columns={columns}
          data={filteredChains}
          defaultEmptyTitle="No results found"
          defaultEmptyParagraph="No chains matching your search criteria were found"
        />

      )}

    </section>
  );
};
