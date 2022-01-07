/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Checkbox, Hint, ICheckboxProps, Label, Message } from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends ICheckboxProps, IFieldArgs {}

export const CheckboxStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validation,
  ...args
}) => (
  <FieldStory hasLabel={false} hasHint={false} hasMessage={false}>
    <Checkbox {...args}>
      <Label hidden={isLabelHidden} isRegular={isLabelRegular}>
        {label}
      </Label>
      {hasHint && <Hint>{hint}</Hint>}
      {hasMessage && <Message validation={validation}>{message}</Message>}
    </Checkbox>
  </FieldStory>
);
