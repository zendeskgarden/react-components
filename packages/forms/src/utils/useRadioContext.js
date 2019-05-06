/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { RadioContext } from '../fields/Radio';

/**
 * Retrieve Radio component context
 */
const useRadioContext = () => {
  return useContext(RadioContext);
};

export default useRadioContext;
