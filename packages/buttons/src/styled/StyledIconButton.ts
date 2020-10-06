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

    ${props.isBasic && !(props.isPrimary || props.disabled) && iconColorStyles(props)};
  `;
};

const iconStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.iconSizes.md;

  return css`
    width: ${size};
    height: ${size};
  `;
};

/**
 * Accepts all `<button>` props
 */
export const StyledIconButton = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => iconButtonStyles(props)};

  & ${StyledIcon} {
    ${props => iconStyles(props)}

    & svg {
      transition: opacity 0.1s ease-in-out;
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIconButton.defaultProps = {
  theme: DEFAULT_THEME
};
