/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import { Item } from './components/Item';
import { StyledFileList } from '../../styled';

interface IStaticFileListExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Item: typeof Item;
}

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const FileList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ ...props }, ref) => <StyledFileList {...props} ref={ref} />
) as IStaticFileListExport<HTMLUListElement, HTMLAttributes<HTMLUListElement>>;

FileList.displayName = 'FileList';

FileList.Item = Item;
