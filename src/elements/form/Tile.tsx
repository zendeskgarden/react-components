/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useRef, forwardRef } from 'react';

import { useTilesContext } from '../../hooks/form/useTilesContext';
import { ITilesTileProps } from '../../types/elements';
import { StyledTile } from '../../views/form/StyledTile';
import { StyledTileCheck } from '../../views/form/StyledTileCheck';
import { StyledTileInput } from '../../views/form/StyledTileInput';
import { COMPONENT_IDS } from '../utils';

const TileComponent = forwardRef<HTMLLabelElement, ITilesTileProps>(
  ({ children, value, disabled, ...props }, ref) => {
    const tilesContext = useTilesContext();
    const inputRef = useRef<HTMLInputElement>(null);

    let inputProps;

    if (tilesContext) {
      inputProps = {
        name: tilesContext.name,
        checked: tilesContext.value === value,
        onChange: tilesContext.onChange
      };
    }

    return (
      <StyledTile
        ref={ref}
        aria-disabled={disabled}
        $isCentered={tilesContext?.isCentered}
        {...props}
        data-garden-id={COMPONENT_IDS['forms.tile']}
        data-garden-version={PACKAGE_VERSION}
      >
        {children}
        <StyledTileCheck
          aria-hidden="true"
          data-garden-id={COMPONENT_IDS['forms.tile_check']}
          data-garden-version={PACKAGE_VERSION}
        />
        <StyledTileInput
          {...inputProps}
          disabled={disabled}
          value={value}
          type="radio"
          ref={inputRef}
        />
      </StyledTile>
    );
  }
);

TileComponent.displayName = 'Tiles.Tile';

TileComponent.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLLabelElement>
 */
export const Tile = TileComponent;
