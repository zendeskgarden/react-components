/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledTileDescription } from '../../../styled';
import { useTilesContext } from '../../../utils/useTilesContext';

/**
 * Accepts all `<span>` attributes
 */
export const Description = React.forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const tilesContext = useTilesContext();

    return (
      <StyledTileDescription
        ref={ref}
        isCentered={tilesContext && tilesContext.isCentered}
        {...props}
      />
    );
  }
);

Description.displayName = 'TileDescription';
