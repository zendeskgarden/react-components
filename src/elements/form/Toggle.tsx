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
import { IToggleProps } from '../../types/elements';
import { StyledToggleInput } from '../../views/form/StyledToggleInput';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Toggle = forwardRef<HTMLInputElement, IToggleProps>(
  ({ children, isCompact, ...other }, ref) => {
    const fieldsetContext = useFieldsetContext();
    const fieldContext = useFieldContext();

    let combinedProps = {
      $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
      ref,
      ...other,
      role: 'switch'
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <InputProvider value="toggle">
        <StyledToggleInput
          {...combinedProps}
          data-garden-id={COMPONENT_IDS['forms.toggle']}
          data-garden-version={PACKAGE_VERSION}
        />
        {children}
      </InputProvider>
    );
  }
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  isCompact: PropTypes.bool
};
