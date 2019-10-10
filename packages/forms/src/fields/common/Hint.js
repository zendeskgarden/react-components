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
import { StyledHint, StyledCheckHint, StyledToggleHint } from '../../styled';

/**
 * Accepts all `<div>` props.
 */
function Hint(props) {
  const { getHintProps } = useFieldContext();
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let HintComponent;

  if (checkboxCtx || radioCtx) {
    HintComponent = StyledCheckHint;
  } else if (toggleCtx) {
    HintComponent = StyledToggleHint;
  } else {
    HintComponent = StyledHint;
  }

  return React.createElement(HintComponent, getHintProps(props));
}

Hint.propTypes = {
  /** Applies "small" spacing. Only available with `Input` and `Textarea` components. */
  small: PropTypes.bool
};

export default Hint;
