/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getControlledValue } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { ChangeEventHandler, useCallback, useState, useMemo, forwardRef } from 'react';

import { TilesProvider } from '../../context/form/TilesContext';
import { ITilesProps } from '../../types/elements';
import { Description } from './Description';
import { Icon } from './Icon';
import { Tile } from './Tile';
import { Label } from './TilesLabel';

const TilesComponent = forwardRef<HTMLDivElement, ITilesProps>(
  ({ onChange, value: controlledValue, name, isCentered = true, ...props }, ref) => {
    const [value, setValue] = useState(controlledValue);

    const handleOnChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (...args) => {
        setValue(args[0].target.value);

        if (onChange) {
          onChange(...args);
        }
      },
      [onChange]
    );

    const selectedValue = getControlledValue(controlledValue, value);
    const tileContext = useMemo(
      () => ({ onChange: handleOnChange, value: selectedValue, name, isCentered }),
      [handleOnChange, selectedValue, name, isCentered]
    );

    return (
      <TilesProvider value={tileContext}>
        <div ref={ref} role="radiogroup" {...props} />
      </TilesProvider>
    );
  }
);

TilesComponent.displayName = 'Tiles';

TilesComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  isCentered: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tiles = TilesComponent as typeof TilesComponent & {
  Description: typeof Description;
  Icon: typeof Icon;
  Label: typeof Label;
  Tile: typeof Tile;
};

Tiles.Description = Description;
Tiles.Icon = Icon;
Tiles.Label = Label;
Tiles.Tile = Tile;
