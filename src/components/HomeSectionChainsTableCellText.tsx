import { TableCell, Typography } from '@mui/material';

type ChainsTableCellTextProps = { text: string };

export const HomeSectionChainsTableCellText = ({ text }: ChainsTableCellTextProps) => (
  <TableCell>
    <Typography variant="h6">{text}</Typography>
  </TableCell>
);
