/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const FieldContext = React__default.createContext(undefined);
const useFieldContext = () => {
  const fieldContext = useContext(FieldContext);
  if (!fieldContext) {
    throw new Error('This component must be rendered within a `Field` component.');
  }
  return fieldContext;
};

export { FieldContext, useFieldContext as default };
