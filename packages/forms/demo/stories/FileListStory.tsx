/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { Story } from '@storybook/react';
import { FileList } from '@zendeskgarden/react-forms';
import { IFileListItem } from './types';
import { FileStory } from './FileStory';

interface IArgs extends HTMLAttributes<HTMLUListElement> {
  items: IFileListItem[];
  isCompact: boolean;
  closeAriaLabel: string;
  deleteAriaLabel: string;
}

const ARIA_LABEL = 'Press backspace to delete';

export const FileListStory: Story<IArgs> = ({ items, isCompact, ...args }) => (
  <FileList {...args}>
    {items.map((item, index) => (
      <FileList.Item key={index}>
        <FileStory
          isCompact={isCompact}
          type={item.type}
          hasClose={item.remove === 'close'}
          hasDelete={item.remove === 'delete'}
          tabIndex={item.remove ? 0 : undefined}
          value={item.value}
          closeAriaLabel={ARIA_LABEL}
          deleteAriaLabel={ARIA_LABEL}
        >
          {item.text}
        </FileStory>
      </FileList.Item>
    ))}
  </FileList>
);
