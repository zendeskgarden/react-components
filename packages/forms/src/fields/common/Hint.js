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
import { StyledHint, StyledCheckHint, StyledRadioHint, StyledToggleHint } from '../../styled';

/**
 * Accepts all `<div>` props.
 */
function Hint(props) {
  const { getHintProps } = useFieldContext();
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let HintComponent = StyledHint;
  const commonProps = {
    'data-garden-version': PACKAGE_VERSION
  };

  if (checkboxCtx) {
    HintComponent = StyledCheckHint;
  } else if (radioCtx) {
    HintComponent = StyledRadioHint;
    commonProps['data-garden-id'] = 'forms.radio_hint';
  } else if (toggleCtx) {
    HintComponent = StyledToggleHint;
    commonProps['data-garden-id'] = 'forms.toggle_hint';
  }

  return React.createElement(
    HintComponent,
    getHintProps({
      ...commonProps,
      ...props
    })
  );
}

Hint.propTypes = {
  /** Applies "small" spacing. Only available with `Input` and `Textarea` components. */
  small: PropTypes.bool
};

export default Hint;
