/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';

import {
  UnorderedListProvider,
  UnorderedListProvider
} from '../../context/typography/UnorderedListContext';
import { IUnorderedListProps, SIZE, TYPE_UNORDERED_LIST } from '../../types/elements';
import { StyledUnorderedList } from '../../views/typography/StyledList';
import { COMPONENT_IDS } from '../utils';
import { Item } from './UnorderedListItem';

const UnorderedListComponent = forwardRef<HTMLUListElement, IUnorderedListProps>(
  ({ size = 'medium', type = 'disc', ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <UnorderedListProvider value={value}>
        <StyledUnorderedList
          ref={ref}
          $listType={type}
          {...other}
          data-garden-id={COMPONENT_IDS['typography.unordered_list']}
          data-garden-version={PACKAGE_VERSION}
        />
      </UnorderedListProvider>
    );
  }
);

UnorderedListComponent.displayName = 'UnorderedList';

UnorderedListComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE_UNORDERED_LIST)
};

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const UnorderedList = UnorderedListComponent as typeof UnorderedListComponent & {
  Item: typeof Item;
};

UnorderedList.Item = Item;
