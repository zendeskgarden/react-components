/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ITabPanelProps } from '../types';
import { StyledTabPanel } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
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
