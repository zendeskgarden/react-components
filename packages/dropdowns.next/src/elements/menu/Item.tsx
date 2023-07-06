/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useState } from 'react';
import AddIcon from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import NextIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import PreviousIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import CheckedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { IItemProps, OptionType as ItemType } from '../../types';
import useMenuContext from '../../context/useMenuContext';
import { ItemContext } from '../../context/useItemContext';
import { StyledItem, StyledItemContent, StyledItemIcon, StyledItemTypeIcon } from '../../views';
import { ItemMeta } from './ItemMeta';

const ItemComponent = forwardRef<HTMLLIElement, IItemProps>(
  ({ children, icon, isDisabled, type, ...props }, ref) => {
    // TODO [jz] remove state for styling demo only
    const [isActive, setIsActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // END TODO

    const contextValue = useMemo(() => ({ isDisabled }), [isDisabled]);
    const { isCompact } = useMenuContext();

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

    return (
      <ItemContext.Provider value={contextValue}>
        <StyledItem
          isCompact={isCompact}
          $type={type}
          {...props}
          // TODO [jz] replace with container props
          aria-checked={isChecked}
          aria-disabled={isDisabled}
          isActive={isActive}
          onClick={() => setIsChecked(!isChecked)}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          // END TODO
          ref={ref}
        >
          <StyledItemTypeIcon isCompact={isCompact} type={type}>
            {renderActionIcon(type)}
          </StyledItemTypeIcon>
          {icon && <StyledItemIcon>{icon}</StyledItemIcon>}
          <StyledItemContent>{children}</StyledItemContent>
        </StyledItem>
      </ItemContext.Provider>
    );
  }
);

ItemComponent.displayName = 'Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent as typeof ItemComponent & {
  Meta: typeof ItemMeta;
};

Item.Meta = ItemMeta;
