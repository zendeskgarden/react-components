/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import DEFAULT_THEME from '../elements/theme/index.js';
import { getColorV8 } from './getColorV8.js';
import { getColor } from './getColor.js';

const getFocusBoxShadow = _ref => {
  let {
    boxShadow,
    inset = false,
    color = {
      variable: 'border.primaryEmphasis'
    },
    shadowWidth = 'md',
    spacerColor = {
      variable: 'background.default'
    },
    spacerWidth = 'xs',
    theme = DEFAULT_THEME,
    ...args
  } = _ref;
  const _args = args;
  const _color = _args.hue ? getColorV8(_args.hue, _args.shade, theme) : getColor({
    ...color,
    theme
  });
  const shadow = theme.shadows[shadowWidth](_color);
  if (spacerWidth === null) {
    return `${inset ? 'inset' : ''} ${shadow}`;
  }
  const _spacerColor = _args.spacerHue ? getColorV8(_args.spacerHue, _args.spacerShade, theme) : getColor({
    ...spacerColor,
    theme
  });
  const retVal = `
    ${inset ? 'inset' : ''} ${theme.shadows[spacerWidth](_spacerColor)},
    ${inset ? 'inset' : ''} ${shadow}`;
  return boxShadow ? `${retVal}, ${boxShadow}` : retVal;
};

export { getFocusBoxShadow };
