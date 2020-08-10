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
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.tooltip_modal.title';

export const StyledTooltipModalTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  props.theme.space.base * 8}px;
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color: ${props => props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalTitle.defaultProps = {
  theme: DEFAULT_THEME
};
