/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'dropdowns.multiselect_items_container';
const sizeStyles = props => {
  let margin;
  let padding;
  if (!props.$isBare) {
    const marginVertical = props.$isCompact ? `-${props.theme.space.base * 1.5}px` : `-${props.theme.space.base * 2.5}px`;
    margin = `${marginVertical} 0`;
    const paddingVertical = props.$isCompact ? '3px' : '1px';
    const paddingEnd = `${props.theme.space.base}px`;
    padding = `${paddingVertical} ${props.theme.rtl ? 0 : paddingEnd} ${paddingVertical} ${props.theme.rtl ? paddingEnd : 0}`;
  }
  return css(["margin:", ";padding:", ";"], margin, padding);
};
const StyledMultiselectItemsContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectItemsContainer",
  componentId: "sc-1dxwjyz-0"
})(["display:inline-flex;flex-grow:1;flex-wrap:wrap;min-width:0;", ";", ";"], props => sizeStyles(props), componentStyles);

export { StyledMultiselectItemsContainer };
