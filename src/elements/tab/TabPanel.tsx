/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, forwardRef } from 'react';

import { useTabsContext } from '../../hooks/tab/useTabsContext';
import { ITabPanelProps } from '../../types/elements';
import { StyledTabPanel } from '../../views/tab/StyledTabPanel';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tabs.TabPanel` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabPanel = forwardRef<HTMLDivElement, ITabPanelProps>(
  ({ item, ...otherProps }, ref) => {
    const tabsPropGetters = useTabsContext();

    if (!tabsPropGetters) {
      return (
        <StyledTabPanel
          ref={ref}
          tabIndex={0}
          {...otherProps}
          data-garden-id={COMPONENT_IDS['tabs.tabpanel']}
          data-garden-version={PACKAGE_VERSION}
        />
      );
    }

    const tabPanelProps = tabsPropGetters.getTabPanelProps<HTMLDivElement>({
      value: item
    }) as HTMLAttributes<HTMLDivElement>;

    return (
      /* A hidden panel is `display: none`, so it cannot receive focus. */
      /* eslint-disable-next-line jsx-a11y/no-aria-hidden-on-focusable */
      <StyledTabPanel
        aria-hidden={tabsPropGetters.selectedValue !== item}
        $isVertical={tabsPropGetters.isVertical}
        tabIndex={0}
        {...tabPanelProps}
        {...otherProps}
        data-garden-id={COMPONENT_IDS['tabs.tabpanel']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

TabPanel.displayName = 'Tabs.TabPanel';

TabPanel.propTypes = { item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };
