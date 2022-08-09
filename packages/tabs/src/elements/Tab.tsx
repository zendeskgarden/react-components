/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
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
    const tabRef = React.createRef<HTMLDivElement>();

    if (disabled || !tabsPropGetters) {
      return (
        <StyledTab role="tab" disabled={disabled} ref={mergeRefs([tabRef, ref])} {...otherProps} />
      );
    }

    const tabProps = tabsPropGetters.getTabProps<HTMLDivElement>({
      item,
      focusRef: tabRef,
      index: tabsPropGetters.tabIndexRef.current++
    }) as HTMLAttributes<HTMLDivElement>;

    return (
      <StyledTab
        isSelected={item === tabsPropGetters.selectedItem}
        {...tabProps}
        {...otherProps}
        ref={mergeRefs([tabRef, ref])}
      />
    );
  }
);

Tab.displayName = 'Tab';

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};
