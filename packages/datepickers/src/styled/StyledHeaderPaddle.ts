/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { retrieveSpacing } from './utils';

const COMPONENT_ID = 'datepickers.header_paddle';

const StyledHeaderPaddle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{
  isSmall: boolean;
  isHidden?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  border-radius: 50%;
  cursor: pointer;
  width: ${retrieveSpacing};
  height: ${retrieveSpacing};

  color: ${props => getColor('neutralHue', 600, props.theme)};

  ${props => props.isHidden && `visibility: hidden;`};

  :hover {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.08)};
    color: ${props => props.theme.colors.foreground};
  }

  :active {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.2)};
    color: ${props => props.theme.colors.foreground};
  }

  * {
    width: ${props => `${props.theme.space.base * 4}px`};
    height: ${props => `${props.theme.space.base * 4}px`};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderPaddle.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledHeaderPaddle;
