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

      <StyledTypography variant="caption" component="span">
        {chartPointType && (
          <StyledChartPoint style={{ backgroundColor: chartPointsColors[chartPointType] }} />
        )}
        {title}
      </StyledTypography>

      <Typography variant="caption">
        <NumericFormat
          displayType="text"
          thousandSeparator=","
          decimalSeparator="."
          value={value}
          renderText={(value) => <>{value}&nbsp;{caption && caption}</>}
        />
      </Typography>

    </StyledCard>
  );
};

const StyledCard = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}));

const StyledChartPoint = styled('i')({
  flexShrink: 0,
  display: 'inline-block',
  border: '1px solid #212630',
  borderRadius: '50%',
  height: 8,
  width: 8,
});

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  columnGap: '4px',
  color: theme.palette.grey[100],
}));
