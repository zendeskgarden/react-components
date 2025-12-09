/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import PropTypes from 'prop-types';
import '../styled/StyledTab.js';
import '../styled/StyledTabList.js';
import { StyledTabPanel } from '../styled/StyledTabPanel.js';
import '../styled/StyledTabs.js';
import { useTabsContext } from '../utils/useTabsContext.js';

const TabPanel = React.forwardRef(({
  item,
  ...otherProps
}, ref) => {
  const tabsPropGetters = useTabsContext();
  if (!tabsPropGetters) {
    return React.createElement(StyledTabPanel, Object.assign({
      ref: ref
    }, otherProps));
  }
  const tabPanelProps = tabsPropGetters.getTabPanelProps({
    value: item
  });
  return React.createElement(StyledTabPanel, Object.assign({
    "aria-hidden": tabsPropGetters.selectedValue !== item,
    $isVertical: tabsPropGetters.isVertical
  }, tabPanelProps, otherProps, {
    ref: ref
  }));
});
TabPanel.displayName = 'Tabs.TabPanel';
TabPanel.propTypes = {
  item: PropTypes.any
};

export { TabPanel };
