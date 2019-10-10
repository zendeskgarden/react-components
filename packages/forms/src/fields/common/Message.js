/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useCheckboxContext from '../../utils/useCheckboxContext';
import useRadioContext from '../../utils/useRadioContext';
import useToggleContext from '../../utils/useToggleContext';
import {
  StyledMessage,
  StyledCheckMessage,
  StyledToggleMessage,
  StyledMessageIcon
} from '../../styled';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all native `<div />` props
 */
function Message(props) {
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let MessageComponent;

  if (checkboxCtx || radioCtx) {
    MessageComponent = StyledCheckMessage;
  } else if (toggleCtx) {
    MessageComponent = StyledToggleMessage;
  } else {
    MessageComponent = StyledMessage;
  }

  return (
    <MessageComponent {...props}>
      {props.validation && <StyledMessageIcon validation={props.validation} />}
      {props.children}
    </MessageComponent>
  );
}

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Message;
