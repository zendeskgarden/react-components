/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import {
  Field,
  Hint,
  IFieldProps,
  IMessageProps,
  Label,
  Message
} from '@zendeskgarden/react-forms';

export interface IFieldArgs {
  hasLabel?: boolean;
  label?: string;
  isLabelRegular?: boolean;
  isLabelHidden?: boolean;
  hasHint?: boolean;
  hint?: string;
  hasMessage?: boolean;
  message?: string;
  validation?: IMessageProps['validation'];
}

interface IArgs extends IFieldProps, IFieldArgs {}

export const FieldStory: Story<IArgs> = ({
  hasLabel = true,
  label = 'Label',
  isLabelRegular,
  isLabelHidden,
  hasHint = true,
  hint = 'Hint',
  hasMessage = true,
  message = 'Message',
  validation,
  children,
  ...args
}) => (
  <Field {...args}>
    {hasLabel && (
      <Label hidden={isLabelHidden} isRegular={isLabelRegular}>
        {label}
      </Label>
    )}
    {hasHint && hasLabel && !isLabelHidden && <Hint>{hint}</Hint>}
    {children}
    {hasHint && (!hasLabel || isLabelHidden) && <Hint>{hint}</Hint>}
    {hasMessage && <Message validation={validation}>{message}</Message>}
  </Field>
);
