/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.content.separator';

interface IStyledSeparator {
  surfaceColor?: string;
}

/**
 * 1. override CSS bedrock
 */
export const StyledSeparator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSeparator>`
  display: flex;
  position: relative;
  justify-content: center;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base}px`};

  svg {
    box-sizing: content-box; /* [1] */
  }

  svg,
  img {
    position: relative;
    z-index: 2;
    background: ${props => props.surfaceColor || props.theme.colors.background};
    padding: ${props => props.theme.space.base}px 0;
    color: ${props => getColor('neutralHue', 600, props.theme)};
  }

  &::after {
    position: absolute;
    z-index: 1;
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
