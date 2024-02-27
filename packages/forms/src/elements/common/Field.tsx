/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useMemo } from 'react';
import { useField } from '@zendeskgarden/container-field';
import { FieldContext } from '../../utils/useFieldContext';
import { StyledField } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const [hasHint, setHasHint] = useState(false);
    const [hasMessage, setHasMessage] = useState(false);
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
        setHasMessage
      }),
      [
        propGetters,
        getInputProps,
        getMessageProps,
        isLabelActive,
        isLabelHovered,
        hasHint,
        hasMessage
      ]
    );

    return (
      <FieldContext.Provider value={fieldProps}>
        <StyledField {...props} ref={ref} />
      </FieldContext.Provider>
    );
  }
);

Field.displayName = 'Field';
