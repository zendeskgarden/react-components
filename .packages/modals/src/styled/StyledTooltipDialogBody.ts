/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'modals.tooltip_dialog.body';

export const StyledTooltipDialogBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  margin: 0;
  padding-top: ${props => props.theme.space.base * 1.5}px;
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color-scheme: only ${p => p.theme.colors.base};
  color: ${({ theme }) => getColor({ variable: 'foreground.default', theme })};
  font-size: ${props => props.theme.fontSizes.md};

  ${componentStyles};
`;
