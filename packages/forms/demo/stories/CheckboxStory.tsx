/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Checkbox, ICheckboxProps } from '@zendeskgarden/react-forms';

import { FieldStory, IFieldArgs } from './FieldStory';
import { renderHint, renderLabel, renderMessage } from './common';

interface IArgs extends ICheckboxProps, IFieldArgs {}

export const CheckboxStory: Story<IArgs> = ({ hasLabel = true, ...args }) => (
  <FieldStory hasLabel={false} hasHint={false} hasMessage={false}>
    <Checkbox {...args}>
      {renderLabel({ hasLabel, ...args })}
      {renderHint(args)}
      {renderMessage(args)}
    </Checkbox>
  </FieldStory>
);
