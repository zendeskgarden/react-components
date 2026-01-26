/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

import { StyledHeaderItem } from '../../../styled';
import { IHeaderItemProps } from '../../../types';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const HeaderItem = React.forwardRef<HTMLLIElement, IHeaderItemProps>(
  ({ hasIcon, ...other }, ref) => {
    const { isCompact } = useMenuContext();

    return <StyledHeaderItem ref={ref} $isCompact={isCompact} $hasIcon={hasIcon} {...other} />;
  }
);

HeaderItem.displayName = 'HeaderItem';
