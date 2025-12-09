/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { StyledTab } from '../styled/StyledTab.js';
import '../styled/StyledTabList.js';
import '../styled/StyledTabPanel.js';
import '../styled/StyledTabs.js';
import { useTabsContext } from '../utils/useTabsContext.js';

const Tab = React.forwardRef(({
  disabled,
  item,
  ...otherProps
}, ref) => {
  const tabsPropGetters = useTabsContext();
  if (disabled || !tabsPropGetters) {
    return React.createElement(StyledTab, Object.assign({
      role: "tab",
      "aria-disabled": disabled,
      ref: ref,
      $isVertical: tabsPropGetters?.isVertical
    }, otherProps));
  }
  const {
    ref: tabRef,
    ...tabProps
  } = tabsPropGetters.getTabProps({
    value: item
  });
  return React.createElement(StyledTab, Object.assign({
    $isSelected: item === tabsPropGetters.selectedValue,
    $isVertical: tabsPropGetters.isVertical
  }, tabProps, otherProps, {
    ref: mergeRefs([tabRef, ref])
  }));
});
Tab.displayName = 'Tabs.Tab';
Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};

export { Tab };
