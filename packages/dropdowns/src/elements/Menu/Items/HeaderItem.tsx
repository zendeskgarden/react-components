/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderItem } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

interface IHeaderItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Applies icon styling */
  hasIcon?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const HeaderItem = React.forwardRef<HTMLLIElement, IHeaderItemProps>((props, ref) => {
  const { isCompact } = useMenuContext();

  return <StyledHeaderItem ref={ref} isCompact={isCompact} {...props} />;
});

HeaderItem.displayName = 'HeaderItem';
