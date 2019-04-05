/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { MultiselectContext } from '../Multiselect/Multiselect';

const useMultiselectContext = () => {
  const multiSelectContext = useContext(MultiselectContext);

  if (!multiSelectContext) {
    throw new Error('This component must be rendered within a `Multiselect` component.');
  }

  return multiSelectContext;
};

export default useMultiselectContext;
