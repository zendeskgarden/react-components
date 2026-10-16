/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useField } from '@zendeskgarden/container-field';
import { useState, HTMLAttributes, useMemo, forwardRef } from 'react';

import { FieldProvider } from '../../context/form/FieldContext';
import { StyledField } from '../../views/form/StyledField';
import { COMPONENT_IDS } from '../utils';
import { Hint } from './Hint';
import { Label } from './Label';
import { Message } from './Message';

export const FieldComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const [hasHint, setHasHint] = useState(false);
    const [hasMessage, setHasMessage] = useState(false);
    const [hasLabel, setHasLabel] = useState(false);
    const [isLabelActive, setIsLabelActive] = useState(false);
    const [isLabelHovered, setIsLabelHovered] = useState(false);
    const { getInputProps, getMessageProps, ...propGetters } = useField({
      idPrefix: props.id,
      hasHint,
      hasMessage
    });
    const fieldProps = useMemo(
      () => ({
        ...propGetters,
        getInputProps,
        getMessageProps,
        isLabelActive,
        setIsLabelActive,
        isLabelHovered,
        setIsLabelHovered,
        hasHint,
        setHasHint,
        hasMessage,
        setHasMessage,
        hasLabel,
        setHasLabel
      }),
      [
        propGetters,
        getInputProps,
        getMessageProps,
        isLabelActive,
        isLabelHovered,
        hasHint,
        hasMessage,
        hasLabel
      ]
    );

    return (
      <FieldProvider value={fieldProps}>
        <StyledField
          {...props}
          data-garden-id={COMPONENT_IDS['forms.field']}
          data-garden-version={PACKAGE_VERSION}
          ref={ref}
        />
      </FieldProvider>
    );
  }
);

FieldComponent.displayName = 'Field';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = FieldComponent as typeof FieldComponent & {
  Hint: typeof Hint;
  Label: typeof Label;
  Message: typeof Message;
};

Field.Hint = Hint;
Field.Label = Label;
Field.Message = Message;
