/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { StyledTab } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

export interface ITabProps extends HTMLAttributes<HTMLDivElement> {
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Defines a unique value to identify the tab. Provided to the `onChange` event in the [Tabs](#tabs) component. */
  item?: any;
}

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
