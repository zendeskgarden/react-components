/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const FieldContext = createContext(undefined);
const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Field>.');
  }
  return context;
};

export { FieldContext, useFieldContext as default };
