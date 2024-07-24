import { TableCell, Typography } from '@mui/material';

type ChainsTableCellTextProps = { text: string };

export const ChainsTableCellText = ({ text }: ChainsTableCellTextProps) => (
  <TableCell>
    <Typography variant="h6">{text}</Typography>
  </TableCell>
);
