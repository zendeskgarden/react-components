/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { TilesContext } from '../../utils/useTilesContext.js';
import { Tile } from './components/Tile.js';
import { Description } from './components/Description.js';
import { Icon } from './components/Icon.js';
import { Label } from './components/Label.js';

const TilesComponent = forwardRef((_ref, ref) => {
  let {
    onChange,
    value: controlledValue,
    name,
    isCentered = true,
    ...props
  } = _ref;
  const [value, setValue] = useState(controlledValue);
  const handleOnChange = useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    setValue(args[0].target.value);
    if (onChange) {
      onChange(...args);
    }
  }, [onChange]);
  const selectedValue = getControlledValue(controlledValue, value);
  const tileContext = useMemo(() => ({
    onChange: handleOnChange,
    value: selectedValue,
    name,
    isCentered
  }), [handleOnChange, selectedValue, name, isCentered]);
  return React__default.createElement(TilesContext.Provider, {
    value: tileContext
  }, React__default.createElement("div", Object.assign({
    ref: ref,
    role: "radiogroup"
  }, props)));
});
TilesComponent.displayName = 'Tiles';
TilesComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  isCentered: PropTypes.bool
};
const Tiles = TilesComponent;
Tiles.Description = Description;
Tiles.Icon = Icon;
Tiles.Label = Label;
Tiles.Tile = Tile;

export { Tiles };
