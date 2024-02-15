/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  ARROW_POSITION as ArrowPosition,
  MENU_POSITION as MenuPosition
} from '@zendeskgarden/react-theming';
import { GardenPlacement, IItemGroupProps, IItemProps, SHARED_PLACEMENT } from '../../types';
import { Placement, Side } from '@floating-ui/react-dom';
import { IMenuItemBase, IMenuItemSeparator, MenuItem } from '@zendeskgarden/container-menu';
import { Children, ReactNode, isValidElement } from 'react';

const FLOATING_PLACEMENT = [
  ...SHARED_PLACEMENT,
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end'
] as const;

type FloatingPlacement = (typeof FLOATING_PLACEMENT)[number];

const PLACEMENT_LISTS_MAP: Record<string, Placement[]> = {
  top: ['top-start', 'top', 'top-end'],
  bottom: ['bottom-start', 'bottom', 'bottom-end'],
  left: ['left-start', 'left', 'left-end'],
  right: ['right-start', 'right', 'right-end']
};

const OPPOSITE_PLACEMENT_MAP: Record<string, Side> = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};

/**
 * Convert Garden placement to a valid placement for Floating-UI.
 *
 * @param isRtl Determines if layout is right-to-left.
 * @param placement A Garden placement.
 *
 * @returns A Floating-UI placement.
 */
export const toFloatingPlacement = (
  isRtl: boolean,
  placement: GardenPlacement
): FloatingPlacement => {
  let retVal;

  /* Map Garden to Floating-UI placements */
  const placementMap: Record<string, FloatingPlacement> = {
    auto: 'bottom-start',
    end: 'right',
    'end-top': 'right-start',
    'end-bottom': 'right-end',
    start: 'left',
    'start-top': 'left-start',
    'start-bottom': 'left-end'
  };

  retVal = placementMap[placement] || placement;

  if (isRtl) {
    /* Map Floating-UI to RTL placements */
    const placementMapRtl: Record<string, FloatingPlacement> = {
      left: 'right',
      'left-start': 'right-start',
      'left-end': 'right-end',
      right: 'left',
      'right-start': 'left-start',
      'right-end': 'left-end'
    };

    retVal = placementMapRtl[retVal] || retVal;
  }

  return retVal;
};

/**
 * If `fallbackPlacements` are given, converts them to Floating-UI placements.
 *
 * Otherwise, builds a list of Floating-UI fallback placements given the
 * current `placement`.
 *
 * @param isRtl Determines if layout is right-to-left.
 * @param placement A Floating-UI placement.
 * @param fallbackPlacements Optional list of Garden placements
 *
 * @returns A list of Floating-UI fallback placements.
 */
export const getFallbackPlacements = (
  isRtl: boolean,
  placement: FloatingPlacement,
  fallbackPlacements?: GardenPlacement[]
): Placement[] => {
  if (Array.isArray(fallbackPlacements) && fallbackPlacements.length > 0) {
    return fallbackPlacements.map(fallback => toFloatingPlacement(isRtl, fallback) as Placement);
  }

  const side = placement.split('-')[0];
  const sameSideFallbacks = [...PLACEMENT_LISTS_MAP[side]];
  const oppositeSideFallbacks = PLACEMENT_LISTS_MAP[OPPOSITE_PLACEMENT_MAP[side]];

  // Remove the primary placement from the list of same-side fallbacks
  // to prevent extra work for Floating-UI
  sameSideFallbacks.splice(sameSideFallbacks.indexOf(placement as Placement), 1);

  return [...sameSideFallbacks, ...oppositeSideFallbacks];
};

/**
 * Convert Floating-UI placement to a valid `menuStyles` position.
 *
 * @param placement A Floating-UI placement.
 *
 * @returns A `menuStyles` position.
 */
export const toMenuPosition = (placement?: FloatingPlacement): MenuPosition => {
  if (placement === undefined || placement === 'auto') {
    return 'bottom';
  }

  return placement.split('-')[0] as MenuPosition;
};

/**
 * Convert Floating-UI placement to a valid `arrowStyles` position.
 *
 * @param placement A Floating-UI placement.
 *
 * @returns An `arrowStyles` position.
 */
export const toArrowPosition = (isRtl: boolean, placement?: FloatingPlacement): ArrowPosition => {
  const positionMap: Record<FloatingPlacement, ArrowPosition> = {
    auto: 'top',
    top: 'bottom',
    'top-start': 'bottom-left',
    'top-end': 'bottom-right',
    right: 'left',
    'right-start': 'left-top',
    'right-end': 'left-bottom',
    bottom: 'top',
    'bottom-start': 'top-left',
    'bottom-end': 'top-right',
    left: 'right',
    'left-start': 'right-top',
    'left-end': 'right-bottom'
  };
  let retVal = positionMap[placement || 'auto'];

  if (isRtl) {
    const rtlPositionMap: Record<string, ArrowPosition> = {
      'bottom-left': 'bottom-right',
      'bottom-right': 'bottom-left',
      'top-left': 'top-right',
      'top-right': 'top-left'
    };

    retVal = rtlPositionMap[retVal] || retVal;
  }

  return retVal;
};

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
