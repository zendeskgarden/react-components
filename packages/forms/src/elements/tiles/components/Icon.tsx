/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { useTilesContext } from '../../../utils/useTilesContext';
import { StyledTileIcon } from '../../../styled';

/**
 * Accepts all `<span>` attributes
 */
export const Icon = React.forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const tileContext = useTilesContext();

    return (
      <StyledTileIcon ref={ref} isCentered={tileContext && tileContext.isCentered} {...props} />
    );
  }
);

Icon.displayName = 'TileIcon';
