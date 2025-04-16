/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { IRadioProps, Radio } from '@zendeskgarden/react-forms';

import { FieldStory, IFieldArgs } from './FieldStory';
import { renderHint, renderLabel, renderMessage } from './common';

interface IArgs extends IRadioProps, IFieldArgs {}

export const RadioStory: StoryFn<IArgs> = ({
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
}) => {
  return (
    <FieldStory hasLabel={false} hasHint={false} hasMessage={false}>
      <Radio {...args}>
        {renderLabel({ hasLabel, label, isLabelHidden, isLabelRegular })}
        {renderHint({ hasHint, hint })}
        {renderMessage({ hasMessage, message, validation, validationLabel })}
      </Radio>
    </FieldStory>
  );
};
