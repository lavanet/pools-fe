import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { IButton } from '@/types';
import { IcnChevronDown } from '@assets/icons';

interface CustomButtonProps extends IButton, ButtonHTMLAttributes<HTMLButtonElement> {
  extraClassName?: string;
  type?: "submit" | "reset";
  hasChevronIcon?: boolean;
  onClick?: () => void;
}

export const CustomButton = (
  {
    extraClassName,
    type,
    title,
    text,
    children,
    btnColor,
    btnSize,
    btnVariant,
    icon,
    iconPlacement,
    hasChevronIcon,
    onClick,
    ...props
  }: CustomButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      className={clsx("c-button", extraClassName && extraClassName)}
      title={title ?? text ?? "Button Title"}
      aria-label={title ?? text ?? "Button Title"}
      data-color={btnColor && btnColor}
      data-size={btnSize && btnSize}
      data-variant={btnVariant && btnVariant}
      data-icon-placement={iconPlacement && iconPlacement}
      onClick={onClick}
      {...props}
    >
      {icon && <i>{icon}</i>}
      {text ? <span className='c-button-text'>{text}</span> : children}

      {hasChevronIcon && (
        <i className="c-button-icon-chevron">
          <IcnChevronDown />
        </i>
      )}
    </button>
  );
};