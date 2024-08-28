'use client';

import { Stack, styled, Typography } from '@mui/material';

type ChartPointType = 'blue' | 'grey' | 'white';

const chartPointsColors: Record<ChartPointType, string> = {
  blue: '#7679FF',
  grey: '#5E6167',
  white: '#FFF',
};

type PoolsCardDataProps = {
  title: string;
  value: string;
  chartPointType?: ChartPointType;
  hasCaption?: boolean;
  caption?: string;
};

export const HomeSectionPoolsCardData = (
  {
    chartPointType,
    hasCaption,
    title,
    caption,
    value,
  }: PoolsCardDataProps) => {
  return (
    <Stack alignItems="center" direction="row" useFlexGap spacing={2}>

      <Stack alignItems="center" direction="row" spacing={0.5}>

        {chartPointType && (
          <StyledChartPoint style={{ backgroundColor: chartPointsColors[chartPointType] }} />
        )}

        <StyledTypography variant="caption">
          {title}
        </StyledTypography>

      </Stack>

      <Typography variant="caption">
        {value}&nbsp;{hasCaption && caption}
      </Typography>

    </Stack>
  );
};

const StyledChartPoint = styled('div')({
  border: '1px solid #212630',
  borderRadius: '50%',
  height: 8,
  width: 8,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));
