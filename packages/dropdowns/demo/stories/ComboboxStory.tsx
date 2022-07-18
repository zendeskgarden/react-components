/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import StartIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import {
  Combobox,
  IComboboxProps,
  IDropdownProps,
  IMenuProps
} from '@zendeskgarden/react-dropdowns';
import { DropdownFieldStory } from './DropdownFieldStory';
import { IMenuItem, ICommonArgs } from './types';

interface IArgs extends IComboboxProps, ICommonArgs {
  downshiftProps?: IDropdownProps['downshiftProps'];
  inputValue: IDropdownProps['inputValue'];
  onInputValueChange: IDropdownProps['onInputValueChange'];
  onStateChange: IDropdownProps['onStateChange'];
  isOpen?: IDropdownProps['isOpen'];
  hasStartIcon: boolean;
  hasEndIcon: boolean;
  items: IMenuItem[];
  placement: IMenuProps['placement'];
}

export const ComboboxStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  downshiftProps,
  onSelect,
  inputValue,
  onInputValueChange,
  onStateChange,
  isOpen,
  placement,
  hasStartIcon,
  hasEndIcon,
  items,
  ...args
}) => (
  <DropdownFieldStory
    dropdownProps={{
      downshiftProps,
      inputValue,
      onSelect,
      onInputValueChange,
      onStateChange,
      isOpen
    }}
    label={label}
    isLabelRegular={isLabelRegular}
    isLabelHidden={isLabelHidden}
    hasHint={hasHint}
    hint={hint}
    hasMessage={hasMessage}
    message={message}
    validation={args.validation}
    menuProps={{ isCompact: args.isCompact, placement }}
    items={items}
    itemProps={{ disabled: args.disabled }}
  >
    <Combobox
      {...args}
      start={hasStartIcon ? <StartIcon /> : undefined}
      end={hasEndIcon ? <EndIcon /> : undefined}
    />
  </DropdownFieldStory>
);
