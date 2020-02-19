/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkbox/StyledCheckInput';
import { StyledToggleLabel } from './StyledToggleLabel';

const COMPONENT_ID = 'forms.checkbox';

const markSvg = (props: ThemeProps<DefaultTheme>) => {
  const color = props.theme.colors.background;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <circle cx="8" cy="8" r="7" fill="${color}"/>
    </svg>
  `;
};

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const backgroundColor = getColor('neutralHue', SHADE - 100, props.theme);
  const backgroundImage = encodeURIComponent(markSvg(props));
  const hoverBackgroundColor = getColor('neutralHue', SHADE, props.theme);
  const activeBackgroundColor = getColor('neutralHue', SHADE + 100, props.theme);

  return css`
    & ~ ${StyledToggleLabel}::before {
      background-color: ${backgroundColor};
    }

    & ~ ${StyledToggleLabel}::before,
    &:checked ~ ${StyledToggleLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${backgroundImage}');
    }

    /* stylelint-disable selector-max-specificity */
    &:enabled ~ ${StyledToggleLabel}:hover::before {
      background-color: ${hoverBackgroundColor};
    }

    &:enabled ~ ${StyledToggleLabel}:active::before {
      background-color: ${activeBackgroundColor};
    }
    /* stylelint-enable selector-max-specificity */
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const backgroundPosition = props.theme.rtl ? '90%' : '10%';
  const checkedBackgroundPosition = props.theme.rtl ? '10%' : '90%';
  const backgroundSize = props.theme.fontSizes.md;
  const height = math(`${props.theme.space.base} * 5px`);
  const width = math(`${props.theme.space.base} * 10px`);

  return css`
    & ~ ${StyledToggleLabel}::before {
      background-position: ${backgroundPosition};
      background-size: ${backgroundSize};
      width: ${width};
      height: ${height};
    }

    &:checked ~ ${StyledToggleLabel}::before {
      background-position: ${checkedBackgroundPosition};
    }
  `;
};

export const StyledToggleInput = styled(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  & ~ ${StyledToggleLabel}::before {
    top: 0;
    /* prettier-ignore */
    transition:
      box-shadow .1s ease-in-out,
      background-color .15s ease-in-out,
      background-position .15s ease-in-out,
      color .25s ease-in-out;
    border: none;
    border-radius: 100px;
  }

  ${props => sizeStyles(props)};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledToggleInput.defaultProps = {
  theme: DEFAULT_THEME
};
