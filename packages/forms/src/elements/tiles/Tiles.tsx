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
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import PropTypes from 'prop-types';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { TilesContext } from '../../utils/useTilesContext';
import { Tile } from './components/Tile';
import { Description } from './components/Description';
import { Icon } from './components/Icon';
import { Label } from './components/Label';

interface ITilesProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the value for the selected radio button */
  value?: string;
  /**
   * Handles radio selection changes
   *
   * @returns {ChangeEventHandler<HTMLInputElement>} The element invoking the change
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Sets the name used for the control's value reference */
  name: string;
  /** Displays the tiles vertically */
  isCentered?: boolean;
}

interface IStaticTilesExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  /** Sets the tile type */
  Tile: typeof Tile;
  /** Sets the description */
  Description: typeof Description;
  /** Sets the icon */
  Icon: typeof Icon;
  /** Sets the label */
  Label: typeof Label;
}

/* eslint-disable react/display-name */
/**
 * Accepts all `<div>` attributes
 */
export const Tiles = React.forwardRef<HTMLDivElement, ITilesProps>(
  ({ onChange, value: controlledValue, isCentered, ...props }, ref) => {
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
    const tileContext = { onChange: handleOnChange, value: selectedValue, name, isCentered };

    return (
      <TilesContext.Provider value={tileContext}>
        <div ref={ref} role="radiogroup" {...props} />
      </TilesContext.Provider>
    );
  }
) as IStaticTilesExport<HTMLDivElement, ITilesProps>;
/* eslint-enable react/display-name */

Tiles.displayName = 'Tiles';

Tiles.Tile = Tile;
Tiles.Icon = Icon;
Tiles.Label = Label;
Tiles.Description = Description;

Tiles.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  isCentered: PropTypes.bool
};

Tiles.defaultProps = {
  isCentered: true
};
