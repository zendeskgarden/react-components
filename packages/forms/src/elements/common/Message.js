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
  StyledRadioMessage,
  StyledToggleMessage,
  StyledMessageIcon
} from '../../styled';
import useFieldContext from '../../utils/useFieldContext';
import VALIDATION from '../../utils/validation';

/**
 * Must be rendered within a `<Field>` element; accepts all `<div>` attributes
 * and events.
 */
const Message = React.forwardRef(({ validation, children, ...props }, ref) => {
  const { getMessageProps } = useFieldContext();
  const checkboxCtx = useCheckboxContext();
  const radioCtx = useRadioContext();
  const toggleCtx = useToggleContext();

  let MessageComponent;

  if (checkboxCtx) {
    MessageComponent = StyledCheckMessage;
  } else if (radioCtx) {
    MessageComponent = StyledRadioMessage;
  } else if (toggleCtx) {
    MessageComponent = StyledToggleMessage;
  } else {
    MessageComponent = StyledMessage;
  }

  return (
    <MessageComponent ref={ref} {...getMessageProps({ validation, ...props })}>
      {validation && <StyledMessageIcon validation={validation} />}
      {children}
    </MessageComponent>
  );
});

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Message;
