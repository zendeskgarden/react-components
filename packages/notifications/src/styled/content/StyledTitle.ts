/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.title';

export interface IStyledTitleProps {
  isRegular?: boolean;
}

/**
 * 1. Reset for <h1>, etc.
 */
export const StyledTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTitleProps>`
  margin: 0; /* [1] */
  color: ${props => getColorV8('foreground', 600 /* default shade */, props.theme)};
  font-weight: ${props =>
    props.isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTitle.defaultProps = {
  theme: DEFAULT_THEME
};
