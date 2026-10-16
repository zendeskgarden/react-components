/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { LiHTMLAttributes, forwardRef, useEffect, useMemo, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import SelectionIcon from 'svg-icons-legacy/src/12/circle-sm-fill.svg';
import SelectedIcon from 'svg-icons-legacy/src/16/check-lg-stroke.svg';
import PreviousIcon from 'svg-icons-legacy/src/16/chevron-left-stroke.svg';
import NextIcon from 'svg-icons-legacy/src/16/chevron-right-stroke.svg';
import AddIcon from 'svg-icons-legacy/src/16/plus-stroke.svg';

import { OptionProvider } from '../../context/dropdown/OptionContext';
import { useComboboxContext } from '../../hooks/dropdown/useComboboxContext';
import { IOptionProps, OPTION_TYPE, OptionType } from '../../types/elements';
import { StyledOption } from '../../views/dropdown/StyledOption';
import { StyledOptionContent } from '../../views/dropdown/StyledOptionContent';
import { StyledOptionIcon } from '../../views/dropdown/StyledOptionIcon';
import { StyledOptionSelectionIcon } from '../../views/dropdown/StyledOptionSelectionIcon';
import { StyledOptionTypeIcon } from '../../views/dropdown/StyledOptionTypeIcon';
import { COMPONENT_IDS } from '../utils';
import { toOption } from './comboboxUtils';
import { OptionMeta } from './OptionMeta';

const OptionComponent = forwardRef<HTMLLIElement, IOptionProps>(
  (
    {
      children,
      hasSelection,
      icon,
      isDisabled,
      isHidden,
      isSelected,
      label,
      type,
      value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tagProps,
      ...props
    },
    ref
  ) => {
    const contextValue = useMemo(() => ({ isDisabled, type }), [isDisabled, type]);
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
      <OptionProvider value={contextValue}>
        <StyledOption
          $isActive={isActive}
          $isCompact={isCompact}
          $type={type}
          {...props}
          {...optionProps}
          data-garden-id={COMPONENT_IDS['dropdowns.combobox.option']}
          data-garden-version={PACKAGE_VERSION}
        >
          {!!hasSelection && type === 'next' && (
            <StyledOptionSelectionIcon
              $isCompact={isCompact}
              data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.selection_icon']}
              data-garden-version={PACKAGE_VERSION}
            >
              <SelectionIcon />
            </StyledOptionSelectionIcon>
          )}
          <StyledOptionTypeIcon
            $isCompact={isCompact}
            $type={type}
            data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.type_icon']}
            data-garden-version={PACKAGE_VERSION}
          >
            {renderActionIcon(type)}
          </StyledOptionTypeIcon>
          {!!icon && (
            <StyledOptionIcon
              $isDisabled={isDisabled}
              $type={type}
              data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.icon']}
              data-garden-version={PACKAGE_VERSION}
            >
              {icon}
            </StyledOptionIcon>
          )}
          <StyledOptionContent
            data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.content']}
            data-garden-version={PACKAGE_VERSION}
          >
            {children || label || value}
          </StyledOptionContent>
        </StyledOption>
      </OptionProvider>
    );
  }
);

OptionComponent.displayName = 'Option';

OptionComponent.propTypes = {
  hasSelection: PropTypes.bool,
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isHidden: PropTypes.bool,
  label: PropTypes.string,
  tagProps: PropTypes.object,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.string.isRequired
};

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Option = OptionComponent as typeof OptionComponent & {
  Meta: typeof OptionMeta;
};

Option.Meta = OptionMeta;
