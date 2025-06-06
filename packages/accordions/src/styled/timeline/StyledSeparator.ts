/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.content.separator';

export const StyledSeparator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: relative;
  justify-content: center;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base}px`};

  &::after {
    position: absolute;
    border-left: ${({ theme }) =>
      `${theme.borders.sm} ${getColor({ theme, variable: 'border.emphasis' })}`};
    height: 100%;
    content: '';
  }

  ${componentStyles};
`;
