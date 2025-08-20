/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { IKbdProps, Kbd } from '@zendeskgarden/react-typography';

interface IArgs extends IKbdProps {
  children: string;
}

export const KbdStory: StoryFn<IArgs> = ({ children, ...args }) => (
  <>
    {children.split(' ').map((child, index) => (
      <>
        {index > 0 ? ' ' : ''}
        <Kbd key={index} {...args}>
          {child}
        </Kbd>
      </>
    ))}
  </>
);
