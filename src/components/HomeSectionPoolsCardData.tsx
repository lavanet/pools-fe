'use client';

import { Stack, styled, Typography, TypographyProps } from '@mui/material';
import { NumericFormat } from 'react-number-format';

type ChartPointType = 'blue' | 'grey' | 'white';

const chartPointsColors: Record<ChartPointType, string> = {
  white: '#FFF',
  blue: '#7679FF',
  grey: '#5E6167',
};

type PoolsCardDataProps = {
  title: string;
  value: string;
  chartPointType?: ChartPointType;
  caption?: string;
};

export const HomeSectionPoolsCardData = (
  {
    chartPointType,
    title,
    caption,
    value,
  }: PoolsCardDataProps) => {
  return (
    <StyledCard>

      <StyledTypographyTitle variant="caption" component="span">
        {chartPointType && (
          <StyledChartPoint style={{ backgroundColor: chartPointsColors[chartPointType] }} />
        )}
        {title}
      </StyledTypographyTitle>

      <StyledTypographyValue variant="caption" component='em'>
        <NumericFormat
          displayType="text"
          thousandSeparator=","
          decimalSeparator="."
          value={value}
          renderText={(value) => <>{value}&nbsp;{caption && caption}</>}
        />
      </StyledTypographyValue>

    </StyledCard>
  );
};

const StyledCard = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'unset',
    justifyContent: 'unset',
    flexWrap: 'unset',
    rowGap: 2,
  },
}));

const StyledChartPoint = styled('i')(({ theme }) => ({
  flexShrink: 0,
  display: 'inline-block',
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '50%',
  height: 8,
  width: 8,
}));

const StyledTypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  columnGap: 4,
  color: theme.palette.grey[100],

  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '22.4px'
  },
}));

const StyledTypographyValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: '22.4px'
  },
}));
