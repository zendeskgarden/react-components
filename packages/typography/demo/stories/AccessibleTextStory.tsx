/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IAccessibleTextProps, AccessibleText } from '@zendeskgarden/react-typography';

export const AccessibleTextStory: Story<IAccessibleTextProps> = ({ ...args }) => (
  <AccessibleText {...args}>{args.children}</AccessibleText>
);
