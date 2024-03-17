/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getColorV8,
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_hint';

export const StyledHint = styled.div.attrs(props => ({
  'data-garden-id': (props as any)['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': (props as any)['data-garden-version'] || PACKAGE_VERSION
}))`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: block;
  vertical-align: middle; /* support hint inline with input layout */
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${props => getColorV8('neutralHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHint.defaultProps = {
  theme: DEFAULT_THEME
};
