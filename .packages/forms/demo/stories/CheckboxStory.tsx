/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Checkbox, ICheckboxProps } from '@zendeskgarden/react-forms';
import React from 'react';

import { renderHint, renderLabel, renderMessage } from './common';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends ICheckboxProps, IFieldArgs {}

export const CheckboxStory: StoryFn<IArgs> = ({
  hasHint,
  hasLabel = true,
  hasMessage,
  hint,
  isLabelHidden,
  isLabelRegular,
  label,
  message,
  validation,
  validationLabel,
  ...args
}) => (
  <FieldStory hasLabel={false} hasHint={false} hasMessage={false}>
    <Checkbox {...args}>
      {renderLabel({ hasLabel, label, isLabelHidden, isLabelRegular })}
      {renderHint({ hasHint, hint })}
      {renderMessage({ hasMessage, message, validation, validationLabel })}
    </Checkbox>
  </FieldStory>
);
