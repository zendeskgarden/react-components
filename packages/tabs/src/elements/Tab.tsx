/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, MutableRefObject } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ITabProps } from '../types';
import { StyledTab } from '../styled';
import { useTabsContext } from '../utils/useTabsContext';

/**
 * @deprecated use `Tabs.Tab` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tab = React.forwardRef<HTMLDivElement, ITabProps>(
  ({ disabled, item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();

    if (disabled || !tabsPropGetters) {
      return (
        <StyledTab
          role="tab"
          aria-disabled={disabled}
          ref={ref}
          $isVertical={tabsPropGetters?.isVertical}
          {...otherProps}
        />
      );
    }

    const { ref: tabRef, ...tabProps } = tabsPropGetters.getTabProps<HTMLDivElement>({
      value: item
    }) as HTMLAttributes<HTMLDivElement> & { ref: MutableRefObject<HTMLDivElement> };

    return (
      <StyledTab
        $isSelected={item === tabsPropGetters.selectedValue}
        $isVertical={tabsPropGetters.isVertical}
        {...tabProps}
        {...otherProps}
        ref={mergeRefs([tabRef, ref])}
      />
    );
  }
);

Tab.displayName = 'Tabs.Tab';

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.any
};
