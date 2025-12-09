/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { createContext, useContext } from 'react';

const DropzoneContext = createContext(undefined);
const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Dropzone component');
  }
  return context;
};

export { DropzoneContext, useDropzoneContext };
