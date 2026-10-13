/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useTabsContext } from '../../hooks/tab/useTabsContext';
import { StyledTabList } from '../../views/tab/StyledTabList';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tabs.TabList` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const tabsPropGetters = useTabsContext();

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

  const tabListProps =
    tabsPropGetters.getTabListProps<HTMLDivElement>() as HTMLAttributes<HTMLDivElement>;

  return (
    <StyledTabList
      $isVertical={tabsPropGetters.isVertical}
      {...tabListProps}
      {...props}
      data-garden-id={COMPONENT_IDS['tabs.tablist']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  );
});

TabList.displayName = 'Tabs.TabList';
