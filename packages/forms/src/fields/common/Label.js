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

  let LabelComponent;

  if (checkboxCtx) {
    LabelComponent = StyledCheckLabel;
  } else if (radioCtx) {
    LabelComponent = StyledRadioLabel;
  } else if (toggleCtx) {
    LabelComponent = StyledToggleLabel;
  } else {
    LabelComponent = StyledLabel;
  }

  return React.createElement(
    LabelComponent,
    getLabelProps({
      ...props
    })
  );
}

Label.propTypes = {
  /* style using regular font weight */
  isRegular: PropTypes.bool
};

export default Label;
