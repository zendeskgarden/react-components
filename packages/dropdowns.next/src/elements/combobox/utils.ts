/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Children, ReactNode, isValidElement } from 'react';
import { IOption, IUseComboboxProps } from '@zendeskgarden/container-combobox';
import { IOptGroupProps, IOptionProps } from '../../types';

export const toOption = (props: IOptionProps): IOption => {
  return {
    value: props.value,
    label: props.label,
    disabled: props.isDisabled,
    selected: props.isSelected
  };
};

export const toOptions = (children: ReactNode) =>
  Children.toArray(children).reduce((options: IUseComboboxProps['options'], option) => {
    const retVal = options;

    if (isValidElement(option)) {
      if ('value' in option.props) {
        retVal.push(toOption(option.props));
      } else {
        const props: IOptGroupProps = option.props;
        const groupOptions = toOptions(props.children) as IOption[];

        retVal.push({ label: props.label, options: groupOptions });
      }
    }

    return retVal;
  }, []);
