/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import styled from 'styled-components';
import SvgChevronRightStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg.js';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.next_item_icon';
const NextIconComponent = _ref => {
  let {
    className
  } = _ref;
  return React__default.createElement(SvgChevronRightStroke, {
    "data-garden-id": COMPONENT_ID,
    "data-garden-version": '9.12.3',
    className: className
  });
};
const StyledNextIcon = styled(NextIconComponent).withConfig({
  displayName: "StyledNextIcon",
  componentId: "sc-1nzkdnq-0"
})(["transform:", ";color:", ";", ";"], props => props.theme.rtl && 'rotate(180deg)', props => props.$isDisabled ? 'inherit' : getColor({
  theme: props.theme,
  variable: 'foreground.disabled'
}), componentStyles);

export { StyledNextIcon };
