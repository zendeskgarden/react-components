/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.icon';

interface IStyledIconProps extends ThemeProps<DefaultTheme> {
  isVertical?: boolean;
  hasMessage?: boolean;
}

function sizeStyles({ theme, isVertical }: IStyledIconProps) {
  let property;
  let value;

  if (isVertical) {
    property = 'margin-bottom';
    value = theme.space.xs;
  } else {
    property = theme.rtl ? 'margin-left' : 'margin-right';
    value = theme.space.xs;
  }

  return css`
    ${property}: ${value};
  `;
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

  ${p => p.hasMessage && sizeStyles(p)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
