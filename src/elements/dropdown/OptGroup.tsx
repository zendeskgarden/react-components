/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { HTMLAttributes, MouseEventHandler, forwardRef } from 'react';

import { useComboboxContext } from '../../hooks/dropdown/useComboboxContext';
import { useText } from '../../theming/utils/useText';
import { IOptGroupProps } from '../../types/elements';
import { StyledListboxSeparator } from '../../views/dropdown/StyledListboxSeparator';
import { StyledOptGroup } from '../../views/dropdown/StyledOptGroup';
import { StyledOption } from '../../views/dropdown/StyledOption';
import { StyledOptionContent } from '../../views/dropdown/StyledOptionContent';
import { StyledOptionTypeIcon } from '../../views/dropdown/StyledOptionTypeIcon';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const OptGroup = forwardRef<HTMLLIElement, IOptGroupProps>(
  ({ children, content, icon, legend, 'aria-label': ariaLabel, onMouseDown, ...props }, ref) => {
    const { getOptGroupProps, isCompact } = useComboboxContext();
    /* Prevent listbox collapse */
    const handleMouseDown: MouseEventHandler = event => event.preventDefault();
    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided implicitly by the `label` prop. */
    const groupAriaLabel = useText(
      OptGroup,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Group',
      !legend /* condition */
    );
    const optGroupProps = getOptGroupProps({
      'aria-label': (groupAriaLabel || legend)!
    }) as HTMLAttributes<HTMLUListElement>;

    return (
      <StyledOption
        $isCompact={isCompact}
        $type="group"
        onMouseDown={composeEventHandlers(onMouseDown, handleMouseDown)}
        role="none"
        {...props}
        data-garden-id={COMPONENT_IDS['dropdowns.combobox.option']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <StyledOptionContent
          data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.content']}
          data-garden-version={PACKAGE_VERSION}
        >
          {!!(content || legend) && (
            <StyledOption
              as="div"
              $isCompact={isCompact}
              $type="header"
              data-garden-id={COMPONENT_IDS['dropdowns.combobox.option']}
              data-garden-version={PACKAGE_VERSION}
            >
              {!!icon && (
                <StyledOptionTypeIcon
                  $isCompact={isCompact}
                  $type="header"
                  data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.type_icon']}
                  data-garden-version={PACKAGE_VERSION}
                >
                  {icon}
                </StyledOptionTypeIcon>
              )}
              {content || legend}
            </StyledOption>
          )}
          <StyledOptGroup
            $isCompact={isCompact}
            {...optGroupProps}
            data-garden-id={COMPONENT_IDS['dropdowns.combobox.optgroup']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledListboxSeparator
              role="none"
              data-garden-id={COMPONENT_IDS['dropdowns.combobox.separator']}
              data-garden-version={PACKAGE_VERSION}
            />
            {children}
          </StyledOptGroup>
        </StyledOptionContent>
      </StyledOption>
    );
  }
);

OptGroup.displayName = 'OptGroup';

OptGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string
};
