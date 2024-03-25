/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import React, { Children } from 'react';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.media_figure';

interface IStyledTextMediaFigureProps {
  isRotated?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  position: 'start' | 'end';
}

const colorStyles = (props: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  let shade = 600;

  if (props.isDisabled) {
    shade = 400;
  } else if (props.isHovered || props.isFocused) {
    shade = 700;
  }

  return css`
    color: ${getColorV8('neutralHue', shade, props.theme)};
  `;
};

const sizeStyles = (props: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;
  const marginFirst = `1px ${props.theme.space.base * 2}px auto 0`;
  const marginLast = `1px 0 auto ${props.theme.space.base * 2}px`;
  let margin;

  if (props.position === 'start') {
    margin = props.theme.rtl ? marginLast : marginFirst;
  } else {
    margin = props.theme.rtl ? marginFirst : marginLast;
  }

  return css`
    margin: ${margin};
    width: ${size};
    height: ${size};
  `;
};

export const StyledTextMediaFigure = styled(
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  ({ children, position, isHovered, isFocused, isDisabled, isRotated, theme, ...props }) =>
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
