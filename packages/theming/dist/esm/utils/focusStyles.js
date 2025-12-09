/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { css } from 'styled-components';
import { math } from 'polished';
import { getFocusBoxShadow } from './getFocusBoxShadow.js';

const SELECTOR_FOCUS_VISIBLE = '&:focus-visible';
const focusStyles = _ref => {
  let {
    condition = true,
    selector = SELECTOR_FOCUS_VISIBLE,
    shadowWidth = 'md',
    spacerWidth = 'xs',
    styles: {
      boxShadow,
      ...styles
    } = {},
    theme,
    ...options
  } = _ref;
  const _boxShadow = condition ? getFocusBoxShadow({
    boxShadow,
    shadowWidth,
    spacerWidth,
    theme,
    ...options
  }) : boxShadow;
  let outline;
  let outlineOffset;
  if (spacerWidth === null) {
    outline = theme.shadowWidths[shadowWidth];
  } else {
    outline = `${math(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`;
    outlineOffset = theme.shadowWidths[spacerWidth];
  }
  return css(["&:focus{outline:none;}", "{outline:", ";outline-offset:", ";box-shadow:", ";", "}"], selector, outline, outlineOffset, _boxShadow, styles);
};

export { SELECTOR_FOCUS_VISIBLE, focusStyles };
