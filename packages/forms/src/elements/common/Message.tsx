/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';

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
  ({ validation, validationLabel, children, ...props }, ref) => {
    const { hasMessage, setHasMessage, getMessageProps } = useFieldContext() || {};
    const type = useInputContext();

    useEffect(() => {
      if (!hasMessage && setHasMessage) {
        setHasMessage(true);
      }

      return () => {
        if (hasMessage && setHasMessage) {
          setHasMessage(false);
        }
      };
    }, [hasMessage, setHasMessage]);

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

    let combinedProps = { validation, validationLabel, ...props };

    if (getMessageProps) {
      combinedProps = getMessageProps(combinedProps);
    }

    const ariaLabel = useText(Message, combinedProps, 'validationLabel', validation as string);

    return (
      <MessageComponent ref={ref} {...combinedProps}>
        {validation && <StyledMessageIcon validation={validation} aria-label={ariaLabel} />}
        {children}
      </MessageComponent>
    );
  }
);

Message.displayName = 'Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
