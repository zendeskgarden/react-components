/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { InputProvider } from '../../context/form/InputContext';
import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useFieldsetContext } from '../../hooks/form/useFieldsetContext';
import { IRadioProps } from '../../types/elements';
import { StyledRadioInput } from '../../views/form/StyledRadioInput';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  ({ children, isCompact, ...other }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    let combinedProps = {
      $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
      ref,
      ...other
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputProvider value="radio">
        <StyledRadioInput
          {...combinedProps}
          data-garden-id={COMPONENT_IDS['forms.radio']}
          data-garden-version={PACKAGE_VERSION}
          type="radio"
        />
        {children}
      </InputProvider>
    );
  }
);

Radio.displayName = 'Radio';

Radio.propTypes = {
  isCompact: PropTypes.bool
};
