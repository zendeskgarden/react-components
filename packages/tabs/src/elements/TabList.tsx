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
 * Accepts all `<div>` props
 */
const TabList: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const tabsPropGetters = useTabsContext();

  if (!tabsPropGetters) {
    return <StyledTabList {...props} />;
  }

  return <StyledTabList {...(tabsPropGetters.getTabListProps(props) as any)} />;
};

export default TabList;
