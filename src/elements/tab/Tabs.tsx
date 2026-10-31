/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useState, useMemo, forwardRef } from 'react';

import { TabsProvider } from '../../context/tab/TabsContext';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { ITabsProps } from '../../types/elements';
import { toTabs } from '../../utils/tab/toTabs';
import { StyledTabs } from '../../views/tab/StyledTabs';
import { COMPONENT_IDS } from '../utils';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';

export const TabsComponent = forwardRef<HTMLDivElement, ITabsProps>(
  (
    { isVertical = false, children, onChange, selectedItem: controlledSelectedItem, ...otherProps },
    ref
  ) => {
    const theme = useGardenTheme();
    const [internalSelectedItem, setInternalSelectedItem] = useState();
    const selectedItem = getControlledValue(controlledSelectedItem, internalSelectedItem);

    const tabs = useMemo(() => toTabs(children), [children]);

    const tabsContextValue = useTabs({
      tabs,
      rtl: theme!.rtl,
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

    const contextValue = useMemo(
      () => ({ isVertical, ...tabsContextValue }),
      [isVertical, tabsContextValue]
    );

    return (
      <TabsProvider value={contextValue}>
        <StyledTabs
          $isVertical={isVertical}
          {...otherProps}
          data-garden-id={COMPONENT_IDS['tabs.tabs']}
          data-garden-version={PACKAGE_VERSION}
          ref={ref}
        >
          {children}
        </StyledTabs>
      </TabsProvider>
    );
  }
);

TabsComponent.propTypes = {
  isVertical: PropTypes.bool,
  selectedItem: PropTypes.any,
  onChange: PropTypes.func
};

TabsComponent.displayName = 'Tabs';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tabs = TabsComponent as typeof TabsComponent & {
  Tab: typeof Tab;
  TabList: typeof TabList;
  TabPanel: typeof TabPanel;
};

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;
