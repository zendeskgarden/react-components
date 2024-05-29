/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import useItemContext from '../../context/useItemContext';
import { StyledItemMeta } from '../../views';

const ItemMetaComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isDisabled } = useItemContext();

    return <StyledItemMeta isDisabled={isDisabled} {...props} ref={ref} />;
  }
);

ItemMetaComponent.displayName = 'Item.Meta';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ItemMeta = ItemMetaComponent;
