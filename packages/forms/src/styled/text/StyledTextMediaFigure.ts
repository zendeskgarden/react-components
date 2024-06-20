/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  StyledBaseIcon,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.media_figure';

interface IStyledTextMediaFigureProps {
  $isRotated?: boolean;
  $isHovered?: boolean;
  $isFocused?: boolean;
  $isDisabled?: boolean;
  $position: 'start' | 'end';
}

const colorStyles = ({
  theme,
  $isDisabled,
  $isHovered,
  $isFocused
}: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  let color;

  if ($isDisabled) {
    color = getColor({ theme, variable: 'foreground.disabled' });
  } else {
    const options = { theme, variable: 'foreground.subtle' };

    if ($isHovered || $isFocused) {
      color = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
    } else {
      color = getColor(options);
    }
  }

  return css`
    color: ${color};
  `;
};

const sizeStyles = (props: IStyledTextMediaFigureProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;
  const marginFirst = `1px ${props.theme.space.base * 2}px auto 0`;
  const marginLast = `1px 0 auto ${props.theme.space.base * 2}px`;
  let margin;

  if (props.$position === 'start') {
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

export const StyledTextMediaFigure = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTextMediaFigureProps>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  /* prettier-ignore */
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${sizeStyles};

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextMediaFigure.defaultProps = {
  theme: DEFAULT_THEME
};
