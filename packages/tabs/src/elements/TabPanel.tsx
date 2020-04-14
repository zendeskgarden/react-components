/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTabPanel } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

export interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sets a value used to match a TabPanel with its associated Tab
   */
  item?: any;
}

/**
 * Accepts all `<div>` props.
 */
export const TabPanel = React.forwardRef<HTMLDivElement, ITabPanelProps>(
  ({ item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();

    if (!tabsPropGetters) {
      return <StyledTabPanel ref={ref} {...otherProps} />;
    }

    return (
      <StyledTabPanel
        {...tabsPropGetters.getTabPanelProps({
          item,
          ref,
          index: tabsPropGetters.tabPanelIndexRef.current++,
          'aria-hidden': tabsPropGetters.selectedItem !== item,
          ...otherProps
        })}
      />
    );
  }
);

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = { item: PropTypes.any };
