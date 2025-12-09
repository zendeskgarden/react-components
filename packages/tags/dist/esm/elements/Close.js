/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../styled/StyledTag.js';
import '../styled/StyledAvatar.js';
import { StyledClose } from '../styled/StyledClose.js';
import SvgXStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/x-stroke.svg.js';
import { useText } from '@zendeskgarden/react-theming';

const CloseComponent = forwardRef((props, ref) => {
  const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Remove');
  return React__default.createElement(StyledClose, Object.assign({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1
  }), React__default.createElement(SvgXStroke, null));
});
CloseComponent.displayName = 'Tag.Close';
const Close = CloseComponent;

export { Close };
