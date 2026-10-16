/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';

import { useFieldContext } from '../../hooks/dropdown/useFieldContext';
import { useText } from '../../theming/utils/useText';
import { IComboboxMessageProps, VALIDATION } from '../../types/elements';
import { StyledMessage } from '../../views/dropdown/StyledMessage';
import { MessageIcon } from '../form/MessageIcon';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Field.Message` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = forwardRef<HTMLDivElement, IComboboxMessageProps>(
  ({ validation, validationLabel, children, ...props }, ref) => {
    const { messageProps, setHasMessage } = useFieldContext();

    useEffect(() => {
      setHasMessage(true);

      return () => setHasMessage(false);
    }, [setHasMessage]);

    const combinedProps = {
      $validation: validation,
      $validationLabel: validationLabel,
      ...messageProps,
      ...props
    };
    const ariaLabel = useText(
      Message,
      combinedProps,
      '$validationLabel',
      validation as string,
      validation !== undefined
    );

    return (
      <StyledMessage
        {...combinedProps}
        data-garden-id={COMPONENT_IDS['dropdowns.combobox.message']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        {!!validation && <MessageIcon validation={validation} aria-label={ariaLabel} />}
        {children}
      </StyledMessage>
    );
  }
);

Message.displayName = 'Field.Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
