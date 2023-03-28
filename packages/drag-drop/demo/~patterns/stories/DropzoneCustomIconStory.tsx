/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import ReplaceIcon from '@zendeskgarden/svg-icons/src/16/arrow-retweet-stroke.svg';
import { Dropzone, IDropzoneProps } from '@zendeskgarden/react-drag-drop';

interface IArgs extends IDropzoneProps {
  isActive: boolean;
  messageLabel: string;
}

export const DropzoneCustomIconStory: Story<IArgs> = ({ isHovered, messageLabel, ...args }) => (
  <Dropzone {...args} isActive isHovered={isHovered}>
    <Dropzone.Message>
      {isHovered && (
        <Dropzone.Icon>
          <ReplaceIcon />
        </Dropzone.Icon>
      )}
      {messageLabel}
    </Dropzone.Message>
  </Dropzone>
);
