/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.item';
const sizeStyles = props => {
  const {
    isHorizontal,
    theme: {
      space
    }
  } = props;
  return css(["padding:", ";"], isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`);
};
const StyledItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1pyxc3j-0"
})(["display:flex;", " ", ";"], sizeStyles, props => retrieveComponentStyles(COMPONENT_ID, props));
StyledItem.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledItem };
