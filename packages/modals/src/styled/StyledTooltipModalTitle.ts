/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColorV8
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.tooltip_modal.title';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => `
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 8}px;
  line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props.theme.fontSizes.md};
`;

export const StyledTooltipModalTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  color: ${props => getColorV8('foreground', 600 /* default shade */, props.theme)};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModalTitle.defaultProps = {
  theme: DEFAULT_THEME
};
