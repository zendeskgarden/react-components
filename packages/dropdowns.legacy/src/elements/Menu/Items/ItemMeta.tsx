/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledItemMeta } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';
import useItemContext from '../../../utils/useItemContext';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const ItemMeta = React.forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const { isCompact } = useMenuContext();
    const { isDisabled } = useItemContext();

    return <StyledItemMeta ref={ref} $isCompact={isCompact} $isDisabled={isDisabled} {...props} />;
  }
);

ItemMeta.displayName = 'ItemMeta';
