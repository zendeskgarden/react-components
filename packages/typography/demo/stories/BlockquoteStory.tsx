/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Blockquote, IBlockquoteProps } from '@zendeskgarden/react-typography';
import React from 'react';

import { TypescaleStory } from './TypescaleStory';

interface IArgs extends IBlockquoteProps {
  children: string[];
}

export const BlockquoteStory: StoryFn<IArgs> = ({ children, ...args }) => (
  <>
    {children.map((child, index) => (
      <Blockquote key={index} {...args}>
        <TypescaleStory size={args.size} hasDisplayName tag="span">
          {child}
        </TypescaleStory>
      </Blockquote>
    ))}
  </>
);
