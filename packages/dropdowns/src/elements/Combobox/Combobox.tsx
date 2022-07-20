/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, KeyboardEvent, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { MediaInput, VALIDATION } from '@zendeskgarden/react-forms';
import mergeRefs from 'react-merge-refs';
import { IComboboxProps } from '../../types';
import useDropdownContext from '../../utils/useDropdownContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>(
  (
    {
      isCompact,
      isBare,
      disabled,
      focusInset,
      placeholder,
      validation,
      inputRef: inputRefProp = null,
      start,
      end,
      ...props
    },
    ref
  ) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, getRootProps, isOpen },
      setDropdownType
    } = useDropdownContext();
    const wrapperRef = useRef<HTMLDivElement>();
    const inputRef = useRef<HTMLInputElement>();
    const isOpenRef = useRef<boolean | undefined>(isOpen);
    const wrapperProps = getToggleButtonProps(
      getRootProps({
        role: null, // apply role to input for Safari screenreader support
        type: null, // prevent button type from being added to wrapper div
        onClick: (event: MouseEvent) => {
          (event as any).nativeEvent.preventDownshiftDefault = true;
        },
        ...props,
        // prevents onSelect from firing twice
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          (event.nativeEvent as any).preventDownshiftDefault = true;
        }
      } as any)
    );
    const inputProps = getInputProps({
      isCompact,
      isBare,
      disabled,
      focusInset,
      placeholder,
      validation,
      start,
      end,
      role: 'combobox',
      onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
        if (
          event.keyCode === KEY_CODES.SPACE ||
          (!isOpen && [KEY_CODES.DOWN, KEY_CODES.UP].includes(event.keyCode))
        ) {
          (event.nativeEvent as any).preventDownshiftDefault = true;
        }
      },
      onClick: (event: MouseEvent) => {
        (event as any).nativeEvent.preventDownshiftDefault = true;
      }
    });

    useEffect(() => {
      if (inputRef.current && isOpen !== isOpenRef.current) {
        inputRef.current.focus();
      }

      isOpenRef.current = isOpen;
    }, [inputRef, isOpen]);

    useEffect(() => {
      setDropdownType('combobox');
    }, [setDropdownType]);

    return (
      <Reference>
        {({ ref: popperReference }) => {
          const wrapperRefProp = (element: HTMLDivElement) => {
            // Pass ref to Popper for positioning
            (popperReference as any)(element);

            // Store ref locally
            mergeRefs([wrapperRef, ref])(element);

            // Apply wrapper to global Dropdown context
            popperReferenceElementRef.current = element;
          };

          return (
            <MediaInput
              {...inputProps}
              wrapperProps={wrapperProps}
              wrapperRef={wrapperRefProp}
              ref={mergeRefs([inputRef, inputRefProp])}
            />
          );
        }}
      </Reference>
    );
  }
);

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(VALIDATION)
};
