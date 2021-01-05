/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledButtonGroup } from '../styled';
import { SplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const SplitButton: React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...other
}) => (
  <SplitButtonContext.Provider value>
    <StyledButtonGroup {...other}>{children}</StyledButtonGroup>
  </SplitButtonContext.Provider>
);

export default SplitButton;
