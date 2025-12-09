/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import styled from 'styled-components';
import SvgChevronLeftStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg.js';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.previous_item_icon';
const PreviousIconComponent = _ref => {
  let {
    className
  } = _ref;
  return React__default.createElement(SvgChevronLeftStroke, {
    "data-garden-id": COMPONENT_ID,
    "data-garden-version": '9.12.3',
    className: className
  });
};
const StyledPreviousIcon = styled(PreviousIconComponent).withConfig({
  displayName: "StyledPreviousIcon",
  componentId: "sc-1n1t07s-0"
})(["transform:", ";color:", ";", ";"], props => props.theme.rtl && 'rotate(180deg)', props => props.$isDisabled ? 'inherit' : getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), componentStyles);

export { StyledPreviousIcon };
