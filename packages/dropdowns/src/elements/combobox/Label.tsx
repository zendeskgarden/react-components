/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useFieldContext from '../../context/useFieldContext';
import { ILabelProps } from '../../types';
import { StyledLabel } from '../../views';

/**
 * @deprecated use `Field.Label` instead
 *
 * @extends LabelHTMLAttributes<HTMLLabelElement>
 */
export const Label = forwardRef<HTMLLabelElement, ILabelProps>(
  ({ onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const { labelProps } = useFieldContext();

    return (
      <StyledLabel
        {...labelProps}
        onClick={composeEventHandlers(onClick, labelProps?.onClick)}
        onMouseEnter={composeEventHandlers(onMouseEnter, labelProps?.onMouseEnter)}
        onMouseLeave={composeEventHandlers(onMouseLeave, labelProps?.onMouseLeave)}
        {...props}
        ref={ref}
      />
    );
  }
);

Label.displayName = 'Label';

Label.propTypes = {
  hidden: PropTypes.bool,
  isRegular: PropTypes.bool
};
