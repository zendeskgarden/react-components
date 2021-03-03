/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.checkered';

interface IStyledCheckered {
  height: string;
  width: string;
  size: string;
  position: string;
  sticky?: boolean;
}

const backgroundStyles = (props: IStyledCheckered & ThemeProps<DefaultTheme>) => {
  const checkColor = getColor('neutralHue', 400, props.theme);

  return `
    background-image: linear-gradient(45deg, ${checkColor} 25%, transparent 25%),
      linear-gradient(135deg, ${checkColor} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${checkColor} 75%),
      linear-gradient(135deg, transparent 75%, ${checkColor} 75%);
    background-position: 0 0, ${props.position} 0, ${props.position} -${props.position}, 0 ${props.position};
    background-size: ${props.size} ${props.size};
  `;
};

export const StyledCheckered = styled.span.attrs<IStyledCheckered>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCheckered>`
  display: inline-block;
  position: absolute;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => (props.sticky ? 0 : undefined)};
  ${backgroundStyles}
  width: ${props => props.width};
  height: ${props => props.height};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckered.defaultProps = {
  theme: DEFAULT_THEME,
  sticky: false
};
