/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { withTheme, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import { TabsContext } from '../utils/useTabsContext';
import { StyledTabs } from '../styled/StyledTabs';

export interface ITabsProps extends Partial<ThemeProps<DefaultTheme>> {
  /**
   * Displays the contained Tab items in a vertical orientation
   */
  isVertical?: boolean;
  /**
   * Sets the currently selected Tab item to display
   */
  selectedItem?: any;
  /**
   * Provides a callback function that returns the `selectedItem` when a tab has been selected by keyboard or mouse
   * @param {String} selectedItem: The value of the selected Tab item
   */
  onChange?: (updatedSelectedItem: any) => void;
}

/**
 * High-level abstraction for basic Tabs implementations.
 */
const Tabs = React.forwardRef<HTMLDivElement, ITabsProps>(
  (
    { isVertical, children, onChange, selectedItem: controlledSelectedItem, theme, ...otherProps },
    ref
  ) => {
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
  isVertical: false,
  theme: DEFAULT_THEME
};

/** @component */
export default withTheme(Tabs) as React.FC<ITabsProps & React.RefAttributes<HTMLDivElement>>;
