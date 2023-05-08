/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, LabelHTMLAttributes, forwardRef, useMemo, useState } from 'react';
import { FieldContext } from '../../context/useFieldContext';
import { StyledField } from '../../views';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const [labelProps, setLabelProps] = useState<LabelHTMLAttributes<HTMLLabelElement> | undefined>(
    undefined
  );
  const [hasHint, setHasHint] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const contextValue = useMemo(
    () => ({ labelProps, setLabelProps, hasHint, setHasHint, hasMessage, setHasMessage }),
    [labelProps, setLabelProps, hasHint, setHasHint, hasMessage, setHasMessage]
  );

  return (
    <FieldContext.Provider value={contextValue}>
      <StyledField {...props} ref={ref} />
    </FieldContext.Provider>
  );
});

Field.displayName = 'Field';
