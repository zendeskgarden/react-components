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

export interface ITabData extends ITab<ITabProps['item']> {
  /** The tab element's props */
  props: ITabProps;
}

const collectTabs = (children: ReactNode) =>
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
        const childItems = collectTabs(child.props.children);

        retVal.push(...childItems);
      }
    }

    return retVal;
  }, []);

/**
 * Converts an array of `Tab` children to a valid `tabs` data structure for `useTabs`.
 * The collected entries are index-aligned with the tab elements of the tab list,
 * in DOM order.
 *
 * @param children The `children` prop from `Tabs`.
 *
 * @returns The collected tabs, each with its `value`, `disabled` flag and `props`.
 */
export const toTabs = (children: ReactNode) => {
  /*
   * A value collected more than once (a panel wrapped with `styled()` or in
   * a component with an `item` prop) is one tab: the first entry keeps its
   * position and props, and a later disabled entry disables it. An enabled
   * duplicate would otherwise enable a disabled tab in the hook.
   */
  const tabs = new Map<ITabData['value'], ITabData>();

  collectTabs(children).forEach(tab => {
    const first = tabs.get(tab.value);

    if (!first) {
      tabs.set(tab.value, tab);
    } else if (tab.disabled && !first.disabled) {
      tabs.set(tab.value, { ...first, disabled: true });
    }
  });

  return Array.from(tabs.values());
};
