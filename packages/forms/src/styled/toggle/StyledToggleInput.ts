/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkbox/StyledCheckInput';
import { StyledToggleLabel } from './StyledToggleLabel';

const COMPONENT_ID = 'forms.toggle';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const backgroundColor = getColorV8('neutralHue', SHADE - 100, props.theme);
  const hoverBackgroundColor = getColorV8('neutralHue', SHADE, props.theme);
  const activeBackgroundColor = getColorV8('neutralHue', SHADE + 100, props.theme);

  return css`
    & ~ ${StyledToggleLabel}::before {
      background-color: ${backgroundColor};
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
  const height = `${props.theme.space.base * 5}px`;
  const width = `${props.theme.space.base * 10}px`;
  const iconSize = props.theme.iconSizes.md;
  const iconPosition = math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = math(`${width} - ${iconSize} - ${iconPosition}`);

  return css`
    top: 0;
    width: ${width};
    height: ${height};

    & ~ ${StyledToggleLabel}::before {
      width: ${width};
      height: ${height};
    }

    & ~ ${StyledToggleLabel} > svg {
      top: ${iconPosition};
      ${props.theme.rtl ? 'right' : 'left'}: ${iconPosition};
      width: ${iconSize};
      height: ${iconSize};
    }

    &:checked ~ ${StyledToggleLabel} > svg {
      ${props.theme.rtl ? 'right' : 'left'}: ${checkedIconPosition};
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
