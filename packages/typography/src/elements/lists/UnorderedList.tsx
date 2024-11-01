/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './UnorderedListItem';
import { IUnorderedListProps, SIZE, TYPE_UNORDERED_LIST } from '../../types';
import { UnorderedListContext } from '../../utils/useUnorderedListContext';
import { StyledUnorderedList } from '../../styled';

const UnorderedListComponent = forwardRef<HTMLUListElement, IUnorderedListProps>(
  ({ size, type, ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <UnorderedListContext.Provider value={value}>
        <StyledUnorderedList ref={ref} $listType={type} {...other} />
      </UnorderedListContext.Provider>
    );
  }
);

UnorderedListComponent.displayName = 'UnorderedList';

UnorderedListComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE_UNORDERED_LIST)
};

UnorderedListComponent.defaultProps = {
  size: 'medium',
  type: 'disc'
};

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const UnorderedList = UnorderedListComponent as typeof UnorderedListComponent & {
  Item: typeof Item;
};

UnorderedList.Item = Item;
