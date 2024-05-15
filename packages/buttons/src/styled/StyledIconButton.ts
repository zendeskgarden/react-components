/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { IButtonProps } from '../types';
import { StyledButton, getHeight } from './StyledButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.icon_button';

const iconColorStyles = ({ theme }: IButtonProps & ThemeProps<DefaultTheme>) => {
  const options = { theme, variable: 'foreground.default' };
  const baseColor = getColor(options);
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });

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

const iconButtonStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
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
const iconStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;

  return css`
    width: ${size};
    height: ${size};

    & > svg {
      transition: opacity 0.15s ease-in-out; /* [1] */
    }
  `;
};

export const StyledIconButton = styled(StyledButton as 'button').attrs(props => ({
  'data-garden-id': (props as any)['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IButtonProps>`
  ${props => iconButtonStyles(props)};

  & ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIconButton.defaultProps = {
  theme: DEFAULT_THEME
};
