/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ITab } from '@zendeskgarden/container-tabs';
import { Children, ReactNode, isValidElement } from 'react';

import { COMPONENT_IDS } from '../../elements/utils';
import { ITabProps } from '../../types/elements';
import { isGardenType } from '../shared/gardenType';

export interface ITabData extends ITab<ITabProps['item']> {
  /** The tab element's props */
  props: ITabProps;
}

interface ICollectedTab extends ITabData {
  isInTabList: boolean;
}

const collectTabs = (children: ReactNode, isInTabList = false): ICollectedTab[] =>
  Children.toArray(children).reduce((_items: ICollectedTab[], child) => {
    const retVal = _items;

    /* A `TabPanel`, styled or not, also carries an `item` prop; it is not a tab. */
    if (isValidElement<ITabProps>(child) && !isGardenType(child, COMPONENT_IDS['tabs.tabpanel'])) {
      if ('item' in child.props) {
        const props = child.props;

        retVal.push({
          value: props.item,
          disabled: props.disabled,
          props,
          isInTabList
        });
      } else {
        const childItems = collectTabs(
          child.props.children,
          isInTabList || isGardenType(child, COMPONENT_IDS['tabs.tablist'])
        );

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
  const collected = collectTabs(children);
  /*
   * A panel rendered by a component with an `item` prop is collected too.
   * Outside a tab list, an entry whose value a tab list holds is that
   * panel: the tab list gives the tab its position and props. A custom
   * component that renders the tab list hides it, so every entry then
   * counts.
   */
  const listedValues = new Set(collected.filter(tab => tab.isInTabList).map(tab => tab.value));
  /*
   * A value collected more than once (two tab lists, or a panel wrapper
   * with no tab list found) is one tab: the first entry keeps its position
   * and props, and a later disabled entry disables it. An enabled duplicate
   * would otherwise enable a disabled tab in the hook.
   */
  const tabs = new Map<ITabData['value'], ITabData>();

  collected.forEach(({ isInTabList, ...tab }) => {
    if (!isInTabList && listedValues.has(tab.value)) {
      return;
    }

    const first = tabs.get(tab.value);

    if (!first) {
      tabs.set(tab.value, tab);
    } else if (tab.disabled && !first.disabled) {
      tabs.set(tab.value, { ...first, disabled: true });
    }
  });

  return Array.from(tabs.values());
};
