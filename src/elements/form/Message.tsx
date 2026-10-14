/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import {
  StyledMessage,
  StyledCheckMessage,
  StyledRadioMessage,
  StyledToggleMessage
} from '../../styled';
import { IMessageProps, VALIDATION } from '../../types';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import { MessageIcon } from './MessageIcon';

/**
 * @deprecated use `Field.Message` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = React.forwardRef<HTMLDivElement, IMessageProps>(
  ({ validation, validationLabel, children, ...other }, ref) => {
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

    let combinedProps = { $validation: validation, $validationLabel: validationLabel, ...other };

    if (getMessageProps) {
      combinedProps = getMessageProps(combinedProps);
    }

    const ariaLabel = useText(
      Message,
      combinedProps,
      '$validationLabel',
      validation as string,
      validation !== undefined
    );

    return (
      <MessageComponent ref={ref} {...combinedProps}>
        {!!validation && <MessageIcon validation={validation} aria-label={ariaLabel} />}
        {children}
      </MessageComponent>
    );
  }
);

Message.displayName = 'Field.Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
