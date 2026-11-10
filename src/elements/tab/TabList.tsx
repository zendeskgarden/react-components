/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef, useRef } from 'react';

import { useTabsContext } from '../../hooks/tab/useTabsContext';
import { useText } from '../../theming/utils/useText';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { useTabIndicatorGeometry } from '../../utils/tab/useTabIndicatorGeometry';
import { useTabIndicatorMotion } from '../../utils/tab/useTabIndicatorMotion';
import { StyledTabIndicator } from '../../views/tab/StyledTabIndicator';
import { StyledTabList } from '../../views/tab/StyledTabList';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tabs.TabList` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const tabsPropGetters = useTabsContext();
  const listRef = useRef<HTMLDivElement>(null);
  const isVertical = !!tabsPropGetters?.isVertical;
  const geometry = useTabIndicatorGeometry(listRef, tabsPropGetters?.selectedValue, isVertical);
  const indicatorRef = useTabIndicatorMotion(geometry, isVertical);
  /* A standalone tab list (no `Tabs`) renders without a default name, as before. */
  const ariaLabel = useText(
    TabList,
    props,
    'aria-label',
    'Tabs',
    !!tabsPropGetters && !props['aria-labelledby']
  );

  if (!tabsPropGetters) {
    return (
      <StyledTabList
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['tabs.tablist']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }

  const { children, ...otherProps } = props;
  const tabListProps =
    tabsPropGetters.getTabListProps<HTMLDivElement>() as HTMLAttributes<HTMLDivElement>;

  return (
    <StyledTabList
      $isVertical={tabsPropGetters.isVertical}
      {...tabListProps}
      {...otherProps}
      aria-label={ariaLabel}
      data-garden-id={COMPONENT_IDS['tabs.tablist']}
      data-garden-version={PACKAGE_VERSION}
      ref={mergeRefs([listRef, ref])}
    >
      {children}
      <StyledTabIndicator
        $isVertical={tabsPropGetters.isVertical}
        aria-hidden="true"
        hidden={!geometry}
        ref={indicatorRef}
        data-garden-id={COMPONENT_IDS['tabs.indicator']}
        data-garden-version={PACKAGE_VERSION}
      />
    </StyledTabList>
  );
});

TabList.displayName = 'Tabs.TabList';
