/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { ForwardRefExoticComponent, RefAttributes, SyntheticEvent, forwardRef } from 'react';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import {
  useInputGroupContext,
  usePublishInputGroupValidation
} from '../../hooks/form/useInputGroupContext';
import { IInputProps, VALIDATION } from '../../types/elements';
import { isInvalid } from '../../utils/form/isInvalid';
import { StyledTextInput } from '../../views/form/StyledTextInput';
import { COMPONENT_IDS } from '../utils';

interface IInputComponentProps extends IInputProps {
  /** Internal: the `data-garden-id` that the input renders. */
  $componentId?: string;
}

export const InputComponent = forwardRef<HTMLInputElement, IInputComponentProps>(
  ({ onSelect, isBare, isCompact, focusInset, validation, $componentId, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const inputGroupContext = useInputGroupContext();
    usePublishInputGroupValidation(validation);
    let combinedProps = other;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps<HTMLInputElement>(combinedProps);
    }

    const onSelectHandler = other.readOnly
      ? composeEventHandlers(onSelect, (event: SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    return (
      <StyledTextInput
        ref={ref}
        onSelect={onSelectHandler}
        {...combinedProps}
        $isBare={isBare === undefined && inputGroupContext?.isUnified ? true : isBare}
        $isCompact={inputGroupContext ? inputGroupContext.isCompact : isCompact}
        $focusInset={inputGroupContext && focusInset === undefined ? true : focusInset}
        $validation={validation}
        aria-invalid={isInvalid(validation)}
        data-garden-id={$componentId ?? COMPONENT_IDS['forms.input']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

InputComponent.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

InputComponent.displayName = 'Input';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Input: ForwardRefExoticComponent<IInputProps & RefAttributes<HTMLInputElement>> =
  InputComponent;
