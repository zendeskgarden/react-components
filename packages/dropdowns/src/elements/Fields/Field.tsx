/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes } from 'react';
import { Field as FormField } from '@zendeskgarden/react-forms';
import useDropdownContext from '../../utils/useDropdownContext';
import { FieldContext } from '../../utils/useFieldContext';

/**
 * Accepts all `<div>` props
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

  return (
    <FieldContext.Provider value={{ isLabelHovered, setIsLabelHovered }}>
      <FormField ref={ref} {...props} />
    </FieldContext.Provider>
  );
};
