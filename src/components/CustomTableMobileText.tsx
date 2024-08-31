'use client'

import { styled, Typography, TypographyProps } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

type CustomTableMobileTextProps = {
  title?: string;
  isHidden?: boolean;
}
export const CustomTableMobileText = (
  {
    title,
    isHidden,
  }: CustomTableMobileTextProps) => {
  return (
    <StyledTypography
      className='c-custom-table-mobile-text'
      component="span"
      sx={isHidden? visuallyHidden : undefined}
    >
      {title}
    </StyledTypography>
  );
};

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[100],
}));
