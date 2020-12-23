/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledTab } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

export interface ITabProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Disables the `Tab` and prevents user interaction
   */
  disabled?: boolean;
  /**
   * Defines a value to uniquely identify the `Tab`. Provided to the `onChange` event in `Tabs`
   */
  item?: any;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tab = React.forwardRef<HTMLDivElement, ITabProps>(
  ({ disabled, item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();
    const focusRef = useCombinedRefs(ref);

    if (disabled || !tabsPropGetters) {
      return <StyledTab disabled={disabled} ref={focusRef} {...otherProps} />;
    }

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
  }
);

Tab.displayName = 'Tab';

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};
