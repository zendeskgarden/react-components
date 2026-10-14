/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

interface IFieldsetContext {
  isCompact?: boolean;
}

export const FieldsetContext = createContext<IFieldsetContext | undefined>(undefined);

/**
 * Retrieve Fieldset component context
 */
const useFieldsetContext = () => {
  const fieldsetContext = useContext(FieldsetContext);

  return fieldsetContext;
};

export default useFieldsetContext;
