/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { ITabProps } from '../types';
import { StyledTab } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tab = React.forwardRef<HTMLDivElement, ITabProps>(
  ({ disabled, item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();
    const tabRef = useRef<HTMLDivElement>();

    if (disabled || !tabsPropGetters) {
      return <StyledTab disabled={disabled} ref={mergeRefs([tabRef, ref])} {...otherProps} />;
    }

    return (
      <StyledTab
        ref={mergeRefs([tabRef, ref])}
        {...tabsPropGetters.getTabProps({
          item,
          focusRef: tabRef,
          index: tabsPropGetters.tabIndexRef.current++,
          isSelected: item === tabsPropGetters.selectedItem,
          ...otherProps
        })}
      />
    );
  }
);

Tab.displayName = 'Tab';

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};
