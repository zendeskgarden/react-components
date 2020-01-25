/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';
import { StyledLabel } from '../../styled';

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  isRegular?: boolean;
  isCompact?: boolean;
}

/**
 * Accepts all `<label>` props. Must be nested with a `<Field>` component.
 */
const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
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

    return <StyledLabel ref={ref} {...labelProps} />;
  }
) as React.FunctionComponent<ILabelProps>;

Label.propTypes = {
  isRegular: PropTypes.bool,
  isCompact: PropTypes.bool
};

export default Label;
