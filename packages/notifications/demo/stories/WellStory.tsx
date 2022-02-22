/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Well, IWellProps, Paragraph, Title } from '@zendeskgarden/react-notifications';

interface IArgs extends IWellProps {
  title?: string;
  isRegular?: boolean;
  hasParagraph: boolean;
}

export const WellStory: Story<IArgs> = ({ children, title, hasParagraph, isRegular, ...args }) => (
  <Well {...args}>
    {title && <Title isRegular={isRegular}>{title}</Title>}
    {hasParagraph ? <Paragraph>{children}</Paragraph> : children}
  </Well>
);
