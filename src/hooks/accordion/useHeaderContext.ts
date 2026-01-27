/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { HeaderContext } from '../../context/accordion/HeaderContext';

export const useHeaderContext = () => {
  const retVal = useContext(HeaderContext);

  if (retVal === undefined) {
    throw new Error('this component must be rendered within an <Accordion.Header>.');
  }

  return retVal;
};
