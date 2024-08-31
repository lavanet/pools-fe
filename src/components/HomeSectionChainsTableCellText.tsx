'use client'

import { styled, TableCell, Typography, TypographyProps } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';

import { CustomTableMobileText } from '@/components/CustomTableMobileText';

type ChainsTableCellTextProps = {
  text: string;
  textVariant?: any;
  mobileTitle?: string;
};

export const HomeSectionChainsTableCellText = (
  {
    text,
    textVariant,
    mobileTitle
  }: ChainsTableCellTextProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TableCell>

      {isMobile && mobileTitle && (
        <CustomTableMobileText title={mobileTitle} />
      )}

      <Typography
        variant={textVariant ? textVariant : undefined}
        component="span"
      >
        {text}
      </Typography>

    </TableCell>
  );
};
