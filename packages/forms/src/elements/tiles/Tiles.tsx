/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  ChangeEventHandler,
  useCallback,
  useState,
  useMemo,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { TilesContext } from '../../utils/useTilesContext';
import { Tile } from './components/Tile';
import { Description } from './components/Description';
import { Icon } from './components/Icon';
import { Label } from './components/Label';

export interface ITilesProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the value of the selected radio button */
  value?: string;
  /** Handles radio selection */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Sets the name used to reference the value of the control */
  name: string;
  /** Centers tile content */
  isCentered?: boolean;
}

const TilesComponent = forwardRef<HTMLDivElement, ITilesProps>(
  ({ onChange, value: controlledValue, name, isCentered, ...props }, ref) => {
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
      <TilesContext.Provider value={tileContext}>
        <div ref={ref} role="radiogroup" {...props} />
      </TilesContext.Provider>
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

TilesComponent.defaultProps = {
  isCentered: true
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
