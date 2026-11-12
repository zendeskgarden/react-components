/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useState, useCallback, useMemo, forwardRef } from 'react';

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
    {
      isVertical = false,
      children,
      onChange,
      selectedItem: controlledSelectedItem,
      defaultSelectedItem,
      ...otherProps
    },
    ref
  ) => {
    const theme = useGardenTheme();
    const [internalSelectedItem, setInternalSelectedItem] = useState(defaultSelectedItem);

    const tabs = useMemo(() => toTabs(children), [children]);

    /*
     * The first render shows every tab, so server HTML has no overflow menu.
     * `TabList` measures the tab list and writes the count back.
     */
    const [visibleCount, setVisibleCount] = useState(tabs.length);

    /*
     * Overflowed tabs reach the hook as disabled, so arrow navigation never
     * reaches a tab in the overflow menu. The disabled flag does not change
     * layout.
     */
    const navigableTabs = useMemo(
      () =>
        tabs.map((tab, index) => ({
          value: tab.value,
          disabled: index >= visibleCount ? true : tab.disabled
        })),
      [tabs, visibleCount]
    );

    /*
     * The selection has a value from the first render (server HTML
     * included): a controlled `selectedItem` wins — `null` is a controlled
     * value and selects nothing — then the internal state, then the first
     * enabled tab. Computing the fallback every render selects the first
     * enabled tab even when the tabs arrive after the first render.
     */
    const controlledValue = getControlledValue(controlledSelectedItem, internalSelectedItem);
    const selectedItem =
      controlledValue === undefined ? tabs.find(tab => !tab.disabled)?.value : controlledValue;

    const select = useCallback(
      (item: any) => {
        if (controlledSelectedItem === undefined) {
          setInternalSelectedItem(item);
        }

        onChange?.(item);
      },
      [controlledSelectedItem, onChange]
    );

    /*
     * `selectedValue` is always provided, and the explicit
     * `defaultSelectedValue: undefined` overrides the hook's first-tab
     * default, so the hook never calls `onSelect` on mount: `onChange` only
     * fires on user selection.
     */
    const tabsContextValue = useTabs({
      tabs: navigableTabs,
      rtl: theme!.rtl,
      orientation: isVertical ? 'vertical' : 'horizontal',
      selectedValue: selectedItem,
      defaultSelectedValue: undefined,
      onSelect: select
    });

    /*
     * The tab that holds the Tab stop. The hook gives the stop to the focused
     * tab and keeps pointing at it when the tab is no longer navigable
     * (overflowed, disabled, or not among the tabs), leaving the tab list
     * without a stop. The entry tab then is the selected tab when it is
     * navigable, else the first navigable tab. Computed once so `Tab` and
     * `TabList` cannot disagree.
     */
    const entryIndex = useMemo(() => {
      const isNavigable = (index: number) =>
        index >= 0 && index < visibleCount && !tabs[index]!.disabled;

      return (
        [tabsContextValue.focusedValue, selectedItem]
          .map(value => tabs.findIndex(tab => tab.value === value))
          .find(isNavigable) ?? tabs.findIndex((_tab, index) => isNavigable(index))
      );
    }, [tabsContextValue.focusedValue, selectedItem, tabs, visibleCount]);

    const contextValue = useMemo(
      () => ({
        isVertical,
        ...tabsContextValue,
        select,
        tabs,
        visibleCount,
        setVisibleCount,
        entryIndex
      }),
      [isVertical, tabsContextValue, select, tabs, visibleCount, entryIndex]
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
  defaultSelectedItem: PropTypes.any,
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
