/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';

import { IKbdProps, Kbd } from '../../../src/index';

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
