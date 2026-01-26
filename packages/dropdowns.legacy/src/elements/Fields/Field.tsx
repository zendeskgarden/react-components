/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Field as FormField } from '@zendeskgarden/react-forms';
import React, { useState, HTMLAttributes, useMemo, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import useDropdownContext from '../../utils/useDropdownContext';
import { FieldContext } from '../../utils/useFieldContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, fieldRef) => {
    const {
      downshift: { getRootProps }
    } = useDropdownContext();
    const [isLabelHovered, setIsLabelHovered] = useState<boolean>(false);

    /**
     * Only apply `rootRef` to allow correct screen-reader navigation in Safari
     */
    const { ref } = getRootProps();

    const value = useMemo(
      () => ({ isLabelHovered, setIsLabelHovered }),
      [isLabelHovered, setIsLabelHovered]
    );

    return (
      <FieldContext.Provider value={value}>
        <FormField ref={mergeRefs([ref, fieldRef])} {...props} />
      </FieldContext.Provider>
    );
  }
);

Field.displayName = 'Field';
