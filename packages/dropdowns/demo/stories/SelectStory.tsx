/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { IDropdownProps, IMenuProps, ISelectProps, Select } from '@zendeskgarden/react-dropdowns';
import { DropdownFieldStory } from './DropdownFieldStory';
import { ICommonArgs, IMenuItem } from './types';

interface IArgs extends ISelectProps, ICommonArgs {
  downshiftProps?: IDropdownProps['downshiftProps'];
  selectedItem: IDropdownProps['selectedItem'];
  onStateChange: IDropdownProps['onStateChange'];
  isOpen?: IDropdownProps['isOpen'];
  hasIcon: boolean;
  items: IMenuItem[];
  placement: IMenuProps['placement'];
}

export const SelectStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  downshiftProps,
  selectedItem,
  onSelect,
  onStateChange,
  isOpen,
  placement,
  hasIcon,
  items,
  ...args
}) => (
  <DropdownFieldStory
    dropdownProps={{
      downshiftProps,
      selectedItem,
      onSelect,
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
    validationLabel={args.validationLabel}
    menuProps={{ isCompact: args.isCompact, placement }}
    items={items}
    itemProps={{ hasIcon, disabled: args.disabled }}
  >
    <Select {...args} start={hasIcon ? <Icon /> : undefined}>
      {selectedItem.text}
    </Select>
  </DropdownFieldStory>
);
