/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Field } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_hue_field';

/**
 * 1. Adjust spacing in IE11 to match other browsers
 */
export const StyledHueField = styled((Field as unknown) as 'div').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  height: ${props => props.theme.space.base * 3}px;

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    margin-top: -1px; /* [1] */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHueField.defaultProps = {
  theme: DEFAULT_THEME
};
