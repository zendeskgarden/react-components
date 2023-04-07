/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Dropzone, IDropzoneProps } from '@zendeskgarden/react-drag-drop';
import ReplaceIcon from '@zendeskgarden/svg-icons/src/16/arrow-retweet-stroke.svg';

interface IArgs extends IDropzoneProps {
  messageLabel: string;
  hasCustomIcon?: boolean;
}

export const DropzoneStory: Story<IArgs> = ({ messageLabel, hasCustomIcon, isDanger, ...args }) => (
  <Dropzone {...args} isDanger={isDanger}>
    <Dropzone.Message>
      {hasCustomIcon && !isDanger && (
        <Dropzone.Icon>
          <ReplaceIcon />
        </Dropzone.Icon>
      )}
      {messageLabel}
    </Dropzone.Message>
  </Dropzone>
);
