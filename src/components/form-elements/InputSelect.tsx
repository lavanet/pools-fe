'use client'

import { IcnCaretDown } from '@assets/icons';

import { useId } from 'react';
import clsx from "clsx"
import Select, {components, ControlProps, GroupBase, OptionProps, Props, SingleValueProps,} from "react-select"

import { IFormGroup, ISelectOption } from '@/types';

interface InputProps extends IFormGroup, Props {
  name: string;
  placeholder?: string;
  options: ISelectOption[];
}

export const InputSelect = (
  {
    extraClassName,
    labelText,
    labelIsHidden,
    inputStyle,
    name,
    placeholder,
    options,
    inputGroupText,
    helpText,
    ...rest
  }: InputProps) => {

  const Input = ({ ...props }: any) => (
    <components.Input {...props} aria-activedescendant={undefined}/>
  )

  const Control = ({ children, ...props }: ControlProps) => {
    return (
      <components.Control {...props}>
        {inputGroupText && (
          <span className="c-select__control-input-group-text">
            {inputGroupText}
          </span>
        )}
        {children}
      </components.Control>
    )
  }

  const SingleValue = ({children, ...props}: SingleValueProps<any>) => (
    <components.SingleValue {...props}>
      {props.data.icon && <i className={clsx("c-select__single-value-icon", props.data.value)}>{props.data.icon}</i>}
      <span className="c-select__single-value-label">{children}</span>
    </components.SingleValue>
  )

  const DropdownIndicator = ({ ...props }: any) => (
    <components.DropdownIndicator {...props}>
      <IcnCaretDown/>
    </components.DropdownIndicator>
  )

  const Option = ({children, ...props}: OptionProps<any, boolean, GroupBase<any>>) => (
    <components.Option {...props}>
      {props.data.icon && <i className={clsx("c-select__option-icon", props.data.value)}>{props.data.icon}</i>}
      {children}
    </components.Option>
  )

  const NoOptionsMessage = ({ ...props }: any) => (
    <components.NoOptionsMessage {...props}>
      No results found
    </components.NoOptionsMessage>
  )

  return (
    <div className={clsx("c-form-group", `c-form-group-select`, extraClassName && extraClassName, inputStyle && inputStyle)}>

      <label
        htmlFor={`id_${name}`}
        className={clsx(labelIsHidden && "c-visually-hidden")}
      >
        {labelText}
      </label>

      <div className={clsx("c-form-group-input-group")}>

        <Select
          className={clsx("c-select")}
          classNamePrefix="c-select"
          id={`id_select_${name}`}
          inputId={`id_${name}`}
          name={name}
          placeholder={placeholder? placeholder : ""}
          options={options}
          instanceId={useId()}
          components={{
            Input,
            Control,
            SingleValue,
            DropdownIndicator,
            Option,
            NoOptionsMessage
          }}
          {...rest}
        />

      </div>

      {helpText && (
        <small className="c-form-group-help-text">
          {helpText}
        </small>
      )}

    </div>
  )
}
