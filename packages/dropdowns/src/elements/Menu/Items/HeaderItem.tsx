/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderItem, IStyledHeaderItemProps } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * Accepts all `<li>` props
 */
export const HeaderItem = React.forwardRef<
  HTMLLIElement,
  IStyledHeaderItemProps & HTMLAttributes<HTMLLIElement>
>((props, ref) => {
  const { isCompact } = useMenuContext();

  return <StyledHeaderItem ref={ref} isCompact={isCompact} {...props} />;
});
