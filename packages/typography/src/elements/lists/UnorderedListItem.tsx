/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import useUnorderedListContext from '../../utils/useUnorderedListContext';
import { StyledUnorderedListItem } from '../../styled';

const UnorderedListItem = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const { size } = useUnorderedListContext();

    return <StyledUnorderedListItem ref={ref} $space={size} {...props} />;
  }
);

UnorderedListItem.displayName = 'UnorderedList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = UnorderedListItem;
