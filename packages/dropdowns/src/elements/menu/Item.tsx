/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { LiHTMLAttributes, MutableRefObject, forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import AddIcon from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import NextIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import PreviousIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import CheckedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { IItemProps, OptionType as ItemType, OPTION_TYPE } from '../../types';
import { StyledItem, StyledItemContent, StyledItemIcon, StyledItemTypeIcon } from '../../views';
import { ItemMeta } from './ItemMeta';
import useMenuContext from '../../context/useMenuContext';
import useItemGroupContext from '../../context/useItemGroupContext';
import { ItemContext } from '../../context/useItemContext';
import { toItem } from './utils';

const ItemComponent = forwardRef<HTMLLIElement, IItemProps>(
  (
    {
      children,
      value,
      label = value,
      isSelected,
      icon,
      isDisabled,
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
        isDisabled
      }),
      type: selectionType
    };

    const { ref: _itemRef, ...itemProps } = getItemProps({
      item,
      onClick,
      onKeyDown,
      onMouseEnter
    }) as LiHTMLAttributes<HTMLLIElement> & { ref: MutableRefObject<HTMLLIElement> };

    const isActive = value === focusedValue;

    const renderActionIcon = (iconType?: ItemType) => {
      switch (iconType) {
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

    const contextValue = useMemo(() => ({ isDisabled, type }), [isDisabled, type]);

    return (
      <ItemContext.Provider value={contextValue}>
        <StyledItem
          $type={type}
          $isCompact={isCompact}
          $isActive={isActive}
          {...props}
          {...itemProps}
          ref={mergeRefs([_itemRef, ref])}
        >
          <StyledItemTypeIcon $isCompact={isCompact} $type={type}>
            {renderActionIcon(type)}
          </StyledItemTypeIcon>
          {!!icon && (
            <StyledItemIcon $isDisabled={isDisabled} $type={type}>
              {icon}
            </StyledItemIcon>
          )}
          <StyledItemContent>{children || label}</StyledItemContent>
        </StyledItem>
      </ItemContext.Provider>
    );
  }
);

ItemComponent.displayName = 'Item';

ItemComponent.propTypes = {
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
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
