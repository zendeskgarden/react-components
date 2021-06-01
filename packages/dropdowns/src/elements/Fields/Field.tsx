/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useMemo } from 'react';
import { Field as FormField } from '@zendeskgarden/react-forms';
import useDropdownContext from '../../utils/useDropdownContext';
import { FieldContext } from '../../utils/useFieldContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Field: React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = props => {
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
      <FormField ref={ref} {...props} />
    </FieldContext.Provider>
  );
};
