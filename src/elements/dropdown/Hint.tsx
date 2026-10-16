/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef, useEffect } from 'react';

import { useFieldContext } from '../../hooks/dropdown/useFieldContext';
import { StyledHint } from '../../views/dropdown/StyledHint';
import { COMPONENT_IDS } from '../utils';

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

  return (
    <StyledHint
      {...hintProps}
      {...props}
      data-garden-id={COMPONENT_IDS['dropdowns.combobox.hint']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  );
});

Hint.displayName = 'Field.Hint';
