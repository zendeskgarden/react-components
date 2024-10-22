/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import IconChevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Button } from '@zendeskgarden/react-buttons';
import {
  IDropdownProps,
  IItemProps,
  IMenuProps,
  Trigger
} from '@zendeskgarden/react-dropdowns.legacy';
import { ITEM } from './types';
import { DropdownStory } from './DropdownStory';

interface IArgs extends IMenuProps {
  hasMedia?: boolean;
  isDanger?: IItemProps['isDanger'];
  disabled?: IItemProps['disabled'];
  downshiftProps?: IDropdownProps['downshiftProps'];
  highlightedIndex?: IDropdownProps['highlightedIndex'];
  onStateChange: IDropdownProps['onStateChange'];
  isOpen?: IDropdownProps['isOpen'];
  selectedItems?: IDropdownProps['selectedItems'];
  items: ITEM[];
}

export const TriggerStory: Story<IArgs> = ({
  onSelect,
  downshiftProps,
  highlightedIndex,
  onStateChange,
  isOpen,
  selectedItems,
  items,
  disabled,
  isDanger,
  hasMedia,
  ...args
}) => (
  <DropdownStory
    isOpen={isOpen}
    onSelect={onSelect}
    onStateChange={onStateChange}
    downshiftProps={downshiftProps}
    highlightedIndex={highlightedIndex}
    selectedItems={selectedItems}
    colProps={{ textAlign: 'center' }}
    menuProps={args}
    items={items}
    itemProps={{ disabled, isDanger, hasIcon: hasMedia }}
  >
    <Trigger>
      <Button isDanger={isDanger} size={args.isCompact ? 'small' : undefined}>
        {hasMedia ? <Button.StartIcon>
            <Icon />
          </Button.StartIcon> : null}
        Trigger
        <Button.EndIcon isRotated={isOpen}>
          <IconChevron />
        </Button.EndIcon>
      </Button>
    </Trigger>
  </DropdownStory>
);
