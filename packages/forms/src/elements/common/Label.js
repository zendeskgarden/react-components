/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import { StyledLabel, StyledCheckLabel, StyledRadioLabel, StyledToggleLabel } from '../../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all `<label>` attributes
 * and events.
 */
const Label = React.forwardRef((props, ref) => {
  const { getLabelProps } = useFieldContext();
  const type = useInputContext();

  let LabelComponent;

  if (type === 'checkbox') {
    LabelComponent = StyledCheckLabel;
  } else if (type === 'radio') {
    LabelComponent = StyledRadioLabel;
  } else if (type === 'toggle') {
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
