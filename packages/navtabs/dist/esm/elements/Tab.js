/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import SvgLeafStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/leaf-stroke.svg.js';
import SvgXStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';
import SvgBotSparkleFill from '../node_modules/@zendeskgarden/svg-icons/src/12/bot-sparkle-fill.svg.js';
import { StyledMetaWrapper } from '../styled/StyledMetaWrapper.js';
import { StyledTextWrapper } from '../styled/StyledTextWrapper.js';
import { StyledAdornmentWrapper } from '../styled/StyledAdornmentWrapper.js';
import { StyledAnchor } from '../styled/StyledAnchor.js';
import { StyledListItem } from '../styled/StyledListItem.js';
import { Tooltip } from '../packages/tooltips/dist/esm/elements/Tooltip.js';
import { IconButton } from '../packages/buttons/dist/esm/elements/IconButton.js';

const Tab = () => React__default.createElement("div", {
  style: {
    width: '15%'
  }
}, React__default.createElement(StyledListItem, null, React__default.createElement(StyledAnchor, null, React__default.createElement(StyledAdornmentWrapper, null, React__default.createElement(SvgLeafStroke, null)), React__default.createElement("div", {
  style: {
    minWidth: 0
  }
}, React__default.createElement(StyledTextWrapper, null, "A berry berry super long title"), React__default.createElement(StyledMetaWrapper, null, React__default.createElement("div", null, React__default.createElement(SvgBotSparkleFill, null)), React__default.createElement(StyledTextWrapper, null, "Berry berry long Sous titre")))), React__default.createElement(StyledAdornmentWrapper, null, React__default.createElement(Tooltip, {
  content: "Leaf"
}, React__default.createElement(IconButton, {
  "aria-label": "leaf",
  size: "small"
}, React__default.createElement(SvgXStroke, null))))));

export { Tab };
