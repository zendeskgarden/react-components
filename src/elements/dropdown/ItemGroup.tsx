/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, forwardRef, useMemo } from 'react';

import { ItemGroupProvider } from '../../context/dropdown/ItemGroupContext';
import { useMenuContext } from '../../hooks/dropdown/useMenuContext';
import { useText } from '../../theming/utils/useText';
import { IItemGroupProps } from '../../types/elements';
import { StyledItem } from '../../views/dropdown/StyledItem';
import { StyledItemContent } from '../../views/dropdown/StyledItemContent';
import { StyledItemGroup } from '../../views/dropdown/StyledItemGroup';
import { StyledItemTypeIcon } from '../../views/dropdown/StyledItemTypeIcon';
import { StyledSeparator } from '../../views/dropdown/StyledSeparator';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const ItemGroup = forwardRef<HTMLLIElement, IItemGroupProps>(
  ({ children, content, legend, icon, 'aria-label': ariaLabel, type, ...props }, ref) => {
    const { isCompact, getItemGroupProps } = useMenuContext();

    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided implicitly by the `label` prop. */
    const groupAriaLabel = useText(
      ItemGroup,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Group',
      !legend /* condition */
    );

    const groupProps = getItemGroupProps({
      'aria-label': (groupAriaLabel || legend)!
    }) as HTMLAttributes<HTMLUListElement>;

    const contextValue = useMemo(() => ({ type }), [type]);

    return (
      <ItemGroupProvider value={contextValue}>
        <StyledItem
          $isCompact={isCompact}
          $type="group"
          {...props}
          data-garden-id={COMPONENT_IDS['dropdowns.menu.item']}
          data-garden-version={PACKAGE_VERSION}
          role="none"
          ref={ref}
        >
          <StyledItemContent
            data-garden-id={COMPONENT_IDS['dropdowns.menu.item.content']}
            data-garden-version={PACKAGE_VERSION}
          >
            {!!(content || legend) && (
              <StyledItem
                as="div"
                $isCompact={isCompact}
                $type="header"
                data-garden-id={COMPONENT_IDS['dropdowns.menu.item']}
                data-garden-version={PACKAGE_VERSION}
              >
                {!!icon && (
                  <StyledItemTypeIcon
                    $isCompact={isCompact}
                    $type="header"
                    data-garden-id={COMPONENT_IDS['dropdowns.menu.item.type_icon']}
                    data-garden-version={PACKAGE_VERSION}
                  >
                    {icon}
                  </StyledItemTypeIcon>
                )}
                {content || legend}
              </StyledItem>
            )}
            <StyledItemGroup
              $isCompact={isCompact}
              {...groupProps}
              data-garden-id={COMPONENT_IDS['dropdowns.menu.item_group']}
              data-garden-version={PACKAGE_VERSION}
            >
              <StyledSeparator
                role="none"
                data-garden-id={COMPONENT_IDS['dropdowns.menu.separator']}
                data-garden-version={PACKAGE_VERSION}
              />
              {children}
            </StyledItemGroup>
          </StyledItemContent>
        </StyledItem>
      </ItemGroupProvider>
    );
  }
);

ItemGroup.displayName = 'ItemGroup';

ItemGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio', undefined])
};
