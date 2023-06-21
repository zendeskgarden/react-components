/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ITilesTileProps } from '../../../types';
import { useTilesContext } from '../../../utils/useTilesContext';
import { StyledTile, StyledTileInput } from '../../../styled';

const TileComponent = React.forwardRef<HTMLLabelElement, ITilesTileProps>(
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
        isDisabled={disabled}
        isSelected={tilesContext && tilesContext.value === value}
        {...props}
      >
        {children}
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
