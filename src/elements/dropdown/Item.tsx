/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { LiHTMLAttributes, MutableRefObject, forwardRef, useMemo } from 'react';
import CheckedIcon from 'svg-icons-legacy/src/16/check-lg-stroke.svg';
import PreviousIcon from 'svg-icons-legacy/src/16/chevron-left-stroke.svg';
import NextIcon from 'svg-icons-legacy/src/16/chevron-right-stroke.svg';
import AddIcon from 'svg-icons-legacy/src/16/plus-stroke.svg';

import { ItemProvider } from '../../context/dropdown/ItemContext';
import { useItemGroupContext } from '../../hooks/dropdown/useItemGroupContext';
import { useMenuContext } from '../../hooks/dropdown/useMenuContext';
import { IItemProps, OPTION_TYPE, OptionType } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledItem } from '../../views/dropdown/StyledItem';
import { StyledItemAnchor } from '../../views/dropdown/StyledItemAnchor';
import { StyledItemContent } from '../../views/dropdown/StyledItemContent';
import { StyledItemIcon } from '../../views/dropdown/StyledItemIcon';
import { StyledItemTypeIcon } from '../../views/dropdown/StyledItemTypeIcon';
import { COMPONENT_IDS } from '../utils';
import { ItemMeta } from './ItemMeta';
import { toItem } from './menuUtils';

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
      ...other
    },
    ref
  ) => {
    const { type: selectionType } = useItemGroupContext();
    const { focusedValue, getAnchorProps, getItemProps, isCompact } = useMenuContext();
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

    const anchorProps = getAnchorProps({ item });

    if (anchorProps && (type === 'add' || type === 'danger')) {
      throw new Error(`Menu link item '${value}' can't use type '${type}'`);
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
        <StyledItemTypeIcon
          $isCompact={isCompact}
          $type={type}
          data-garden-id={COMPONENT_IDS['dropdowns.menu.item.type_icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          {renderActionIcon(type)}
        </StyledItemTypeIcon>
        {!!icon && (
          <StyledItemIcon
            $isDisabled={isDisabled}
            $type={type}
            data-garden-id={COMPONENT_IDS['dropdowns.menu.item.icon']}
            data-garden-version={PACKAGE_VERSION}
          >
            {icon}
          </StyledItemIcon>
        )}
        <StyledItemContent
          data-garden-id={COMPONENT_IDS['dropdowns.menu.item.content']}
          data-garden-version={PACKAGE_VERSION}
        >
          {children || label}
        </StyledItemContent>
      </>
    );

    const menuItemProps = {
      ...other,
      ...itemProps,
      ref: mergeRefs([_itemRef, ref])
    };

    return (
      <ItemProvider value={contextValue}>
        {anchorProps ? (
          <li {...menuItemProps}>
            <StyledItemAnchor
              $isCompact={isCompact}
              $isActive={value === focusedValue}
              {...anchorProps}
              as="a"
              data-garden-id={COMPONENT_IDS['dropdowns.menu.item_anchor']}
              data-garden-version={PACKAGE_VERSION}
            >
              {itemChildren}
            </StyledItemAnchor>
          </li>
        ) : (
          <StyledItem
            $isCompact={isCompact}
            $isActive={value === focusedValue}
            $type={type}
            {...menuItemProps}
            data-garden-id={COMPONENT_IDS['dropdowns.menu.item']}
            data-garden-version={PACKAGE_VERSION}
          >
            {itemChildren}
          </StyledItem>
        )}
      </ItemProvider>
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
