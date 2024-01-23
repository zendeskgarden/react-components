/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { LiHTMLAttributes, forwardRef, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import AddIcon from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import NextIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import PreviousIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import SelectedIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { IOptionProps, OPTION_TYPE, OptionType } from '../../types';
import useComboboxContext from '../../context/useComboboxContext';
import { OptionContext } from '../../context/useOptionContext';
import {
  StyledOption,
  StyledOptionContent,
  StyledOptionIcon,
  StyledOptionTypeIcon
} from '../../views';
import { OptionMeta } from './OptionMeta';
import { toOption, toString } from './utils';

const OptionComponent = forwardRef<HTMLLIElement, IOptionProps>(
  ({ children, icon, isDisabled, isHidden, isSelected, label, type, value, ...props }, ref) => {
    const contextValue = useMemo(() => ({ isDisabled }), [isDisabled]);
    const { activeValue, getOptionProps, isCompact } = useComboboxContext();
    const isActive = value === activeValue;
    const optionRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
      if (isActive) {
        // Scroll active option into view.
        setTimeout(() => {
          if (optionRef.current && optionRef.current.scrollIntoView) {
            /* istanbul ignore next */
            optionRef.current.scrollIntoView({ block: 'nearest' });
          }
        });
      }
    }, [isActive]);

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
    const option = toOption({ value, label, isDisabled, isHidden, isSelected });
    const optionProps = getOptionProps({
      option,
      ref: mergeRefs([optionRef, ref])
    }) as LiHTMLAttributes<HTMLLIElement>;

    return (
      <OptionContext.Provider value={contextValue}>
        <StyledOption
          isActive={isActive}
          isCompact={isCompact}
          $type={type}
          {...props}
          {...optionProps}
        >
          <StyledOptionTypeIcon isCompact={isCompact} type={type}>
            {renderActionIcon(type)}
          </StyledOptionTypeIcon>
          {icon && <StyledOptionIcon>{icon}</StyledOptionIcon>}
          <StyledOptionContent>{children || label || toString({ value })}</StyledOptionContent>
        </StyledOption>
      </OptionContext.Provider>
    );
  }
);

OptionComponent.displayName = 'Option';

OptionComponent.propTypes = {
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isHidden: PropTypes.bool,
  label: PropTypes.string,
  tagProps: PropTypes.object,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Option = OptionComponent as typeof OptionComponent & {
  Meta: typeof OptionMeta;
};

Option.Meta = OptionMeta;
