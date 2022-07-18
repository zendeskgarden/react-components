/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { Story } from '@storybook/react';
import {
  Field,
  Hint,
  IDropdownProps,
  IMenuProps,
  Label,
  Message
} from '@zendeskgarden/react-dropdowns';
import { DropdownStory } from './DropdownStory';
import { ITEM, ICommonArgs } from './types';
import { IMenuItemProps } from './MenuStory';

export interface IArgs extends HTMLAttributes<HTMLDivElement>, ICommonArgs {
  dropdownProps: IDropdownProps;
  menuProps?: IMenuProps;
  items: ITEM[];
  itemProps?: IMenuItemProps;
}

export const DropdownFieldStory: Story<IArgs> = ({
  dropdownProps,
  label = 'Label',
  isLabelRegular,
  isLabelHidden,
  hasHint = true,
  hint = 'Hint',
  hasMessage = true,
  message = 'Message',
  validation,
  validationLabel,
  menuProps,
  items,
  itemProps,
  children,
  ...args
}) => (
  <DropdownStory items={items} menuProps={menuProps} itemProps={itemProps} {...dropdownProps}>
    <Field {...args}>
      <Label hidden={isLabelHidden} isRegular={isLabelRegular}>
        {label}
      </Label>
      {hasHint && !isLabelHidden && <Hint>{hint}</Hint>}
      {children}
      {hasHint && isLabelHidden && <Hint>{hint}</Hint>}
      {hasMessage && (
        <Message validation={validation} validationLabel={validationLabel}>
          {message}
        </Message>
      )}
    </Field>
  </DropdownStory>
);
