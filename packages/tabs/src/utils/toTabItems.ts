/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseTabsProps } from '@zendeskgarden/container-tabs';
import { Children, ReactNode, isValidElement } from 'react';
import { Tab } from '../elements/Tab';

/**
 * Converts an array of `Tab` children to a valid `items` data structure for `useTabs`.
 *
 * @param children The `children` prop from `Tabs`.
 *
 * @returns A valid `IUseTabsProps['items']` data structure.
 */
export const toTabItems = (children: ReactNode) =>
  Children.toArray(children).reduce((_items: IUseTabsProps<any>['tabs'], child) => {
    const retVal = _items;

    if (isValidElement(child) && child.type !== 'string') {
      if (Tab === child.type && 'item' in child.props) {
        const props = child.props;

        if (!props.disabled) {
          retVal.push(props.item);
        }
      } else {
        const childItems = toTabItems(child.props.children);

        retVal.push(...childItems);
      }
    }

    return retVal;
  }, []);
