/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IButtonProps } from '../types';
import { COMPONENT_ID as BTN_COMPONENT_ID, StyledButton, getHeight } from './StyledButton';
import { StyledIcon } from './StyledIcon';

export const COMPONENT_ID = 'buttons.icon_button';

const iconColorStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColorV8('neutralHue', shade, props.theme);
  const hoverColor = getColorV8('neutralHue', shade + 100, props.theme);
  const activeColor = getColorV8('neutralHue', shade + 200, props.theme);

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

export const StyledIconButton = styled(StyledButton).attrs<IButtonProps>(props => ({
  'data-garden-id':
    props['data-garden-id'] && props['data-garden-id'] !== BTN_COMPONENT_ID
      ? props['data-garden-id']
      : COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => iconButtonStyles(props)};

  & ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveComponentStyles(props['data-garden-id'], props)};
`;

StyledIconButton.defaultProps = {
  theme: DEFAULT_THEME
};
