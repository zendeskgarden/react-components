/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import UnorderedListItem from './UnorderedListItem';
import { UnorderedListContext } from '../../utils/useUnorderedListContext';
import { StyledUnorderedList } from '../../styled';

export interface IUnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  /** Adjusts the vertical spacing between list items */
  size?: 'small' | 'medium' | 'large';
  /** Sets the marker style */
  type?: 'circle' | 'disc' | 'square';
}

const UnorderedList = React.forwardRef<HTMLUListElement, IUnorderedListProps>(
  ({ size, type, ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <UnorderedListContext.Provider value={value}>
        <StyledUnorderedList ref={ref} listType={type} {...other} />
      </UnorderedListContext.Provider>
    );
  }
);

UnorderedList.displayName = 'UnorderedList';

UnorderedList.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['circle', 'disc', 'square'])
};

UnorderedList.defaultProps = {
  size: 'medium',
  type: 'disc'
};

(UnorderedList as any).Item = UnorderedListItem;

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export default UnorderedList as unknown as React.FunctionComponent<
  IUnorderedListProps & React.RefAttributes<HTMLUListElement>
> & {
  Item: typeof UnorderedListItem;
};
