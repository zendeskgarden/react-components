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
  const sharedProps = {
    'data-garden-version': PACKAGE_VERSION
  };

  if (checkboxCtx) {
    LabelComponent = StyledCheckLabel;
    sharedProps['data-garden-id'] = 'forms.checkbox_label';
    sharedProps.focused = checkboxCtx.isFocused;
  } else if (radioCtx) {
    LabelComponent = StyledRadioLabel;
    sharedProps['data-garden-id'] = 'forms.radio_label';
    sharedProps.focused = radioCtx.isFocused;
  } else if (toggleCtx) {
    LabelComponent = StyledToggleLabel;
    sharedProps['data-garden-id'] = 'forms.toggle_label';
    sharedProps.focused = toggleCtx.isFocused;
  }

  return React.createElement(
    LabelComponent,
    getLabelProps({
      ...sharedProps,
      ...props
    })
  );
}

Label.propTypes = {
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  regular: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  checked: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  hidden: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  indeterminate: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  hovered: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  focused: PropTypes.bool,
  /** Applied when used with the `Radio`, `Toggle`, and `Checkbox` components. */
  disabled: PropTypes.bool
};

export default Label;
