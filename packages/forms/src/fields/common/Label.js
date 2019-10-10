/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../../utils/useFieldContext';
import useCheckboxContext from '../../utils/useCheckboxContext';
import useRadioContext from '../../utils/useRadioContext';
import useToggleContext from '../../utils/useToggleContext';
import { StyledLabel, StyledCheckLabel, StyledRadioLabel, StyledToggleLabel } from '../../styled';

/**
 * Accepts all `<label>` props.
 */
function Label(props) {
  const { getLabelProps } = useFieldContext();
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let LabelComponent = StyledLabel;
  let focused;

  if (checkboxCtx) {
    LabelComponent = StyledCheckLabel;
    focused = checkboxCtx.isFocused;
  } else if (radioCtx) {
    LabelComponent = StyledCheckLabel;
    focused = radioCtx.isFocused;
  } else if (toggleCtx) {
    LabelComponent = StyledToggleLabel;
    focused = toggleCtx.isFocused;
  }

  return React.createElement(
    LabelComponent,
    getLabelProps({
      focused,
      ...props
    })
  );
}

Label.propTypes = {
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  regular: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  hidden: PropTypes.bool
};

export default Label;
