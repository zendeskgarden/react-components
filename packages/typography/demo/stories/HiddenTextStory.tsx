/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IHiddenTextProps, HiddenText } from '@zendeskgarden/react-typography';

export const HiddenTextStory: Story<IHiddenTextProps> = ({ ...args }) => (
  <HiddenText {...args}>{args.children}</HiddenText>
);
