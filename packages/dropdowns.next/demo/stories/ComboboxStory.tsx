/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import OptionIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import {
  Combobox,
  Field,
  Hint,
  IComboboxProps,
  Label,
  Message,
  OptGroup,
  Option
} from '@zendeskgarden/react-dropdowns.next';
import { OPTIONS } from './data';

export const ComboboxStory: Story<IComboboxProps> = ({ validation, ...args }) => (
  <Field>
    <Label>Label</Label>
    <Hint>Hint</Hint>
    <Combobox validation={validation} {...args}>
      <OptGroup label="Group">
        {OPTIONS.map(({ icon, ...option }, index) => (
          <Option key={index} icon={icon ? <OptionIcon /> : undefined} {...option} />
        ))}
      </OptGroup>
    </Combobox>
    <Message validation={validation}>Message</Message>
  </Field>
);
