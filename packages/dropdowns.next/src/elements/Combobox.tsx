/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext, useMemo, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import StartIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import OptionIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { IComboboxProps, VALIDATION } from '../types';
import { ComboboxContext } from '../context/useComboboxContext';
import {
  StyledCombobox,
  StyledContainer,
  StyledFloating,
  StyledInputIcon,
  StyledInput,
  StyledInputGroup,
  StyledListbox,
  StyledTrigger,
  StyledValue
} from '../views';
import { Option } from './Option';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>((props, ref) => {
  const {
    isAutocomplete,
    isBare,
    isCompact,
    isDisabled,
    isEditable,
    focusInset,
    placeholder,
    validation,
    ...comboboxProps
  } = props;
  const contextValue = useMemo(() => ({ isCompact }), [isCompact]);
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const [isInputHidden, setIsInputHidden] = useState(true);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { reference, floating, placement, x, y } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(theme.space.base),
      flip(),
      size({
        apply: ({ elements, rects }) => {
          elements.floating.style.width = `${rects.reference.width}px`;
        }
      })
    ]
  });

  return (
    <ComboboxContext.Provider value={contextValue}>
      <StyledCombobox isCompact={props.isCompact} {...comboboxProps} ref={ref}>
        <StyledTrigger
          isAutocomplete={isAutocomplete}
          isBare={isBare}
          isCompact={isCompact}
          isEditable={isEditable}
          focusInset={focusInset}
          validation={validation}
          ref={reference}
          /* remove following props with useCombobox hook */
          aria-disabled={isDisabled}
          onClick={() => inputRef.current?.focus()}
          tabIndex={isEditable ? -1 : 0}
        >
          <StyledContainer>
            <StyledInputIcon isCompact={isCompact}>
              <StartIcon />
            </StyledInputIcon>
            <StyledInputGroup>
              {isInputHidden && (
                <StyledValue isCompact={isCompact} isPlaceholder={!value}>
                  {value || placeholder}
                </StyledValue>
              )}
              <StyledInput
                aria-invalid={validation === 'error' || validation === 'warning'}
                hidden={isInputHidden}
                isCompact={isCompact}
                onFocus={() => setIsInputHidden(false)}
                onBlur={() => setIsInputHidden(true)}
                placeholder={placeholder}
                /* remove following props with useCombobox hook */
                disabled={isDisabled}
                onChange={event => setValue(event.target.value)}
                readOnly={!isEditable}
                tabIndex={isEditable ? undefined : -1}
                value={value}
                ref={inputRef}
              />
            </StyledInputGroup>
            <StyledInputIcon isCompact={isCompact} isEnd isRotated={!isInputHidden}>
              <EndIcon />
            </StyledInputIcon>
          </StyledContainer>
        </StyledTrigger>
        <StyledFloating
          data-garden-animate={!isInputHidden}
          isHidden={false}
          position={placement === 'bottom-start' ? 'bottom' : 'top'}
          style={{ top: y ?? 0, left: x ?? 0 }}
          ref={floating}
        >
          <StyledListbox>
            <Option icon={<OptionIcon />} isDisabled={isDisabled}>
              One
              <Option.Meta>Meta</Option.Meta>
            </Option>
            <Option isDisabled={isDisabled}>
              Two
              <Option.Meta>Meta</Option.Meta>
            </Option>
            <Option isDisabled={isDisabled}>Three</Option>
          </StyledListbox>
        </StyledFloating>
      </StyledCombobox>
    </ComboboxContext.Provider>
  );
});

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  isAutocomplete: PropTypes.bool,
  isBare: PropTypes.bool,
  isCompact: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  focusInset: PropTypes.bool,
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(VALIDATION)
};

Combobox.defaultProps = {
  isAutocomplete: true,
  isEditable: true
};
