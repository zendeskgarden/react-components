/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'modals.tooltip_dialog.title';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => `
  /* stylelint-disable-next-line property-no-unknown */
  line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props.theme.fontSizes.md};
`;

export const StyledTooltipDialogTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  color: ${({ theme }) => getColor({ variable: 'foreground.default', theme })};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => sizeStyles(props)};

  ${componentStyles};
`;
