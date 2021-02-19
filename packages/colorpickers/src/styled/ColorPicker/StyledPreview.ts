/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorpicker_preview_box';

export const StyledPreview = styled.div.attrs<IRGBColor>(props => ({
  style: {
    backgroundColor: `rgba(${props.red}, ${props.green}, ${props.blue}, ${
      props.alpha ? props.alpha / 100 : 0
    })`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'preview-box'
}))<IRGBColor>`
  flex-shrink: 0;
  border-radius: ${props => props.theme.borderRadii.md};
  /* stylelint-disable-next-line color-function-notation */
  box-shadow: inset 0 0 0 ${props => props.theme.borderWidths.sm}
    ${props => getColor(props.theme.palette.black, 600, props.theme, 0.19)};
  width: ${props => props.theme.space.base * 8}px;
  height: ${props => props.theme.space.base * 8}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPreview.defaultProps = {
  theme: DEFAULT_THEME
};
