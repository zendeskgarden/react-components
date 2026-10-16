/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { StyledFileListItem } from '../../views/form/StyledFileListItem';
import { COMPONENT_IDS } from '../utils';

const ItemComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ ...props }, ref) => (
    <StyledFileListItem
      {...props}
      data-garden-id={COMPONENT_IDS['forms.file_list.item']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  )
);

ItemComponent.displayName = 'FileList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent;
