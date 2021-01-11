/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledMediaFigure } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * @extends HTMLAttributes<any>
 */
export const MediaFigure: React.FC<HTMLAttributes<any>> = props => {
  const { isCompact } = useMenuContext();

  return <StyledMediaFigure isCompact={isCompact} {...props} />;
};
