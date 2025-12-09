/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { menuStyles, getMenuPosition, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.menu_wrapper';
const StyledMenuWrapper = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenuWrapper",
  componentId: "sc-6fowoz-0"
})(["top:0;left:0;", ";", ";"], props => menuStyles(getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: props['aria-hidden'],
  margin: `${props.theme.space.base}px`,
  zIndex: props.$zIndex,
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), componentStyles);

export { StyledMenuWrapper };
