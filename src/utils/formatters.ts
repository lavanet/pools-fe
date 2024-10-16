const removeTrailingZeros = (num: string): string => {
  return num.replace(/\.?0+$/, '');
};

const addCommas = (num: string): string => {
  const parts = num.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join('.');
};

const formatWithSuffix = (num: number, suffix: string): string => {
  const formatted = num.toFixed(2);
  const trimmed = removeTrailingZeros(formatted);
  return `${addCommas(trimmed)}${suffix}`;
};

export const formatNumber = (value: number | string, above10MOnly: boolean = false): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue) || numValue == null) return 'N/A';

  const abs = Math.abs(numValue);

  if (!above10MOnly || abs >= 1e7) {
    if (abs >= 1e15) return formatWithSuffix(numValue / 1e15, 'Q');
    if (abs >= 1e12) return formatWithSuffix(numValue / 1e12, 'T');
    if (abs >= 1e9) return formatWithSuffix(numValue / 1e9, 'B');
    if (abs >= 1e6) return formatWithSuffix(numValue / 1e6, 'M');
  }

  // For numbers less than 1M (when above10MOnly is true) or less than 1M (when above10MOnly is false)
  if (abs >= 1) {
    return addCommas(numValue.toFixed(0));
  } else {
    const formatted = numValue.toFixed(2);
    return addCommas(removeTrailingZeros(formatted));
  }
};
