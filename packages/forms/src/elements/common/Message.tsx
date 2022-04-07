/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IMessageProps, VALIDATION } from '../../types';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import {
  StyledMessage,
  StyledCheckMessage,
  StyledRadioMessage,
  StyledToggleMessage,
  StyledMessageIcon
} from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = React.forwardRef<HTMLDivElement, IMessageProps>(
  ({ validation, children, ...props }, ref) => {
    const fieldContext = useFieldContext();
    const type = useInputContext();

    let MessageComponent;

    if (type === 'checkbox') {
      MessageComponent = StyledCheckMessage;
    } else if (type === 'radio') {
      MessageComponent = StyledRadioMessage;
    } else if (type === 'toggle') {
      MessageComponent = StyledToggleMessage;
    } else {
      MessageComponent = StyledMessage;
    }

    let combinedProps = { validation, ...props };

    if (fieldContext) {
      combinedProps = fieldContext.getMessageProps(combinedProps);
    }

    return (
      <MessageComponent ref={ref} {...combinedProps}>
        {validation && <StyledMessageIcon validation={validation} />}
        {children}
      </MessageComponent>
    );
  }
);

Message.displayName = 'Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION)
};
