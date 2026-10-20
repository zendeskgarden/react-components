/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = getColor({ theme, variable: 'border.default', ...offset100 });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const backgroundOptions = { theme, variable: 'background.primaryEmphasis' };
  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const hoverBorderColor = getColor({ theme, variable: 'border.primaryEmphasis' });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const focusBorderColor = hoverBorderColor;
  const activeBorderColor = hoverBorderColor;
  const checkedBackgroundColor = getColor({ theme, variable: 'foreground.default' });
  const checkedForegroundColor = getColor({ theme, variable: 'foreground.onEmphasis' });
  const checkedHoverBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 800 },
    dark: { shade: 200 }
  });
  const checkedActiveBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 100 }
  });
  const disabledBackgroundColor = getColor({ theme, variable: 'background.disabled' });
  const disabledBorderColor = getColor({ theme, variable: 'border.disabled' });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
    }

    ${focusStyles({
      theme,
      selector: '&:has(:focus-visible)',
      styles: { borderColor: focusBorderColor }
    })};

    &:active {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
    }

    &:has(:checked) {
      border-color: transparent;
      background-color: ${checkedBackgroundColor};
      color: ${checkedForegroundColor};
    }

    &:hover:has(:checked):not([aria-disabled='true']) {
      background-color: ${checkedHoverBackgroundColor};
    }

    &:active:has(:checked):not([aria-disabled='true']) {
      background-color: ${checkedActiveBackgroundColor};
    }

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = ({ theme }: IStyledBaseProps) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;

  return css`
    border: ${border};
    padding: ${padding};
    min-width: 132px;
  `;
};

export const StyledTile = styled.label`
  display: block;
  position: relative;
  /* prettier-ignore */
  transition:
    border-color .25s ease-in-out,
    box-shadow .1s ease-in-out,
    background-color .25s ease-in-out,
    color .25s ease-in-out;
  border-radius: ${props => props.theme.borderRadii.md};
  direction: ${props => props.theme.rtl && 'rtl'};
  /* stylelint-disable-next-line declaration-property-value-keyword-no-deprecated */
  word-break: break-word;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
