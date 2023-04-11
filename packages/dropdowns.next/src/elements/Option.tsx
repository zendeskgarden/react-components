/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import NextIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import PreviousIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import SelectedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { IOptionProps, OPTION_TYPE, OptionType } from '../types';
import useComboboxContext from '../context/useComboboxContext';
import { OptionContext } from '../context/useOptionContext';
import {
  StyledOption,
  StyledOptionContent,
  StyledOptionIcon,
  StyledOptionTypeIcon
} from '../views';
import { OptionMeta } from './OptionMeta';

const OptionComponent = forwardRef<HTMLLIElement, IOptionProps>(
  ({ children, icon, isDisabled, type, ...props }, ref) => {
    const contextValue = useMemo(() => ({ isDisabled }), [isDisabled]);
    const { isCompact } = useComboboxContext();
    const [isSelected, setIsSelected] = useState(false);
    const renderActionIcon = (iconType?: OptionType) => {
      switch (iconType) {
        case 'add':
          return <AddIcon />;

        case 'next':
          return <NextIcon />;

        case 'previous':
          return <PreviousIcon />;

        default:
          return <SelectedIcon />;
      }
    };

    return (
      <OptionContext.Provider value={contextValue}>
        <StyledOption
          isCompact={isCompact}
          $type={type}
          {...props}
          ref={ref}
          /* remove following props with useCombobox hook */
          aria-disabled={isDisabled}
          aria-selected={isSelected ? 'true' : undefined}
          onClick={() => setIsSelected(!isSelected)}
        >
          <StyledOptionTypeIcon isCompact={isCompact} type={type}>
            {renderActionIcon(type)}
          </StyledOptionTypeIcon>
          {icon && <StyledOptionIcon>{icon}</StyledOptionIcon>}
          <StyledOptionContent>{children}</StyledOptionContent>
        </StyledOption>
      </OptionContext.Provider>
    );
  }
);

OptionComponent.displayName = 'Option';

OptionComponent.propTypes = {
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf(OPTION_TYPE)
};

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Option = OptionComponent as typeof OptionComponent & {
  Meta: typeof OptionMeta;
};

Option.Meta = OptionMeta;
