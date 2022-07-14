/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { Story } from '@storybook/react';
import { Field } from '@zendeskgarden/react-forms';
import { ICommonArgs, renderHint, renderLabel, renderMessage } from './common';

export type { ICommonArgs as IFieldArgs } from './common';

interface IArgs extends HTMLAttributes<HTMLDivElement>, ICommonArgs {}

export const FieldStory: Story<IArgs> = ({
  hasLabel = true,
  label = 'Label',
  isLabelRegular,
  isLabelHidden,
  hasHint = true,
  hint = 'Hint',
  children,
  ...args
}) => (
  <Field {...args}>
    {renderLabel({ hasLabel, label, isLabelHidden, isLabelRegular })}
    {renderHint({ hasHint: hasHint && hasLabel && !isLabelHidden, hint })}
    {children}
    {renderHint({ hasHint: hasHint && (!hasLabel || isLabelHidden), hint })}
    {renderMessage(args)}
  </Field>
);
