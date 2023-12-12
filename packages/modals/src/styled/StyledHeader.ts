/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  getLineHeight,
  getColor,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

import { BASE_MULTIPLIERS } from './StyledClose';

const COMPONENT_ID = 'modals.header';

export interface IStyledHeaderProps extends ThemeProps<DefaultTheme> {
  isDanger?: boolean;
  isCloseButtonPresent?: boolean;
}

const colorStyles = (props: IStyledHeaderProps) => {
  const border = getColor(
    'neutralHue',
    props.theme.colors.base === 'dark' ? 750 : 200,
    props.theme
  );
  const foregroundColor = props.isDanger
    ? getColor('dangerHue', 600, props.theme)
    : props.theme.colors.foreground;

  return css`
    border-bottom-color: ${border};
    color: ${foregroundColor};
  `;
};

/**
 * 1. the padding added to the Header is based on the close button size and spacing,
 *    with additional padding (+ 2) between the Header content and Close button
 */
const sizeStyles = (props: IStyledHeaderProps) => {
  const border = props.theme.borders.sm;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md);
  const paddingVertical = `${props.theme.space.base * 5}px`;
  const paddingHorizontal = `${props.theme.space.base * 10}px`;
  let padding; /* [1] */

  if (props.isCloseButtonPresent) {
    const paddingExtra = `${
      props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)
    }px`;

    if (props.theme.rtl) {
      padding = `${paddingVertical} ${paddingHorizontal} ${paddingVertical} ${paddingExtra}`;
    } else {
      padding = `${paddingVertical} ${paddingExtra} ${paddingVertical} ${paddingHorizontal}`;
    }
  } else {
    padding = `${paddingVertical} ${paddingHorizontal}`;
  }

  return css`
    margin: 0;
    border-bottom: ${border};
    padding: ${padding};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: block;
  position: ${props => props.isDanger && 'relative'};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles};
  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
