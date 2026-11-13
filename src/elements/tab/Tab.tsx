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
import { StyledTabIcon } from '../../views/tab/StyledTabIcon';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tabs.Tab` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tab = forwardRef<HTMLDivElement, ITabProps>(
  (
    {
      disabled,
      item,
      icon,
      /* `label` only names the tab in the overflow menu; it is not rendered. */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      label,
      children,
      ...otherProps
    },
    ref
  ) => {
    const tabsPropGetters = useTabsContext();
    const visibleCount = tabsPropGetters?.visibleCount ?? 0;
    const position = tabsPropGetters
      ? tabsPropGetters.tabs.findIndex(tab => tab.value === item)
      : -1;
    /* An overflowed tab stays in the layout (for measurement) but is hidden
     * from assistive technology and focus. */
    const isHidden = position >= visibleCount;

    const tabIcon = icon ? (
      <StyledTabIcon
        data-garden-id={COMPONENT_IDS['tabs.tab.icon']}
        data-garden-version={PACKAGE_VERSION}
      >
        {icon}
      </StyledTabIcon>
    ) : undefined;

    if (!tabsPropGetters) {
      return (
        <StyledTab
          role="tab"
          aria-disabled={disabled}
          ref={ref}
          {...otherProps}
          data-garden-id={COMPONENT_IDS['tabs.tab']}
          data-garden-version={PACKAGE_VERSION}
        >
          {tabIcon}
          {children}
        </StyledTab>
      );
    }

    /*
     * `getTabProps` also handles a disabled tab: it strips the interaction
     * handlers and sets `aria-disabled`, while keeping `id`, `aria-selected`
     * and `aria-controls`.
     */
    const { ref: tabRef, ...tabProps } = tabsPropGetters.getTabProps<HTMLDivElement>({
      value: item
    }) as HTMLAttributes<HTMLDivElement> & { ref: MutableRefObject<HTMLDivElement> };

    /*
     * The hook gives no Tab stop when the selected or focused tab is not
     * navigable (in the overflow menu, disabled, or not among the tabs), so
     * the stop goes to the entry tab that `Tabs` computes once.
     */
    let rovingTabIndex = tabProps.tabIndex;
    let ariaDisabled = tabProps['aria-disabled'];

    if (isHidden) {
      rovingTabIndex = -1;
      /* Overflowed tabs reach the hook as disabled; only a disabled tab is
       * marked as one. */
      ariaDisabled = disabled || undefined;
    } else if (position !== -1) {
      rovingTabIndex = position === tabsPropGetters.entryIndex ? 0 : -1;
    }

    return (
      <StyledTab
        $isSelected={item === tabsPropGetters.selectedValue}
        $isVertical={tabsPropGetters.isVertical}
        $isHidden={isHidden}
        {...tabProps}
        tabIndex={rovingTabIndex}
        aria-disabled={ariaDisabled}
        {...otherProps}
        data-garden-id={COMPONENT_IDS['tabs.tab']}
        data-garden-version={PACKAGE_VERSION}
        ref={mergeRefs([tabRef, ref])}
      >
        {tabIcon}
        {children}
      </StyledTab>
    );
  }
);

Tab.displayName = 'Tabs.Tab';

Tab.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.any,
  label: PropTypes.string
};
