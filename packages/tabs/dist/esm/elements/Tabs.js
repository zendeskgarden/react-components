/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { toTabs } from '../utils/toTabs.js';
import { TabsContext } from '../utils/useTabsContext.js';
import { StyledTabs } from '../styled/StyledTabs.js';
import { Tab } from './Tab.js';
import { TabList } from './TabList.js';
import { TabPanel } from './TabPanel.js';

const TabsComponent = forwardRef(({
  isVertical = false,
  children,
  onChange,
  selectedItem: controlledSelectedItem,
  ...otherProps
}, ref) => {
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const [internalSelectedItem, setInternalSelectedItem] = useState();
  const selectedItem = getControlledValue(controlledSelectedItem, internalSelectedItem);
  const tabs = useMemo(() => toTabs(children), [children]);
  const tabsContextValue = useTabs({
    tabs,
    rtl: theme.rtl,
    orientation: isVertical ? 'vertical' : 'horizontal',
    selectedValue: selectedItem,
    defaultSelectedValue: tabs.find(tab => !tab.disabled)?.value,
    onSelect: item => {
      if (onChange) {
        onChange(item);
      } else {
        setInternalSelectedItem(item);
      }
    }
  });
  const contextValue = useMemo(() => ({
    isVertical,
    ...tabsContextValue
  }), [isVertical, tabsContextValue]);
  return React.createElement(TabsContext.Provider, {
    value: contextValue
  }, React.createElement(StyledTabs, Object.assign({
    $isVertical: isVertical
  }, otherProps, {
    ref: ref
  }), children));
});
TabsComponent.propTypes = {
  isVertical: PropTypes.bool,
  selectedItem: PropTypes.any,
  onChange: PropTypes.func
};
TabsComponent.displayName = 'Tabs';
const Tabs = TabsComponent;
Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;

export { Tabs, TabsComponent };
