/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ComponentPropsWithoutRef, KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { KEY_CODES, useCombinedRefs } from '@zendeskgarden/container-utilities';
import { MediaInput } from '@zendeskgarden/react-forms';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';

interface IComboboxProps extends ComponentPropsWithoutRef<'div'> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Indicates that the element's menu is open */
  isOpen?: boolean;
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Defines the element's validation state */
  validation?: VALIDATION;
  /** Provides ref access to the underlying input element */
  inputRef?: React.Ref<HTMLInputElement>;
  /** Defines the icon rendered in the start position */
  start?: any;
  /** Defines the icon rendered in the end position */
  end?: any;
}

const Combobox = React.forwardRef<HTMLDivElement, IComboboxProps>(
  (
    {
      isCompact,
      isBare,
      disabled,
      focusInset,
      placeholder,
      validation,
      inputRef: inputRefProp,
      start,
      end,
      ...props
    },
    ref
  ) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, getRootProps, isOpen }
    } = useDropdownContext();
    const wrapperRef = useCombinedRefs<HTMLDivElement>(ref);
    const inputRef = useCombinedRefs<HTMLInputElement>(inputRefProp);
    const wrapperProps = getToggleButtonProps(
      getRootProps({
        role: null, // apply role to input for Safari screenreader support
        type: null, // prevent button type from being added to wrapper div
        onClick: (event: MouseEvent) => {
          (event as any).nativeEvent.preventDownshiftDefault = true;
        },
        ...props
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
        if (!isOpen && (event.keyCode === KEY_CODES.DOWN || event.keyCode === KEY_CODES.UP)) {
          (event.nativeEvent as any).preventDownshiftDefault = true;
        }
      },
      onClick: (event: MouseEvent) => {
        (event as any).nativeEvent.preventDownshiftDefault = true;
      }
    });

    return (
      <Reference>
        {({ ref: popperReference }) => {
          const wrapperRefProp = (element: HTMLDivElement) => {
            // Pass ref to Popper for positioning
            (popperReference as any)(element);

            // Store ref locally to return focus on close
            (wrapperRef as any).current = element;

            // Apply wrapper to global Dropdown context
            popperReferenceElementRef.current = element;
          };

          return (
            <MediaInput
              {...inputProps}
              wrapperProps={wrapperProps}
              wrapperRef={wrapperRefProp}
              ref={inputRef}
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
  isOpen: PropTypes.bool,
  placeholder: PropTypes.string,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export default Combobox as React.FC<IComboboxProps & React.RefAttributes<HTMLDivElement>>;
