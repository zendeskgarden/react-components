/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { StoryFn } from '@storybook/react';
import { Progress } from '@zendeskgarden/react-loaders';
import { File, IFileProps } from '@zendeskgarden/react-forms';

interface IArgs extends Omit<IFileProps, 'onClick'> {
  hasClose?: boolean;
  hasDelete?: boolean;
  value?: number;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  onCloseKeydown?: ButtonHTMLAttributes<HTMLButtonElement>['onKeyDown'];
  closeAriaLabel: string;
  deleteAriaLabel: string;
}

export const FileStory: StoryFn<IArgs> = ({
  children,
  hasClose,
  hasDelete,
  value,
  onClick,
  onCloseKeydown,
  closeAriaLabel,
  deleteAriaLabel,
  ...args
}) => (
  <File {...args}>
    {children}
    {!!hasClose && (
      <File.Close onClick={onClick} onKeyDown={onCloseKeydown} aria-label={closeAriaLabel} />
    )}
    {!!hasDelete && (
      <File.Delete onClick={onClick} onKeyDown={onCloseKeydown} aria-label={deleteAriaLabel} />
    )}
    {typeof value !== 'undefined' && (
      <Progress value={value} size={args.isCompact ? 'small' : 'medium'} aria-label="progress" />
    )}
  </File>
);
