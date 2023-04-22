/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Children, ReactNode, isValidElement } from 'react';
import { IOption, IUseComboboxProps } from '@zendeskgarden/container-combobox';
import { IOptGroupProps, IOptionProps } from '../../types';

/**
 * Convert `Option` props to a valid object for `useCombobox`.
 *
 * @param props `Option` props.
 *
 * @returns A valid `IOption` object or `undefined` if the option value is `null`.
 */
export const toOption = (props: IOptionProps): IOption | undefined => {
  let retVal;

  if (props.value !== null) {
    retVal = {
      value: props.value,
      label: props.label,
      disabled: props.isDisabled,
      selected: props.isSelected
    };
  }

  return retVal;
};

/**
 * Convert an array of `Option` and `OptGroup` children to a valid `options`
 * data structure for `useCombobox`.
 *
 * @param children The `children` prop from `Combobox`.
 *
 * @returns A valid `IUseComboboxProps['options']` data structure.
 */
export const toOptions = (children: ReactNode) =>
  Children.toArray(children).reduce((options: IUseComboboxProps['options'], option) => {
    const retVal = options;

    if (isValidElement(option)) {
      if ('value' in option.props) {
        const currentOption = toOption(option.props);

        if (currentOption !== undefined) {
          retVal.push(currentOption);
        }
      } else {
        const props: IOptGroupProps = option.props;
        const groupOptions = toOptions(props.children) as IOption[];

        retVal.push({ label: props.label, options: groupOptions });
      }
    }

    return retVal;
  }, []);
