'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { IconSvg } from '@/components/common/IconSvg';
import { IconAgoric } from '@/icons';
import { HomeSectionChainsTableCellHead, HomeSectionChainsTableCellText } from '@/components';
import { IChain } from '@/types';

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
      <Table aria-label="chains table">
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

            <TableCell align="right" />
          </TableRow>
        </TableHead>

        <TableBody>
          {chains.length ? (
            <>
              {chains.map((chain) => (
                <TableRow
                  key={chain.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack alignItems="center" direction="row" spacing={1.5}>
                      {/* TODO: replace with a brand icon */}
                      <StyledIcon>
                        <IconSvg>
                          <IconAgoric />
                        </IconSvg>
                      </StyledIcon>

                      <Typography variant="h6">{chain.name}</Typography>
                    </Stack>
                  </TableCell>

                  <HomeSectionChainsTableCellText text={`${chain.rpcProviders}`} />

                  <HomeSectionChainsTableCellText text={`${chain.requests}m`} />

                  <HomeSectionChainsTableCellText text={chain.service} />

                  <TableCell align="right">
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      spacing={1}
                    >
                      <Button size="small" variant="contained">
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
            </>
          ) : (
            <TableRow>
              <StyledTableCell colSpan={5}>
                <Typography align="center" variant="h6">
                  No chains found matching your search criteria
                </Typography>
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledIcon = styled('div')({
  fontSize: 32,
  lineHeight: 0,
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
  padding: theme.spacing(5),
}));
