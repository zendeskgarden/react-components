/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { ITextareaProps, Textarea } from '@zendeskgarden/react-forms';
import React from 'react';

import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends ITextareaProps, IFieldArgs {}

export const TextareaStory: StoryFn<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validationLabel,
  ...args
}) => (
  <FieldStory
    label={label}
    isLabelRegular={isLabelRegular}
    isLabelHidden={isLabelHidden}
    hasHint={hasHint}
    hint={hint}
    hasMessage={hasMessage}
    message={message}
    validation={args.validation}
    validationLabel={validationLabel}
  >
    <Textarea {...args} />
  </FieldStory>
);
