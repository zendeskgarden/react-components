/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColorV8
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.tooltip_modal.body';

export const StyledTooltipModalBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  margin: 0;
  padding-top: ${props => props.theme.space.base * 1.5}px;
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color: ${props => getColorV8('foreground', 600 /* default shade */, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalBody.defaultProps = {
  theme: DEFAULT_THEME
};
