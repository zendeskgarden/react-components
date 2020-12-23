/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, useContext, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import { TabsContext } from '../utils/useTabsContext';
import { StyledTabs } from '../styled/StyledTabs';

export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Displays child `Tab` components in a vertical orientation
   */
  isVertical?: boolean;
  /**
   * Sets the currently selected `Tab` to display
   */
  selectedItem?: any;
  /**
   * Provides a callback function that returns the `selectedItem` when a `Tab` has been selected by keyboard or mouse
   * @param {String} selectedItem The `item` value of the selected `Tab`
   */
  onChange?: (updatedSelectedItem: any) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const Tabs = React.forwardRef<HTMLDivElement, ITabsProps>(
  (
    { isVertical, children, onChange, selectedItem: controlledSelectedItem, ...otherProps },
    ref
  ) => {
    const theme = useContext(ThemeContext);
    const [internalSelectedItem, setSelectedItem] = useState();
    const tabIndexRef = useRef<number>(0);
    const tabPanelIndexRef = useRef<number>(0);
    const selectedItem = getControlledValue(controlledSelectedItem, internalSelectedItem);

    const tabPropGetters = useTabs({
      rtl: theme!.rtl,
      vertical: isVertical,
      selectedItem,
      defaultSelectedIndex: 0,
      onSelect: item => {
        if (onChange) {
          onChange(item);
        } else {
          setSelectedItem(item);
        }
      }
    });

    const tabsContextValue = { ...tabPropGetters, tabIndexRef, tabPanelIndexRef };

    return (
      <TabsContext.Provider value={tabsContextValue}>
        <StyledTabs isVertical={isVertical} {...otherProps} ref={ref}>
          {children}
        </StyledTabs>
      </TabsContext.Provider>
    );
  }
);

Tabs.propTypes = {
  isVertical: PropTypes.bool,
  selectedItem: PropTypes.any,
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  isVertical: false
};

export default Tabs;
