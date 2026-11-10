/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, MutableRefObject, forwardRef, useEffect, useRef } from 'react';

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
  ({ disabled, item, icon, label, children, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();
    const visibleCount = tabsPropGetters?.visibleCount ?? 0;
    const position = tabsPropGetters
      ? tabsPropGetters.tabs.findIndex(tab => tab.value === item)
      : -1;
    /* An overflowed tab stays in the layout (for measurement) but is hidden
     * from assistive technology and focus. */
    const isHidden = position >= visibleCount;
    const hasWarned = useRef(false);

    /* The overflow menu needs a plain-text label for every hidden tab. */
    useEffect(() => {
      if (
        process.env.NODE_ENV === 'development' &&
        !hasWarned.current &&
        isHidden &&
        label === undefined &&
        typeof children !== 'string'
      ) {
        hasWarned.current = true;
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: a tab in <Tabs.TabList> moved into the overflow menu without a plain-text label. Set the `label` prop on <Tabs.Tab> so the overflow menu can name it.'
        );
      }
    }, [isHidden, label, children]);

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
     * The hook gives no Tab stop when the selected tab is not navigable (in
     * the overflow menu, disabled, or not among the tabs). Give the stop to
     * the first navigable tab instead, unless the user already focused a
     * navigable tab (the hook's `focusedValue`), so the tab list keeps a
     * single Tab stop.
     */
    const isNavigable = (index: number) =>
      index >= 0 && index < visibleCount && !tabsPropGetters.tabs[index]!.disabled;
    let rovingTabIndex = tabProps.tabIndex;

    if (isHidden) {
      rovingTabIndex = -1;
    } else {
      const selectedIndex = tabsPropGetters.tabs.findIndex(
        tab => tab.value === tabsPropGetters.selectedValue
      );
      const focusedIndex = tabsPropGetters.tabs.findIndex(
        tab => tab.value === tabsPropGetters.focusedValue
      );

      if (!isNavigable(selectedIndex) && !isNavigable(focusedIndex)) {
        const firstNavigableIndex = tabsPropGetters.tabs.findIndex((_tab, index) =>
          isNavigable(index)
        );

        if (position === firstNavigableIndex) {
          rovingTabIndex = 0;
        }
      }
    }

    return (
      <StyledTab
        $isSelected={item === tabsPropGetters.selectedValue}
        $isVertical={tabsPropGetters.isVertical}
        $isHidden={isHidden}
        {...tabProps}
        tabIndex={rovingTabIndex}
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
  item: PropTypes.any,
  icon: PropTypes.element,
  label: PropTypes.string
};
