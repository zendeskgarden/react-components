/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import UnorderedListItem from './UnorderedListItem';
import { UnorderedListContext } from '../../utils/useUnorderedListContext';
import { StyledUnorderedList } from '../../styled';

interface IUnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  size?: 'small' | 'medium' | 'large';
  type?: 'circle' | 'disc' | 'square';
}

/**
 * Accepts all `ul` props
 */
const UnorderedList = React.forwardRef<HTMLUListElement, IUnorderedListProps>(
  ({ size, type, ...other }, ref) => (
    <UnorderedListContext.Provider value={{ size: size! }}>
      <StyledUnorderedList ref={ref} listType={type!} {...other} />
    </UnorderedListContext.Provider>
  )
);

UnorderedList.defaultProps = {
  size: 'medium',
  type: 'circle'
};

(UnorderedList as any).Item = UnorderedListItem;

/** @component */
export default UnorderedList as React.ForwardRefExoticComponent<
  IUnorderedListProps & React.RefAttributes<HTMLUListElement>
> & {
  Item: typeof UnorderedListItem;
};
