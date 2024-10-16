
import { HTMLProps } from 'react';
import clsx from 'clsx';
import { IButton, IFormGroup} from '@/types';

interface InputCheckRadioProps extends IFormGroup, IButton, HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  type: "radio"| "checkbox"
  labelTitle?: string;
  isButton?: boolean;
}

export const InputCheckRadio = (
  {
    extraClassName,
    id,
    name,
    type,
    labelText,
    labelTitle,
    labelIsHidden,
    isButton,
    btnColor,
    btnVariant,
    btnSize,
    icon,
    iconPlacement,
    ...rest
  }:InputCheckRadioProps) => {
  return (
    <div className={clsx("c-form-group", "c-form-group-check", extraClassName && extraClassName)}>

      <input
        className={clsx( isButton && "c-visually-hidden")}
        type={type ? type : "checkbox"}
        id={id}
        name={name}
        {...rest}
      />

      <label
        className={clsx(isButton && "c-button")}
        htmlFor={id}
        title={isButton? labelTitle ?? labelText ?? "Label Title" : undefined}
        data-color={isButton && btnColor}
        data-variant={isButton && btnVariant}
        data-size={isButton && btnSize}
        data-icon-placement={isButton && iconPlacement}
      >
        {icon && (<i>{icon}</i>)}
        <span className={clsx(labelIsHidden && "c-visually-hidden")}>
          {labelText}
        </span>

      </label>

    </div>
  );
};