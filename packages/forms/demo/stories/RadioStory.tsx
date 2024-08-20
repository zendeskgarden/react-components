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

export const RadioStory: StoryFn<IArgs> = ({ hasLabel = true, ...args }) => (
  <FieldStory hasLabel={false} hasHint={false} hasMessage={false}>
    <Radio {...args}>
      {renderLabel({ hasLabel, ...args })}
      {renderHint(args)}
      {renderMessage(args)}
    </Radio>
  </FieldStory>
);
