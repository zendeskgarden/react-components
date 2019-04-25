/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/react-selection';
import useDropdownContext from '../utils/useDropdownContext';
import useFieldContext from '../utils/useFieldContext';
import { StyledLabel } from '../styled';

/**
 * Accepts all `<label>` props. Must be nested with a `<Field>` component.
 */
function Label({ onMouseEnter, onMouseLeave, ...other }) {
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

  return <StyledLabel {...labelProps} />;
}

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

export default Label;
