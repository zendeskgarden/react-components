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
 * Must be rendered within a `<Field>` element; accepts all `<label>` attributes
 * and events.
 */
const Label = React.forwardRef((props, ref) => {
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

  return <LabelComponent ref={ref} {...getLabelProps(props)} />;
});

Label.propTypes = {
  /** Style using regular (non-bold) font weight */
  isRegular: PropTypes.bool
};

export default Label;
