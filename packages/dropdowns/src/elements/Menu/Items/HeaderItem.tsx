/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { LiHTMLAttributes } from 'react';
import { StyledHeaderItem } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

export interface IHeaderItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Applies icon styling */
  hasIcon?: boolean;
}

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const HeaderItem = React.forwardRef<HTMLLIElement, IHeaderItemProps>((props, ref) => {
  const { isCompact } = useMenuContext();

  return <StyledHeaderItem ref={ref} isCompact={isCompact} {...props} />;
});

HeaderItem.displayName = 'HeaderItem';
