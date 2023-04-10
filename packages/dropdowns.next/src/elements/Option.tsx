/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SelectedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { IOptionProps } from '../types';
import useComboboxContext from '../context/useComboboxContext';
import { OptionContext } from '../context/useOptionContext';
import { StyledItem, StyledItemContent, StyledItemIcon, StyledSelectedIcon } from '../views';
import { OptionMeta } from './OptionMeta';

const OptionComponent = forwardRef<HTMLLIElement, IOptionProps>(
  ({ children, icon, isDisabled, ...props }, ref) => {
    const contextValue = useMemo(() => ({ isDisabled }), [isDisabled]);
    const { isCompact } = useComboboxContext();
    const [isSelected, setIsSelected] = useState(false);

    return (
      <OptionContext.Provider value={contextValue}>
        <StyledItem
          isCompact={isCompact}
          {...props}
          ref={ref}
          /* remove following props with useCombobox hook */
          aria-disabled={isDisabled}
          aria-selected={isSelected}
          onClick={() => setIsSelected(!isSelected)}
        >
          <StyledSelectedIcon isCompact={isCompact}>
            <SelectedIcon />
          </StyledSelectedIcon>
          {icon && <StyledItemIcon>{icon}</StyledItemIcon>}
          <StyledItemContent>{children}</StyledItemContent>
        </StyledItem>
      </OptionContext.Provider>
    );
  }
);

OptionComponent.displayName = 'Option';

OptionComponent.propTypes = {
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool
};

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Option = OptionComponent as typeof OptionComponent & {
  Meta: typeof OptionMeta;
};

Option.Meta = OptionMeta;
