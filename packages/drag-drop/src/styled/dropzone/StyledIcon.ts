/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { CSSObject, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.icon';

interface IStyledIconProps extends ThemeProps<DefaultTheme> {
  isVertical?: boolean;
}

function sizeStyles({ theme, isVertical }: IStyledIconProps) {
  const style: CSSObject = {};

  if (isVertical) {
    style.marginBottom = theme.space.xs;
  } else {
    style[theme.rtl ? 'marginLeft' : 'marginRight'] = theme.space.xs;
  }

  return style;
}

/**
 * 1. Corrects the vertical text alignment of the icon within a dropzone message.
 */
export const StyledIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIconProps>`
  display: flex;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
