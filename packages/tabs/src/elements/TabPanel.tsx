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

interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
  item?: any;
}

/**
 * Accepts all `<div>` props
 */
const TabPanel: React.FC<ITabPanelProps> = ({ item, ...otherProps }) => {
  const tabsPropGetters = useTabsContext();

  if (!tabsPropGetters) {
    return <StyledTabPanel {...otherProps} />;
  }

  return (
    <StyledTabPanel
      {...tabsPropGetters.getTabPanelProps({
        item,
        index: tabsPropGetters.tabPanelIndexRef.current++,
        'aria-hidden': tabsPropGetters.selectedItem !== item,
        ...otherProps
      })}
    />
  );
};

TabPanel.propTypes = { item: PropTypes.any };

export default TabPanel;
