'use client'

import clsx from 'clsx';

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
    <span className={clsx("c-custom-table-mobile-text", isHidden && "c-visually-hidden")}>
      {title}
    </span>
  );
};

