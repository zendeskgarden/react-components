/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { FauxInput, IFauxInputProps } from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IFauxInputProps, IFieldArgs {}

export const FauxInputStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
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
  >
    <FauxInput {...args} />
  </FieldStory>
);
