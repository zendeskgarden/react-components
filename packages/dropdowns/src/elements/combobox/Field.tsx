/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, LabelHTMLAttributes, forwardRef, useMemo, useState } from 'react';
import { FieldContext } from '../../context/useFieldContext';
import { StyledField } from '../../views';
import { Hint } from './Hint';
import { Label } from './Label';
import { Message } from './Message';

const FieldComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const [labelProps, setLabelProps] = useState<LabelHTMLAttributes<HTMLLabelElement> | undefined>(
    undefined
  );
  const [hintProps, setHintProps] = useState<HTMLAttributes<HTMLDivElement> | undefined>(undefined);
  const [messageProps, setMessageProps] = useState<HTMLAttributes<HTMLDivElement> | undefined>(
    undefined
  );
  const [hasHint, setHasHint] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const contextValue = useMemo(
    () => ({
      labelProps,
      setLabelProps,
      hasHint,
      setHasHint,
      hintProps,
      setHintProps,
      hasMessage,
      setHasMessage,
      messageProps,
      setMessageProps
    }),
    [
      labelProps,
      setLabelProps,
      hasHint,
      setHasHint,
      hintProps,
      setHintProps,
      hasMessage,
      setHasMessage,
      messageProps,
      setMessageProps
    ]
  );

  return (
    <FieldContext.Provider value={contextValue}>
      <StyledField {...props} ref={ref} />
    </FieldContext.Provider>
  );
});

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
