/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import useFieldContext from '../../utils/useFieldContext';
import useCheckboxContext from '../../utils/useCheckboxContext';
import useRadioContext from '../../utils/useRadioContext';
import useToggleContext from '../../utils/useToggleContext';
import { StyledHint, StyledCheckHint, StyledRadioHint, StyledToggleHint } from '../../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all `<div>` attributes
 * and events.
 */
const Hint = React.forwardRef((props, ref) => {
  const { getHintProps } = useFieldContext();
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let HintComponent;

  if (checkboxCtx) {
    HintComponent = StyledCheckHint;
  } else if (radioCtx) {
    HintComponent = StyledRadioHint;
  } else if (toggleCtx) {
    HintComponent = StyledToggleHint;
  } else {
    HintComponent = StyledHint;
  }

  return <HintComponent ref={ref} {...getHintProps(props)} />;
});

export default Hint;
