/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, HTMLAttributes, useMemo } from 'react';
import { useField } from '@zendeskgarden/container-field';
import { FieldContext } from '../../utils/useFieldContext';
import { StyledField } from '../../styled';

/**
 * @deprecated
 */
export interface IFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the field ID and the prefix for the generated label, input, and hint IDs */
  id?: string;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const [hasHint, setHasHint] = useState(false);
    const [isLabelActive, setIsLabelActive] = useState(false);
    const [isLabelHovered, setIsLabelHovered] = useState(false);
    const multiThumbRangeRef = useRef<HTMLDivElement>(null);
    const getMessageProps = (messageProps: any) => ({ role: 'alert', ...messageProps });
    const { getInputProps, ...propGetters } = useField(props.id);
    const fieldProps = useMemo(
      () => ({
        ...propGetters,
        getMessageProps,
        isLabelActive,
        setIsLabelActive,
        isLabelHovered,
        setIsLabelHovered,
        multiThumbRangeRef,
        getInputProps: (...args: any[]) => {
          const { 'aria-describedby': describedBy, ...inputProps } = getInputProps(...args);
          const newProps = inputProps;

          if (hasHint) newProps['aria-describedby'] = describedBy;

          return newProps;
        },
        setHint: (hintPresent: boolean) => setHasHint(hintPresent || false)
      }),
      [propGetters, isLabelActive, isLabelHovered, hasHint, getInputProps]
    );

    return (
      <FieldContext.Provider value={fieldProps}>
        <StyledField {...props} ref={ref} />
      </FieldContext.Provider>
    );
  }
);

Field.displayName = 'Field';
