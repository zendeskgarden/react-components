/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledFileList } from '../../views/form/StyledFileList';
import { COMPONENT_IDS } from '../utils';
import { Item } from './Item';

const FileListComponent = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ ...props }, ref) => (
    <StyledFileList
      {...props}
      data-garden-id={COMPONENT_IDS['forms.file_list']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  )
);

FileListComponent.displayName = 'FileList';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const FileList = FileListComponent as typeof FileListComponent & {
  Item: typeof Item;
};

FileList.Item = Item;
