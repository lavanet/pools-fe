import {HTMLProps} from "react"
import clsx from "clsx"
import { IFormGroupProps } from '@/types';

interface CustomInputProps extends IFormGroupProps, HTMLProps<HTMLInputElement> {
  type: "text" | "password" | "search" | "email" | "tel";
  name: string;
  placeholder?: string;
}

export const CustomInput = (
  {
    extraClassName,
    type,
    labelText,
    labelIsHidden,
    inputStyle,
    name,
    placeholder,
    inputGroupText,
    inputGroupPlacement,
    helpText,
    ...rest
  }: CustomInputProps) => {

  return (
    <div className={clsx("c-form-group", `c-form-group-${type}`, extraClassName && extraClassName, inputStyle && inputStyle)}>

      <label
        htmlFor={`id_${name}`}
        className={clsx(labelIsHidden && "c-visually-hidden")}
      >
        {labelText}
      </label>

      <div className={clsx("c-form-group-input-group", inputGroupText && "is-input-group", inputGroupText && inputGroupPlacement)}>

        <input
          type={type? type : "text"}
          id={`id_${name}`}
          name={name}
          placeholder={placeholder? placeholder : ""}
          {...rest}
        />

        {inputGroupText && (
          <div className="c-form-group-input-group-text">
            {inputGroupText}
          </div>
        )}

      </div>

      {helpText && (
        <small className="c-form-group-help-text">
          {helpText}
        </small>
      )}

    </div>
  )
}
