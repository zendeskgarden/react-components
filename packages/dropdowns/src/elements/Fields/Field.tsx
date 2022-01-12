/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useMemo, forwardRef } from 'react';
import { Field as FormField } from '@zendeskgarden/react-forms';
import { FieldContext } from '../../utils/useFieldContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const [isLabelHovered, setIsLabelHovered] = useState<boolean>(false);

  const value = useMemo(
    () => ({ isLabelHovered, setIsLabelHovered }),
    [isLabelHovered, setIsLabelHovered]
  );

  return (
    <FieldContext.Provider value={value}>
      <FormField ref={ref} {...props} />
    </FieldContext.Provider>
  );
});

Field.displayName = 'Field';
