/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledTabList } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabList = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const tabsPropGetters = useTabsContext();

    if (!tabsPropGetters) {
      return <StyledTabList ref={ref} {...props} />;
    }

    const tabListProps =
      tabsPropGetters.getTabListProps<HTMLDivElement>() as HTMLAttributes<HTMLDivElement>;

    return <StyledTabList {...tabListProps} {...props} ref={ref} />;
  }
);

TabList.displayName = 'TabList';
