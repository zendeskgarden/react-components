/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ReplaceIcon from 'svg-icons-legacy/src/16/arrow-retweet-stroke.svg';

import { Dropzone, IDropzoneProps } from '../../../src/index';

interface IArgs extends IDropzoneProps {
  children: string;
  hasIcon?: boolean;
}

export const DropzoneStory = ({ children, hasIcon, ...args }: IArgs) => (
  <Dropzone {...args}>
    {!!hasIcon && (
      <Dropzone.Icon>
        <ReplaceIcon />
      </Dropzone.Icon>
    )}
    {!!children && <Dropzone.Message>{children}</Dropzone.Message>}
  </Dropzone>
);
