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
  Multiselect,
  IMultiselectProps,
  IDropdownProps,
  IMenuProps
} from '@zendeskgarden/react-dropdowns';
import { DropdownFieldStory } from './DropdownFieldStory';
import { ICommonArgs, IMenuItem } from './types';
import { Tag } from '@zendeskgarden/react-tags';

interface IArgs extends IMultiselectProps, ICommonArgs {
  downshiftProps?: IDropdownProps['downshiftProps'];
  selectedItems: IDropdownProps['selectedItems'];
  inputValue: IDropdownProps['inputValue'];
  onInputValueChange: IDropdownProps['onInputValueChange'];
  onStateChange: IDropdownProps['onStateChange'];
  isOpen?: IDropdownProps['isOpen'];
  hasIcon: boolean;
  items: IMenuItem[];
  showMore: string;
  placement: IMenuProps['placement'];
}

export const MultiselectStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  downshiftProps,
  selectedItems,
  onSelect,
  inputValue,
  onInputValueChange,
  onStateChange,
  isOpen,
  placement,
  hasIcon,
  items,
  showMore,
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
        selectedItems,
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
      <Multiselect
        {...args}
        start={hasIcon ? <Icon /> : undefined}
        renderItem={({ value, removeValue }) => (
          <Tag>
            <span>{value.text}</span>
            <Tag.Close onClick={removeValue} />
          </Tag>
        )}
        renderShowMore={showMore ? value => `+ ${value} ${showMore}` : undefined}
      />
    </DropdownFieldStory>
  );
};
