/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useTilesContext } from '../../hooks/form/useTilesContext';
import { StyledTileIcon } from '../../views/form/StyledTileIcon';
import { COMPONENT_IDS } from '../utils';

const IconComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => {
  const tileContext = useTilesContext();

  return (
    <StyledTileIcon
      ref={ref}
      $isCentered={tileContext?.isCentered}
      {...props}
      data-garden-id={COMPONENT_IDS['forms.tile_icon']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

IconComponent.displayName = 'Tiles.Icon';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Icon = IconComponent;
