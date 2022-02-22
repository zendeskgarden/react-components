/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Progress } from '@zendeskgarden/react-loaders';
import { File, IFileProps } from '@zendeskgarden/react-forms';

interface IArgs extends IFileProps {
  hasClose?: boolean;
  hasDelete?: boolean;
  value?: number;
}

export const FileStory: Story<IArgs> = ({
  children,
  hasClose,
  hasDelete,
  value,
  onClick,
  ...args
}) => (
  <File {...args}>
    {children}
    {hasClose && <File.Close onClick={onClick} />}
    {hasDelete && <File.Delete onClick={onClick} />}
    {typeof value !== 'undefined' && (
      <Progress value={value} size={args.isCompact ? 'small' : 'medium'} aria-label="progress" />
    )}
  </File>
);
