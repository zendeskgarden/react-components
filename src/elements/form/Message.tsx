/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useEffect, forwardRef } from 'react';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useInputContext } from '../../hooks/form/useInputContext';
import { useText } from '../../theming/utils/useText';
import { IMessageProps, VALIDATION } from '../../types/elements';
import { StyledCheckMessage } from '../../views/form/StyledCheckMessage';
import { StyledMessage } from '../../views/form/StyledMessage';
import { StyledRadioMessage } from '../../views/form/StyledRadioMessage';
import { StyledToggleMessage } from '../../views/form/StyledToggleMessage';
import { COMPONENT_IDS } from '../utils';
import { MessageIcon } from './MessageIcon';

/**
 * @deprecated use `Field.Message` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = forwardRef<HTMLDivElement, IMessageProps>(
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
    let id;

    if (type === 'checkbox') {
      MessageComponent = StyledCheckMessage;
      id = COMPONENT_IDS['forms.checkbox_message'];
    } else if (type === 'radio') {
      MessageComponent = StyledRadioMessage;
      id = COMPONENT_IDS['forms.radio_message'];
    } else if (type === 'toggle') {
      MessageComponent = StyledToggleMessage;
      id = COMPONENT_IDS['forms.toggle_message'];
    } else {
      MessageComponent = StyledMessage;
      id = COMPONENT_IDS['forms.input_message'];
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
      <MessageComponent
        ref={ref}
        {...combinedProps}
        data-garden-id={id}
        data-garden-version={PACKAGE_VERSION}
      >
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
