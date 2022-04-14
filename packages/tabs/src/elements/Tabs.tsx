/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, useContext, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { useTabs } from '@zendeskgarden/container-tabs';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { ITabsProps } from '../types';
import { TabsContext } from '../utils/useTabsContext';
import { StyledTabs } from '../styled/StyledTabs';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tabs = forwardRef<HTMLDivElement, ITabsProps>(
  (
    { isVertical, children, onChange, selectedItem: controlledSelectedItem, ...otherProps },
    ref
  ) => {
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
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

    const tabsContextValue = useMemo(
      () => ({ ...tabPropGetters, tabIndexRef, tabPanelIndexRef }),
      [tabPropGetters]
    );

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

Tabs.displayName = 'Tabs';
