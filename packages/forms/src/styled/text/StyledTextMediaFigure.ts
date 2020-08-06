/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import React, { Children } from 'react';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const colorStyles = (props: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  let shade = 600;

  if (props.isDisabled) {
    shade = 400;
  } else if (props.isHovered || props.isFocused) {
    shade = 700;
  }

  return css`
    color: ${getColor('neutralHue', shade, props.theme)};
  `;
};

const sizeStyles = (props: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;

  return css`
    width: ${size};
    height: ${size};
  `;
};

const COMPONENT_ID = 'forms.media_figure';

interface IStyledTextMediaFigureProps {
  isRotated?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const StyledTextMediaFigure = styled(({ children, isDisabled, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTextMediaFigureProps>`
  transform: ${props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  /* prettier-ignore */
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${props => colorStyles(props)};

  ${props => sizeStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextMediaFigure.defaultProps = {
  theme: DEFAULT_THEME
};
