/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Dropzone, IDropzoneProps } from '@zendeskgarden/react-draggable';
import ReplaceIcon from '@zendeskgarden/svg-icons/src/16/arrow-retweet-stroke.svg';

interface IArgs extends IDropzoneProps {
  children: string;
  hasIcon?: boolean;
}

export const DropzoneStory: Story<IArgs> = ({ children, hasIcon, ...args }) => (
  <Dropzone {...args}>
    {hasIcon ? (
      <Dropzone.Icon>
        <ReplaceIcon />
      </Dropzone.Icon>
    ) : null}
    {children ? <Dropzone.Message>{children}</Dropzone.Message> : null}
  </Dropzone>
);
