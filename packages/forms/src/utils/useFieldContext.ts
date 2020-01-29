/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { IUseFieldPropGetters } from '@zendeskgarden/container-field';

interface IFieldContext extends IUseFieldPropGetters {
  getMessageProps: (messageProps: any) => any;
}

export const FieldContext = createContext<IFieldContext | undefined>(undefined);

/**
 * Retrieve Field component context
 */
const useFieldContext = () => {
  const fieldContext = useContext(FieldContext);

  if (!fieldContext) {
    throw new Error('This component must be rendered within a `Field` element.');
  }

  return fieldContext;
};

export default useFieldContext;
