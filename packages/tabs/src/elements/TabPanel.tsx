/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ITabPanelProps } from '../types';
import { StyledTabPanel } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

/**
 * @deprecated use `Tabs.TabPanel` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabPanel = React.forwardRef<HTMLDivElement, ITabPanelProps>(
  ({ item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();

    if (!tabsPropGetters) {
      return <StyledTabPanel ref={ref} {...otherProps} />;
    }

    const tabPanelProps = tabsPropGetters.getTabPanelProps<HTMLDivElement>({
      value: item
    }) as HTMLAttributes<HTMLDivElement>;

    return (
      <StyledTabPanel
        aria-hidden={tabsPropGetters.selectedValue !== item}
        $isVertical={tabsPropGetters.isVertical}
        {...tabPanelProps}
        {...otherProps}
        ref={ref}
      />
    );
  }
);

TabPanel.displayName = 'Tabs.TabPanel';

TabPanel.propTypes = { item: PropTypes.any };
