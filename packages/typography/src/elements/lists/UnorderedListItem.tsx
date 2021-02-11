/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { LiHTMLAttributes } from 'react';
import useUnorderedListContext from '../../utils/useUnorderedListContext';
import { StyledUnorderedListItem } from '../../styled';

const UnorderedListItem: React.FunctionComponent<
  LiHTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>
> = React.forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { size } = useUnorderedListContext();

  return <StyledUnorderedListItem ref={ref} space={size} {...props} />;
});

UnorderedListItem.displayName = 'UnorderedListItem';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export default UnorderedListItem;
