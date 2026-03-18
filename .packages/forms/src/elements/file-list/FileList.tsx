/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledFileList } from '../../styled';
import { Item } from './components/Item';

const FileListComponent = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ ...props }, ref) => <StyledFileList {...props} ref={ref} />
);

FileListComponent.displayName = 'FileList';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const FileList = FileListComponent as typeof FileListComponent & {
  Item: typeof Item;
};

FileList.Item = Item;
