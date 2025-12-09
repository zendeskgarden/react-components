/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem.js';

const COMPONENT_ID$4 = 'draggable_list';
const sizeStyles$3 = props => {
  const {
    $isHorizontal,
    theme: {
      space
    }
  } = props;
  let marginStart = 'margin-top';
  let marginEnd = 'margin-bottom';
  if ($isHorizontal) {
    marginStart = 'margin-right';
    marginEnd = 'margin-left';
  }
  return css(["", ":-", ";", ":-", ";"], marginStart, space.xxs, marginEnd, space.xxs);
};
const StyledDraggableList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDraggableList",
  componentId: "sc-17agksa-0"
})(["display:flex;flex-direction:", ";margin:0;padding:0;list-style:none;box-sizing:border-box;direction:", ";> ", "{flex:1;}", ";", ";"], p => p.$isHorizontal ? 'row' : 'column', props => props.theme.rtl && 'rtl', StyledItem, sizeStyles$3, componentStyles);

export { StyledDraggableList };
