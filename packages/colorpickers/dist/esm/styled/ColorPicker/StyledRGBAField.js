/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { Field } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$9 = 'colorpickers.colorpicker_rgb_field';
const sizeStyles$1 = theme => {
  const margin = `${theme.space.base * 1.5}px`;
  const width = `${theme.space.base * 12.75}px`;
  return `
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    min-width: ${width};
  `;
};
const StyledRGBAField = styled(Field).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRGBAField",
  componentId: "sc-13266k8-0"
})(["display:flex;flex-direction:column;text-align:center;", ";", ";"], props => sizeStyles$1(props.theme), componentStyles);

export { StyledRGBAField };
