/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

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
    border-left: ${props =>
      `${props.theme.borders.sm} ${getColor('neutralHue', 600, props.theme)}`};
    height: 100%;
    content: '';
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
