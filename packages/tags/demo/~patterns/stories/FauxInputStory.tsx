/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { FauxInput } from '@zendeskgarden/react-forms';
import { IArgs as ITagStoryArgs, TagStory } from '../../stories/TagStory';

interface IArgs extends ITagStoryArgs {
  tags: string[];
  width: number;
}

export const FauxInputStory: Story<IArgs> = ({ tags, width, ...args }) => (
  <FauxInput isCompact={args.size !== 'large'} style={{ width: `${width}%` }}>
    {tags.map((tag, index) => (
      <TagStory key={index} {...args} tabIndex={0} style={{ margin: 2 }}>
        <span>{tag}</span>
      </TagStory>
    ))}
  </FauxInput>
);
