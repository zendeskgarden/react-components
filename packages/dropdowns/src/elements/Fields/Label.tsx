/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { Label as FormLabel } from '@zendeskgarden/react-forms';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  /** Applies regular styling to the label */
  isRegular?: boolean;
}

/**
 * Accepts all `<label>` props. Must be nested with a `<Field>` component.
 */
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  ({ onMouseEnter, onMouseLeave, ...other }, ref) => {
    const {
      downshift: { getLabelProps }
    } = useDropdownContext();
    const { setIsLabelHovered } = useFieldContext();

    const labelProps = getLabelProps({
      onMouseEnter: composeEventHandlers(onMouseEnter, () => {
        setIsLabelHovered(true);
      }),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => {
        setIsLabelHovered(false);
      }),
      ...other
    });

    return <FormLabel ref={ref} {...labelProps} />;
  }
);

Label.displayName = 'Label';

Label.propTypes = {
  isRegular: PropTypes.bool
};
