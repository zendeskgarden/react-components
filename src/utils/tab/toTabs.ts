/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ITab } from '@zendeskgarden/container-tabs';
import { Children, ReactNode, isValidElement } from 'react';

import { TabPanel } from '../../elements/tab/TabPanel';
import { ITabProps } from '../../types/elements';

export interface ITabData extends ITab<any> {
  /** The tab element's props */
  props: ITabProps;
}

/**
 * Converts an array of `Tab` children to a valid `tabs` data structure for `useTabs`.
 * The collected entries are index-aligned with the tab elements of the tab list,
 * in DOM order.
 *
 * @param children The `children` prop from `Tabs`.
 *
 * @returns The collected tabs, each with its `value`, `disabled` flag and `props`.
 */
export const toTabs = (children: ReactNode) =>
  Children.toArray(children).reduce((_items: ITabData[], child) => {
    const retVal = _items;

    /* A `TabPanel` also carries an `item` prop; it is not a tab. */
    if (isValidElement<ITabProps>(child) && child.type !== TabPanel) {
      if ('item' in child.props) {
        const props = child.props;

        retVal.push({
          value: props.item,
          disabled: props.disabled,
          props
        });
      } else {
        const childItems = toTabs(child.props.children);

        retVal.push(...childItems);
      }
    }

    return retVal;
  }, []);
