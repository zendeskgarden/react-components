/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  AnchorHTMLAttributes,
  LiHTMLAttributes,
  MutableRefObject,
  forwardRef,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import AddIcon from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import NextIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import PreviousIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import CheckedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';

import { IItemProps, OPTION_TYPE, OptionType } from '../../types';
import {
  StyledItem,
  StyledItemAnchor,
  StyledItemContent,
  StyledItemIcon,
  StyledItemTypeIcon
} from '../../views';
import { ItemMeta } from './ItemMeta';
import useMenuContext from '../../context/useMenuContext';
import useItemGroupContext from '../../context/useItemGroupContext';
import { ItemContext } from '../../context/useItemContext';
import { toItem } from './utils';

const optionType = new Set(OPTION_TYPE);

const renderActionIcon = (itemType?: OptionType) => {
  switch (itemType) {
    case 'add':
      return <AddIcon />;
    case 'next':
      return <NextIcon />;
    case 'previous':
      return <PreviousIcon />;
    default:
      return <CheckedIcon />;
  }
};

/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

const ItemComponent = forwardRef<HTMLLIElement, IItemProps>(
  (
    {
      children,
      value,
      label = value,
      href,
      isSelected,
      icon,
      isDisabled,
      isExternal,
      type,
      name,
      onClick,
      onKeyDown,
      onMouseEnter,
      ...props
    },
    ref
  ) => {
    const { type: selectionType } = useItemGroupContext();
    const { focusedValue, getItemProps, isCompact } = useMenuContext();
    const item = {
      ...toItem({
        value,
        label,
        name,
        type,
        isSelected,
        isDisabled,
        href,
        isExternal
      }),
      type: selectionType
    };

    const hasAnchor = !!href;

    if (hasAnchor) {
      if (type && optionType.has(type)) {
        throw new Error(`Menu item '${value}' can't use type '${type}'`);
      } else if (selectionType) {
        throw new Error(`Menu item '${value}' can't use selection type '${selectionType}'`);
      }
    }

    const { ref: _itemRef, ...itemProps } = getItemProps({
      item,
      onClick,
      onKeyDown,
      onMouseEnter
    }) as LiHTMLAttributes<HTMLLIElement> & { ref: MutableRefObject<HTMLLIElement> };

    const contextValue = useMemo(() => ({ isDisabled, type }), [isDisabled, type]);

    const itemChildren = (
      <>
        <StyledItemTypeIcon $isCompact={isCompact} $type={type}>
          {renderActionIcon(type)}
        </StyledItemTypeIcon>
        {!!icon && (
          <StyledItemIcon $isDisabled={isDisabled} $type={type}>
            {icon}
          </StyledItemIcon>
        )}
        <StyledItemContent>{children || label}</StyledItemContent>
      </>
    );

    const menuItemProps = {
      $isCompact: isCompact,
      $isActive: value === focusedValue,
      $type: type,
      ...props,
      ...itemProps,
      ref: mergeRefs([_itemRef, ref])
    };

    return (
      <ItemContext.Provider value={contextValue}>
        {hasAnchor ? (
          <li role="none">
            <StyledItemAnchor
              {...(menuItemProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
              href={href}
              target={isExternal ? '_blank' : undefined}
              // legacy browsers safeguards
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {itemChildren}
            </StyledItemAnchor>
          </li>
        ) : (
          <StyledItem {...menuItemProps}>{itemChildren}</StyledItem>
        )}
      </ItemContext.Provider>
    );
  }
);

ItemComponent.displayName = 'Item';

ItemComponent.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isExternal: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.string.isRequired
};

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent as typeof ItemComponent & {
  Meta: typeof ItemMeta;
};

Item.Meta = ItemMeta;
