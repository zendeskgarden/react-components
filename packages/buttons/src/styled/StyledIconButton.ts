/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledButton, getHeight, IStyledButtonProps } from './StyledButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.icon_button';

const iconColorStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColor('neutralHue', shade, props.theme);
  const hoverColor = getColor('neutralHue', shade + 100, props.theme);
  const activeColor = getColor('neutralHue', shade + 200, props.theme);

  return css`
    color: ${baseColor};

    &:hover {
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      color: ${activeColor};
    }
  `;
};

const iconButtonStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const width = getHeight(props);

  return css`
    border: ${props.isBasic && 'none'};
    padding: 0;
    width: ${width};
    min-width: ${width};

    ${props.isBasic &&
    !(props.isPrimary || props.isDanger || props.disabled) &&
    iconColorStyles(props)};

    &:disabled {
      background-color: ${!props.isPrimary && 'transparent'};
    }
  `;
};

/**
 * 1. Ease opacity transition between embedded icons (i.e. stroke-fill).
 */
const iconStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;

  return css`
    width: ${size};
    height: ${size};

    & > svg {
      transition: opacity 0.15s ease-in-out; /* [1] */
    }
  `;
};

export const StyledIconButton = styled(StyledButton as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledButtonProps>`
  ${props => iconButtonStyles(props)};

  & ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIconButton.defaultProps = {
  theme: DEFAULT_THEME
};
