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
 * @extends HTMLAttributes<Element>
 */
export const MediaFigure = (props: HTMLAttributes<Element>) => {
  const { isCompact } = useMenuContext();

  return <StyledMediaFigure isCompact={isCompact} {...props} />;
};
