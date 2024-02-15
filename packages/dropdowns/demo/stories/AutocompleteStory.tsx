/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import {
  Autocomplete,
  IAutocompleteProps,
  IDropdownProps,
  IMenuProps
} from '@zendeskgarden/react-dropdowns';
import { DropdownFieldStory } from './DropdownFieldStory';
import { ICommonArgs, IMenuItem } from './types';

interface IArgs extends IAutocompleteProps, ICommonArgs {
  downshiftProps?: IDropdownProps['downshiftProps'];
  selectedItem: IDropdownProps['selectedItem'];
  inputValue: IDropdownProps['inputValue'];
  onInputValueChange: IDropdownProps['onInputValueChange'];
  onStateChange: IDropdownProps['onStateChange'];
  isOpen?: IDropdownProps['isOpen'];
  hasIcon: boolean;
  items: IMenuItem[];
  placement: IMenuProps['placement'];
}

export const AutocompleteStory: Story<IArgs> = ({
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
  inputValue,
  onInputValueChange,
  onStateChange,
  isOpen,
  placement,
  hasIcon,
  items,
  ...args
}) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(
    () => setFilteredItems(items.filter(item => item.text.match(new RegExp(inputValue!, 'gui')))),
    [items, inputValue]
  );

  return (
    <DropdownFieldStory
      dropdownProps={{
        downshiftProps,
        selectedItem,
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
      validationLabel={args.validationLabel}
      menuProps={{ isCompact: args.isCompact, placement }}
      items={
        filteredItems.length === 0
          ? [{ text: 'No matches found', value: null, disabled: true }]
          : filteredItems
      }
      itemProps={{ hasIcon, disabled: args.disabled }}
    >
      <Autocomplete {...args} start={hasIcon ? <Icon /> : undefined}>
        {selectedItem.text}
      </Autocomplete>
    </DropdownFieldStory>
  );
};
