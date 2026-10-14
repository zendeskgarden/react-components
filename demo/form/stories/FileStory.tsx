/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Progress } from '@zendeskgarden/react-loaders';
import { ButtonHTMLAttributes } from 'react';

import { File, IFileProps } from '../../../src/index';

interface IArgs extends Omit<IFileProps, 'onClick'> {
  hasClose?: boolean;
  hasDelete?: boolean;
  value?: number;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  onCloseKeydown?: ButtonHTMLAttributes<HTMLButtonElement>['onKeyDown'];
  closeAriaLabel: string;
  deleteAriaLabel: string;
}

export const FileStory = ({
  children,
  hasClose,
  hasDelete,
  value,
  onClick,
  onCloseKeydown,
  closeAriaLabel,
  deleteAriaLabel,
  ...args
}: IArgs) => (
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
