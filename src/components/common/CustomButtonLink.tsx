import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { IButton } from '@/types';

interface CustomButtonLinkProps extends IButton, LinkProps {
  extraClassName?: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
}

export const CustomButtonLink = (
  {
    extraClassName,
    href,
    isExternal,
    title,
    text,
    children,
    btnColor,
    btnSize,
    btnVariant,
    icon,
    iconPlacement,
    isDisabled,
  }: CustomButtonLinkProps) => {
  return (
    <Link
      className={clsx("c-button", extraClassName && extraClassName, isDisabled && "is-disabled")}
      href={href? href : "/"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? 'noreferrer noopener': undefined}
      title={title ?? text ?? "Button Title"}
      aria-label={title ?? text ?? "Button Title"}
      data-color={btnColor && btnColor}
      data-size={btnSize && btnSize}
      data-variant={btnVariant && btnVariant}
      data-icon-placement={iconPlacement && iconPlacement}
    >
      {icon && <i>{icon}</i>}
      {text ? <span className='c-button-text'>{text}</span> : children}
    </Link>
  );
};