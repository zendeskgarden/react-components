/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import '../styled/StyledTab.js';
import { StyledTabList } from '../styled/StyledTabList.js';
import '../styled/StyledTabPanel.js';
import '../styled/StyledTabs.js';
import { useTabsContext } from '../utils/useTabsContext.js';

const TabList = React.forwardRef((props, ref) => {
  const tabsPropGetters = useTabsContext();
  if (!tabsPropGetters) {
    return React.createElement(StyledTabList, Object.assign({
      ref: ref
    }, props));
  }
  const tabListProps = tabsPropGetters.getTabListProps();
  return React.createElement(StyledTabList, Object.assign({
    $isVertical: tabsPropGetters.isVertical
  }, tabListProps, props, {
    ref: ref
  }));
});
TabList.displayName = 'Tabs.TabList';

export { TabList };
