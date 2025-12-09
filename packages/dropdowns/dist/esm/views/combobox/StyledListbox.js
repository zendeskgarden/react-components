/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledOption, getMinHeight } from './StyledOption.js';
import { StyledOptionContent } from './StyledOptionContent.js';
import { StyledOptGroup } from './StyledOptGroup.js';
import { StyledListboxSeparator } from './StyledListboxSeparator.js';

const COMPONENT_ID = 'dropdowns.combobox.listbox';
const sizeStyles = props => {
  const padding = props.theme.space.base;
  const $minHeight = props.$minHeight === undefined ? `${getMinHeight(props) + padding * 2}px` : props.$minHeight;
  return css(["min-height:", ";max-height:", ";&&&{padding-top:", "px;padding-bottom:", "px;}"], $minHeight, props.$maxHeight, padding, padding);
};
const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListbox",
  componentId: "sc-1k13ba7-0"
})(["overflow-y:auto;list-style-type:none;", ";&&&{display:block;}", ":first-child ", " ", ":first-child ", "[role='none']:first-child{display:none;}"], sizeStyles, StyledOption, StyledOptionContent, StyledOptGroup, StyledListboxSeparator);

export { StyledListbox };
