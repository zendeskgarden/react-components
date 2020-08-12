/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  getColor,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.header';

export interface IStyledHeaderProps {
  /**
   * Enable danger header styling
   */
  isDanger?: boolean;
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const verticalPadding = `${props.theme.space.base * 5}px`;
  const startPadding = `${props.theme.space.base * 10}px`;
  const endPadding = `${props.theme.space.base * 15}px`;

  return css`
    margin: 0;
    padding-top: ${verticalPadding};
    padding-right: ${props.theme.rtl ? startPadding : endPadding};
    padding-bottom: ${verticalPadding};
    /* stylelint-disable-next-line */
    padding-left: ${props.theme.rtl ? endPadding : startPadding};
  `;
};

export const StyledHeader = styled.div.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: block;
  position: ${props => props.isDanger && 'relative'};
  border-bottom: ${props => props.theme.borders.sm} ${getColor('neutralHue', 200)};
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color: ${props =>
    props.isDanger ? getColor('dangerHue', 600, props.theme) : props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
