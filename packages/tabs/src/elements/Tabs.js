/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { isRtl, withTheme } from '@zendeskgarden/react-theming';

import TabsView from '../views/TabsView';
import TabList from '../views/TabList';
import Tab from '../views/Tab';

/**
 * High-level abstraction for basic Tabs implementations.
 */
function Tabs({
  vertical,
  children,
  onChange,
  selectedItem: controlledSelectedItem,
  ...otherProps
}) {
  const [internalSelectedItem, setSelectedItem] = useState();
  const firstItemRef = useRef();
  const selectedItem = getControlledValue(controlledSelectedItem, internalSelectedItem);

  const { getTabListProps, getTabPanelProps, getTabProps, focusedItem } = useTabs({
    rtl: isRtl(otherProps),
    vertical,
    selectedItem,
    onSelect: item => {
      if (onChange) {
        onChange(item);
      } else {
        setSelectedItem(item);
      }
    }
  });

  useEffect(() => {
    /**
     * In an uncontrolled state we want to always display the first tab
     */
    if (controlledSelectedItem === undefined && typeof firstItemRef.current !== undefined) {
      setSelectedItem(firstItemRef.current);
    }
    // This should only run after the first mount of the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabsView vertical={vertical} {...otherProps}>
      <TabList {...getTabListProps()}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return child;
          }

          const { label, disabled, item, tabProps } = child.props;

          if (disabled) {
            return <Tab disabled>{label}</Tab>;
          }

          if (firstItemRef.current === undefined) {
            firstItemRef.current = item;
          }

          const focusRef = React.createRef();

          return (
            <Tab
              {...getTabProps({
                key: child.key,
                index,
                item,
                focusRef,
                ref: focusRef,
                selected: item === selectedItem,
                focused: item === focusedItem,
                ...tabProps
              })}
            >
              {label}
            </Tab>
          );
        })}
      </TabList>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        if (child.props.disabled) {
          return null;
        }

        // Don't want to duplicate tabProps in the TabPanel
        const { tabProps, item, ...other } = child.props;

        return cloneElement(
          child,
          getTabPanelProps({
            key: child.key,
            index,
            item,
            'aria-hidden': selectedItem !== item,
            ...other
          })
        );
      })}
    </TabsView>
  );
}

Tabs.propTypes = {
  children: PropTypes.any,
  /**
   * Toggles vertical selection mode of Tabs
   */
  vertical: PropTypes.bool,
  /**
   * Currently selected tab to display
   */
  selectedItem: PropTypes.any,
  /**
   * Callback for when a tab has been selected by keyboard or mouse
   * @param {String} selectedItem - The item of the selected tab
   */
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  vertical: false
};

export default withTheme(Tabs);
