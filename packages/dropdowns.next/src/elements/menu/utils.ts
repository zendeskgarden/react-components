/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IItemGroupProps, IItemProps } from '../../types';
import { IMenuItemBase, IMenuItemSeparator, MenuItem } from '@zendeskgarden/container-menu';
import { Children, ReactNode, isValidElement } from 'react';

/**
 * Convert `Item` props to a valid object for `useMenu`.
 *
 * @param props `Item` props.
 *
 * @returns A valid `useMenu` item object.
 */
export const toItem = (
  props: IItemProps & { selectionType?: IItemGroupProps['type'] }
): IMenuItemBase => ({
  value: props.value,
  label: props.label,
  ...(props.name && { name: props.name }),
  ...(props.isDisabled && { disabled: props.isDisabled }),
  ...(props.isSelected && { selected: props.isSelected }),
  ...(props.selectionType && { type: props.selectionType }),
  ...(props.type === 'next' && { isNext: true }),
  ...(props.type === 'previous' && { isPrevious: true })
});

/**
 * Convert an array of `Item` and `ItemGroup` children to a valid `items`
 * data structure for `useMenu`.
 *
 * @param children The `children` prop from `Combobox`.
 * @param type The group type, if any.
 *
 * @returns A valid `IUseMenuProps['items']` data structure.
 */
export const toItems = (children: ReactNode, type?: 'radio' | 'checkbox') =>
  Children.toArray(children).reduce((items: MenuItem[], item) => {
    const retVal = items;

    if (isValidElement(item)) {
      if ('value' in item.props) {
        retVal.push(toItem({ ...item.props, selectionType: type }));
      } else {
        const props: IItemGroupProps = item.props;
        const groupLabel = props.legend || props['aria-label'];
        const isSelectableGroup = props.type && ['checkbox', 'radio'].includes(props.type);

        /**
         * The only other JSX element we care about is an `ItemGroup`; if a
         * legend/label/type doesn't exist, ignore the element
         */
        if (groupLabel || isSelectableGroup) {
          const groupItems = toItems(props.children, props.type) as (
            | IMenuItemBase
            | IMenuItemSeparator
          )[];

          retVal.push({ label: (props.legend || props['aria-label'])!, items: groupItems });
        }
      }
    }

    return retVal;
  }, []);
