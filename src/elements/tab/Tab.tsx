/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, MutableRefObject, forwardRef } from 'react';

import { useTabsContext } from '../../hooks/tab/useTabsContext';
import { ITabProps } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledTab } from '../../views/tab/StyledTab';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tabs.Tab` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tab = forwardRef<HTMLDivElement, ITabProps>(
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
          data-garden-id={COMPONENT_IDS['tabs.tab']}
          data-garden-version={PACKAGE_VERSION}
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
        data-garden-id={COMPONENT_IDS['tabs.tab']}
        data-garden-version={PACKAGE_VERSION}
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
