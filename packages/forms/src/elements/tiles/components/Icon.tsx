/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { useTilesContext } from '../../../utils/useTilesContext';
import { StyledTileIcon } from '../../../styled';

const IconComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => {
  const tileContext = useTilesContext();

  return <StyledTileIcon ref={ref} isCentered={tileContext?.isCentered} {...props} />;
});

IconComponent.displayName = 'Tiles.Icon';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Icon = IconComponent;
