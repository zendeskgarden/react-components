/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useItemContext } from '../../hooks/dropdown/useItemContext';
import { StyledItemMeta } from '../../views/dropdown/StyledItemMeta';
import { COMPONENT_IDS } from '../utils';

const ItemMetaComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isDisabled } = useItemContext();

    return (
      <StyledItemMeta
        $isDisabled={isDisabled}
        {...props}
        data-garden-id={COMPONENT_IDS['dropdowns.menu.item.meta']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

ItemMetaComponent.displayName = 'Item.Meta';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ItemMeta = ItemMetaComponent;
