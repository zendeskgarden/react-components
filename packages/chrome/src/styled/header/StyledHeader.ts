/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledHeaderItem } from './StyledHeaderItem';

const COMPONENT_ID = 'chrome.header';

export interface IStyledHeaderProps {
  /** Display logo for standlone usage  */
  isStandalone?: boolean;
}

export const StyledHeader = styled.header.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  box-shadow: ${props =>
    props.isStandalone &&
    props.theme.shadows.lg('0', '10px', getColor('chromeHue', 600, props.theme, 0.15)!)};
  background-color: ${props => props.theme.colors.background};
  padding: 0 ${props => props.theme.space.base}px;
  height: ${props => props.theme.space.base * 13}px;
  color: ${props => getColor('neutralHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props =>
    props.isStandalone &&
    `
    ${StyledHeaderItem}[data-garden-logo='true'] {
      display: inline-flex;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
