'use client';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  IconButton,
  Stack,
  styled,
  TableCell,
  Typography,
} from '@mui/material';

type ChainsTableCellHeadProps = {
  title: string;
  handleAbsSorting?: () => void;
  handleDescSorting?: () => void;
};

export const ChainsTableCellHead = ({
  title,
  handleAbsSorting,
  handleDescSorting,
}: ChainsTableCellHeadProps) => (
  <TableCell>
    <Stack alignItems="center" direction="row" spacing={2}>
      {(handleAbsSorting || handleDescSorting) && (
        <Stack>
          {handleAbsSorting && (
            <StyledIconButton onClick={handleAbsSorting}>
              <ArrowDropUpIcon />
            </StyledIconButton>
          )}

          {handleDescSorting && (
            <StyledIconButton onClick={handleDescSorting}>
              <ArrowDropDownIcon />
            </StyledIconButton>
          )}
        </Stack>
      )}

      <StyledTypography variant="caption">{title}</StyledTypography>
    </Stack>
  </TableCell>
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#0C121A', // TODO: move to the palette
  borderRadius: 4,
  color: theme.palette.grey[300],
  height: 16,
  transition: 'color 0.3s',
  width: 24,

  '&:hover': { color: theme.palette.common.white },
}));
