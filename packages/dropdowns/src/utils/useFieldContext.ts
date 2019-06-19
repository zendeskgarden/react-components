/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { FieldContext } from '../Fields/Field';

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
