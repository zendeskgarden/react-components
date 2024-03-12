/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef, useEffect } from 'react';
import useFieldContext from '../../context/useFieldContext';
import { StyledHint } from '../../views';

/**
 * @deprecated use `Field.Hint` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Hint = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { hintProps, setHasHint } = useFieldContext();

  useEffect(() => {
    setHasHint(true);

    return () => setHasHint(false);
  }, [setHasHint]);

  return <StyledHint {...hintProps} {...props} ref={ref} />;
});

Hint.displayName = 'Hint';
