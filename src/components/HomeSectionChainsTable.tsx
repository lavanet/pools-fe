'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { IconSvg } from '@/components/common/IconSvg';
import { IconAgoric } from '@/icons';
import { HomeSectionChainsTableCellHead, HomeSectionChainsTableCellText } from '@/components';
import { IChain } from '@/types';
import { visuallyHidden } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';
import { CustomTableMobileText } from '@/components/CustomTableMobileText';

const initialChains: IChain[] = [
  {
    name: 'Agoric',
    requests: 105,
    rpcProviders: 6,
    service: 'RPC',
  },
  {
    name: 'Aptos',
    requests: 976,
    rpcProviders: 13,
    service: 'Indexers',
  },
  {
    name: 'Arbitrum',
    requests: 847,
    rpcProviders: 3,
    service: 'RPC',
  },
  {
    name: 'Avalanche',
    requests: 344,
    rpcProviders: 5,
    service: 'RPC',
  },
  {
    name: 'Base',
    requests: 437,
    rpcProviders: 14,
    service: 'RPC',
  },
  {
    name: 'Beacon',
    requests: 234,
    rpcProviders: 3,
    service: 'RPC',
  },
  {
    name: 'Berachain',
    requests: 164,
    rpcProviders: 9,
    service: 'RPC',
  },
  {
    name: 'Canto',
    requests: 543,
    rpcProviders: 5,
    service: 'RPC',
  },
];

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
    <TableContainer>

      <StyledTable aria-label="chains table" className="is-responsive">

        <TableHead>

          <TableRow>
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
              <Typography
                variant="caption"
                component="span"
                // sx={visuallyHidden}
              >
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {chains.length ? (
          <TableBody>
            {chains.map((chain) => (
              <TableRow
                key={chain.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {isMobile && (
                    <CustomTableMobileText title='Chain name' isHidden />
                  )}

                  <Stack alignItems="center" direction="row" useFlexGap spacing={1.5}>

                    {/* TODO: replace with a brand icon */}
                    <StyledIcon>
                      <IconAgoric />
                    </StyledIcon>

                    <Typography variant="h6">
                      {chain.name}
                    </Typography>

                  </Stack>

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

                  <Stack
                    direction="row"
                    useFlexGap
                    spacing={1}
                  >
                    <Button
                      size="small"
                      variant="contained"
                    >
                      Run a node
                    </Button>

                    <Button
                      color="secondary"
                      size="small"
                      variant="contained"
                    >
                      Endpoints
                    </Button>

                  </Stack>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>
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

      </StyledTable>

    </TableContainer>
  );
};

const StyledIcon = styled('i')({
  width: 32,
  height: 32,
});

const StyledTable = styled(Table)({
  [theme.breakpoints.up('md')]: {
    '& thead tr th:last-child, & tbody tr td:last-child': {
      width: 0,
    },
  },

  [theme.breakpoints.down('md')]: {
    '& tbody tr td:last-child': {
      '& > div': {
        flexWrap: 'wrap',

        '& button': {
          flexGrow: 1,
        }
      },
    },
  },
});
