/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useTilesContext } from '../../hooks/form/useTilesContext';
import { StyledTileDescription } from '../../views/form/StyledTileDescription';
import { COMPONENT_IDS } from '../utils';

const DescriptionComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const tilesContext = useTilesContext();

    return (
      <StyledTileDescription
        ref={ref}
        $isCentered={tilesContext?.isCentered}
        {...props}
        data-garden-id={COMPONENT_IDS['forms.tile_description']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

DescriptionComponent.displayName = 'Tiles.Description';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Description = DescriptionComponent;
