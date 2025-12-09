/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$5 = 'draggable_list.item';
const sizeStyles$4 = props => {
  const {
    $isHorizontal,
    theme: {
      space
    }
  } = props;
  return css(["padding:", ";"], $isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`);
};
const StyledItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1nps3s3-0"
})(["display:flex;", " ", ";"], sizeStyles$4, componentStyles);

export { StyledItem };
