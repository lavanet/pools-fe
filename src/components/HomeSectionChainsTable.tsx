'use client';

import {
  TableCell,
  TableFooter,
  TableRow,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IChain } from '@/types';
import { initialChains } from '@/utils/dummyData';
import { CustomButton, HomeSectionChainsTableCellHead, HomeSectionChainsTableCellText } from '@/components';
import { CustomTableMobileText } from '@/components/common/CustomTableMobileText';
import { IconAgoric } from '@/icons';
import styles from '@/styles/HomeSectionChainsTable.module.scss'

type ChainsTableProps = {
  filter: string;
};

export const HomeSectionChainsTable = ({ filter }: ChainsTableProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [chains, setChains] = useState<IChain[]>(initialChains);

  useEffect(() => {
    const filteredChains = initialChains.filter((chain) =>
      chain.name.toLowerCase().includes(filter.toLowerCase())
    );
    setChains(filteredChains);
  }, [filter]);

  const handleSorting = (property: keyof IChain, ascending: boolean) => {
    const sortedChains = [...chains].sort((a, b) => {
      if (a[property] < b[property]) return ascending ? -1 : 1;
      if (a[property] > b[property]) return ascending ? 1 : -1;
      return 0;
    });
    setChains(sortedChains);
  };

  return (
    <section className={clsx(styles.cHomeSectionChainsTable, "c-home-section-chains-table")}>

        <table  className="c-table is-responsive">

          <thead>

          <tr>
            <HomeSectionChainsTableCellHead title="Chain name" />

            <HomeSectionChainsTableCellHead
              title="Total RPC providers"
              handleAbsSorting={() => handleSorting('rpcProviders', true)}
              handleDescSorting={() => handleSorting('rpcProviders', false)}
            />

            <HomeSectionChainsTableCellHead
              title="Total requests"
              handleAbsSorting={() => handleSorting('requests', true)}
              handleDescSorting={() => handleSorting('requests', false)}
            />

            <HomeSectionChainsTableCellHead
              title="Service"
              handleDescSorting={() => handleSorting('service', false)}
            />

            <TableCell>
              <span className='c-visually-hidden'>
                Actions
              </span>
            </TableCell>

          </tr>

          </thead>

          {chains.length ? (
            <tbody>
            {chains.map((chain) => (
              <tr key={chain.name}>
                <TableCell>
                  {isMobile && (
                    <CustomTableMobileText title='Chain name' isHidden />
                  )}

                  <div className="c-flexbox">

                    <i>
                      <IconAgoric />
                    </i>

                    <p className="h6">
                      {chain.name}
                    </p>

                  </div>

                </TableCell>

                <HomeSectionChainsTableCellText
                  mobileTitle='Total RPC providers'
                  text={`${chain.rpcProviders}`}
                  textVariant={!isMobile && "h6"}
                />

                <HomeSectionChainsTableCellText
                  mobileTitle='Total requests'
                  text={`${chain.requests}m`}
                  textVariant={!isMobile && "h6"}
                />

                <HomeSectionChainsTableCellText
                  mobileTitle='Service'
                  text={chain.service}
                  textVariant={!isMobile && "h6"}
                />

                <TableCell>
                  {isMobile && (
                    <CustomTableMobileText title='Actions' isHidden />
                  )}

                  <div className="c-button-container">
                    <CustomButton
                      btnSize="sm"
                      text="Run a node"
                    />

                    <CustomButton
                      btnSize="sm"
                      btnColor="white"
                      text="Endpoints"
                    />

                  </div>

                </TableCell>

              </tr>
            ))}
            </tbody>
          ):(
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} component="td">
                  <div>
                    <Typography variant="h4" component="h3">
                      No results found
                    </Typography>
                    <Typography component="p">
                      No chains matching your search criteria were found
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          )}

        </table>

    </section>
  );
};
