/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Combobox, OptGroup, Option } from '@zendeskgarden/react-dropdowns.next';
import { OPTIONS } from './data';

export const ComboboxStory: Story = args => (
  <Combobox {...args}>
    <OptGroup label="Group">
      {OPTIONS.map((option, index) => (
        <Option
          key={index}
          value={option.value}
          label={option.label}
          isDisabled={option.disabled}
          isSelected={option.selected}
        />
      ))}
    </OptGroup>
  </Combobox>
);
