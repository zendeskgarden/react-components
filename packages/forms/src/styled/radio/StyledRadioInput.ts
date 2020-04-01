/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, rgba } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRadioLabel } from './StyledRadioLabel';

const COMPONENT_ID = 'forms.radio';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const hoverBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.08);
  const hoverBorderColor = getColor('primaryHue', SHADE - 200, props.theme);
  const focusBorderColor = getColor('primaryHue', SHADE, props.theme);
  const activeBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.2);
  const activeBorderColor = focusBorderColor;
  const boxShadow = props.theme.shadows.md(rgba(focusBorderColor!, 0.35));
  const checkedBorderColor = focusBorderColor;
  const checkedBackgroundColor = checkedBorderColor;
  const checkedHoverBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const checkedHoverBackgroundColor = checkedHoverBorderColor;
  const checkedActiveBorderColor = getColor('primaryHue', SHADE + 200, props.theme);
  const checkedActiveBackgroundColor = checkedActiveBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);

  return css`
    & ~ ${StyledRadioLabel}::before {
      border-color: ${borderColor};
      background-color: ${props.theme.colors.background};
    }

    & ~ ${StyledRadioLabel}:hover::before {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
    }

    &[data-garden-focus-visible='true'] ~ ${StyledRadioLabel}::before {
      border-color: ${focusBorderColor};
      box-shadow: ${boxShadow};
    }

    & ~ ${StyledRadioLabel}:active::before {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
    }

    &:checked ~ ${StyledRadioLabel}::before {
      border-color: ${checkedBorderColor};
      background-color: ${checkedBackgroundColor};
    }

    /* stylelint-disable selector-max-specificity */
    &:enabled:checked ~ ${StyledRadioLabel}:hover::before {
      border-color: ${checkedHoverBorderColor};
      background-color: ${checkedHoverBackgroundColor};
    }

    &:enabled:checked ~ ${StyledRadioLabel}:active::before {
      border-color: ${checkedActiveBorderColor};
      background-color: ${checkedActiveBackgroundColor};
    }
    /* stylelint-enable selector-max-specificity */

    &:disabled ~ ${StyledRadioLabel}::before {
      border-color: transparent;
      background-color: ${disabledBackgroundColor};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const lineHeight = math(`${props.theme.space.base} * 5px`); /* from StyledLabel */
  const size = math(`${props.theme.space.base} * 4px`);
  const top = math(`(${lineHeight} - ${size}) / 2`);

  return css`
    & ~ ${StyledRadioLabel}::before {
      top: ${top};
      background-size: ${props.theme.iconSizes.sm};
      width: ${size};
      height: ${size};
      box-sizing: border-box;
    }
  `;
};

export const StyledRadioInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'radio'
})`
  /* hide <input> but retain accessiblity */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);

  & ~ ${StyledRadioLabel}::before {
    position: absolute;
    ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
    /* prettier-ignore */
    transition:
      border-color .25s ease-in-out,
      box-shadow .1s ease-in-out,
      background-color .25s ease-in-out,
      color .25s ease-in-out;
    border: ${props => props.theme.borders.sm};
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  ${props => sizeStyles(props)};

  &:focus ~ ${StyledRadioLabel}::before {
    outline: none;
  }

  & ~ ${StyledRadioLabel}:active::before {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  ${props => colorStyles(props)};

  &:disabled ~ ${StyledRadioLabel} {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioInput.defaultProps = {
  theme: DEFAULT_THEME
};
