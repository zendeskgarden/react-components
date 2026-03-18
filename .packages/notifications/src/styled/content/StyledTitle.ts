/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'notifications.title';

export interface IStyledTitleProps {
  $isRegular?: boolean;
}

/**
 * 1. Reset for <h1>, etc.
 */
export const StyledTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTitleProps>`
  margin: 0; /* [1] */
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
  font-weight: ${props =>
    props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};

  ${componentStyles};
`;
