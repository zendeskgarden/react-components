/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTilesContext } from '../../../utils/useTilesContext';
import { StyledTile, StyledTileInput } from '../../../styled';

interface ITileProps {
  /** Sets the value of the input */
  value?: string;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
}

/**
 * Accepts all `<label>` attributes
 */
export const Tile = React.forwardRef<
  HTMLLabelElement,
  ITileProps & HTMLAttributes<HTMLLabelElement>
>(({ children, value, disabled, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
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
      isFocused={isFocused}
      data-test-is-focused={isFocused}
      isSelected={tilesContext && tilesContext.value === value}
      {...props}
    >
      {children}
      <StyledTileInput
        {...inputProps}
        disabled={disabled}
        value={value}
        onBlur={() => setIsFocused(false)}
        onFocus={e => {
          e.persist();

          /**
           * The focus-visible attribute provided by `react-theming` is
           * unable to persist to the `<label>`. This manually applies focus
           * after the data attribute has been set.
           */
          setTimeout(() => {
            if (e.target.getAttribute('data-garden-focus-visible')) {
              setIsFocused(true);
            }
          }, 1);
        }}
        type="radio"
        ref={inputRef}
      />
    </StyledTile>
  );
});

Tile.displayName = 'Tile';

Tile.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};
