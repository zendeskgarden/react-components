/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { useUnorderedListContext } from '../../hooks/typography/useUnorderedListContext';
import { StyledUnorderedListItem } from '../../views/typography/StyledListItem';
import { COMPONENT_IDS } from '../utils';

const UnorderedListItem = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const { size } = useUnorderedListContext();

    return (
      <StyledUnorderedListItem
        ref={ref}
        $space={size}
        {...props}
        as="li"
        data-garden-id={COMPONENT_IDS['typography.unordered_list_item']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

UnorderedListItem.displayName = 'UnorderedList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = UnorderedListItem;
