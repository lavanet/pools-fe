export const formatLargeNumber = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return 'Invalid Number';

  const formatNumber = (n: number, decimals: number) => {
    const formatted = n.toFixed(decimals);
    return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted;
  };

  if (numValue >= 1000000) {
    return `${formatNumber(numValue / 1000000, 2)}M`;
  } else if (numValue >= 1000) {
    return `${formatNumber(numValue / 1000, 2)}K`;
  } else {
    return formatNumber(numValue, 2);
  }
};
