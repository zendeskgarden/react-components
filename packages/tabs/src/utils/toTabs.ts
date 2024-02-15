/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseTabsProps } from '@zendeskgarden/container-tabs';
import { Children, ReactNode, isValidElement } from 'react';

/**
 * Converts an array of `Tab` children to a valid `tabs` data structure for `useTabs`.
 *
 * @param children The `children` prop from `Tabs`.
 *
 * @returns A valid `IUseTabsProps['tabs']` data structure.
 */
export const toTabs = (children: ReactNode) =>
  Children.toArray(children).reduce((_items: IUseTabsProps<any>['tabs'], child) => {
    const retVal = _items;

    if (isValidElement(child)) {
      if ('item' in child.props) {
        const props = child.props;

        retVal.push({
          value: props.item,
          disabled: props.disabled
        });
      } else {
        const childItems = toTabs(child.props.children);

        retVal.push(...childItems);
      }
    }

    return retVal;
  }, []);
