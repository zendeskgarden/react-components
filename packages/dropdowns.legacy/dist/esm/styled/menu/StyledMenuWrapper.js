/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { menuStyles, componentStyles } from '@zendeskgarden/react-theming';
import { getMenuPosition } from '../../utils/garden-placements.js';

const COMPONENT_ID = 'dropdowns.menu_wrapper';
const StyledMenuWrapper = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenuWrapper",
  componentId: "sc-u70fn3-0"
})(["", ";", ";"], props => menuStyles(getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: props.$isHidden,
  margin: `${props.theme.space.base * (props.$hasArrow ? 2 : 1)}px`,
  zIndex: props.$zIndex,
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), componentStyles);

export { StyledMenuWrapper };
