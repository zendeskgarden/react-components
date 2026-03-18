/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

export interface IFieldContext {
  isLabelHovered: boolean;
  setIsLabelHovered: (isHovered: boolean) => void;
}

export const FieldContext = React.createContext<IFieldContext | undefined>(undefined);

/**
 * Retrieve Field component context
 */
const useFieldContext = () => {
  const fieldContext = useContext(FieldContext);

  if (!fieldContext) {
    throw new Error('This component must be rendered within a `Field` component.');
  }

  return fieldContext;
};

export default useFieldContext;
