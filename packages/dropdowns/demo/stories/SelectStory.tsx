/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IDropdownProps, IMenuProps, ISelectProps, Select } from '@zendeskgarden/react-dropdowns';
import { DropdownFieldStory } from './DropdownFieldStory';
import { IMenuItem } from './types';

interface IArgs extends ISelectProps {
  selectedItem: IDropdownProps['selectedItem'];
  label?: string;
  isLabelRegular?: boolean;
  isLabelHidden?: boolean;
  hasHint?: boolean;
  hint?: string;
  hasMessage?: boolean;
  message?: string;
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
  selectedItem,
  onSelect,
  placement,
  items,
  ...args
}) => {
  const children = items.find(item => item.value === selectedItem);

  return (
    <DropdownFieldStory
      dropdownProps={{
        selectedItem,
        onSelect
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
    >
      <Select {...args}>{children ? children.text : undefined}</Select>
    </DropdownFieldStory>
  );
};
