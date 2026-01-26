/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledTileDescription } from '../../../styled';
import { useTilesContext } from '../../../utils/useTilesContext';

const DescriptionComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const tilesContext = useTilesContext();

    return <StyledTileDescription ref={ref} $isCentered={tilesContext?.isCentered} {...props} />;
  }
);

DescriptionComponent.displayName = 'Tiles.Description';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Description = DescriptionComponent;
