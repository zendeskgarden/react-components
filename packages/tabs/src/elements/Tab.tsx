/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTab } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

interface ITabProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  /**
   * A value to uniquely identify a Tab. Provided to the `onChange` event.
   */
  item?: any;
}

/**
 * Accepts all `<div>` props
 */
const Tab: React.FC<ITabProps> = ({ disabled, item, ...otherProps }) => {
  const tabsPropGetters = useTabsContext();

  if (disabled || !tabsPropGetters) {
    return <StyledTab disabled={disabled} {...otherProps} />;
  }

  const focusRef = React.createRef();

  return (
    <StyledTab
      {...tabsPropGetters.getTabProps({
        item,
        focusRef,
        index: tabsPropGetters.tabIndexRef.current++,
        isSelected: item === tabsPropGetters.selectedItem,
        ...otherProps
      })}
    />
  );
};

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};

export default Tab;
