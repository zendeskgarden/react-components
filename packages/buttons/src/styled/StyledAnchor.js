/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme } from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton';

const COMPONENT_ID = 'buttons.anchor';

/**
 * Accepts all `<a>` props
 */
export const StyledAnchor = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a',
  link: true,
  type: undefined
}))`
  direction: ${props => isRtl(props) && 'rtl'};
  word-wrap: ${props => props.external && 'break-word'};
  white-space: ${props => props.external && 'pre'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
