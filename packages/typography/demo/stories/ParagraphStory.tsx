/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Paragraph, IParagraphProps } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './TypescaleStory';

interface IArgs extends IParagraphProps {
  children: string[];
}

export const ParagraphStory: Story<IArgs> = ({ children, ...args }) => (
  <>
    {children.map((child, index) => (
      <Paragraph key={index} {...args}>
        <TypescaleStory size={args.size} hasDisplayName tag="span">
          {child}
        </TypescaleStory>
      </Paragraph>
    ))}
  </>
);
