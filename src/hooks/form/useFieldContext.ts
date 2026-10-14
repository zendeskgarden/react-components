/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { FieldContext } from '../../context/form/FieldContext';

/**
 * Retrieve Field component context
 */
export const useFieldContext = () => {
  const fieldContext = useContext(FieldContext);

  return fieldContext;
};
