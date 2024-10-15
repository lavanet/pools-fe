export const formatNumber = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue) || numValue == null) return 'N/A';

  const abs = Math.abs(numValue);

  const removeTrailingZeros = (num: string): string => {
    return num.replace(/\.?0+$/, '');
  };

  const addCommas = (num: string): string => {
    const parts = num.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join('.');
  };

  const formatWithSuffix = (num: number, suffix: string) => {
    const formatted = num.toFixed(2);
    const trimmed = removeTrailingZeros(formatted);
    const withCommas = addCommas(trimmed);
    return `${withCommas}${suffix}`;
  };

  if (abs >= 1e15) { // Quadrillion or more (1000 trillion+)
    return formatWithSuffix(numValue / 1e15, 'Q');
  } else if (abs >= 1e12) { // Trillion
    return formatWithSuffix(numValue / 1e12, 'T');
  } else if (abs >= 1e9) { // Billion
    return formatWithSuffix(numValue / 1e9, 'B');
  } else if (abs >= 1e6) { // Million
    return formatWithSuffix(numValue / 1e6, 'M');
  } else {
    const formatted = numValue.toFixed(2);
    const trimmed = removeTrailingZeros(formatted);
    return addCommas(trimmed);
  }
};
