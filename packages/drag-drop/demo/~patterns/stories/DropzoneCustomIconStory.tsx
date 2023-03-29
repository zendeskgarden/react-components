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
  isHighlighted: boolean;
  messageLabel: string;
}

export const DropzoneCustomIconStory: Story<IArgs> = ({ isHighlighted, messageLabel, ...args }) => (
  <Dropzone {...args} isActive isHighlighted={isHighlighted}>
    <Dropzone.Message>
      {isHighlighted && (
        <Dropzone.Icon>
          <ReplaceIcon />
        </Dropzone.Icon>
      )}
      {messageLabel}
    </Dropzone.Message>
  </Dropzone>
);
