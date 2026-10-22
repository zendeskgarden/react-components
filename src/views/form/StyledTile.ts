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
import { getFocusBoxShadow } from '../../theming/utils/getFocusBoxShadow';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledTileProps {
  $isCentered?: boolean;
}

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = getColor({ theme, variable: 'border.default', ...offset100 });
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const hoverBorderColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 500 },
    dark: { shade: 600 }
  });
  const activeBorderColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 600 },
    dark: { shade: 500 }
  });
  const focusBorderColor = getColor({ theme, variable: 'border.primaryEmphasis' });
  const checkedBorderColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 400 }
  });
  /* The selected state is 2px wide: a 1px border plus a 1px inset shadow (no layout shift). */
  const checkedBoxShadow = (color: string) => `inset 0 0 0 ${theme.borderWidths.sm} ${color}`;
  const disabledBackgroundColor = getColor({ theme, variable: 'background.disabled' });
  const disabledBorderColor = getColor({ theme, variable: 'border.disabled' });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      border-color: ${hoverBorderColor};
    }

    &:active {
      border-color: ${activeBorderColor};
    }

    &:has(:checked) {
      border-color: ${checkedBorderColor};
      box-shadow: ${checkedBoxShadow(checkedBorderColor)};
    }

    ${focusStyles({
      theme,
      selector: '&:has(:focus-visible)',
      styles: { borderColor: focusBorderColor }
    })};

    &:has(:checked):has(:focus-visible):not([aria-disabled='true']) {
      border-color: ${focusBorderColor};
      box-shadow: ${getFocusBoxShadow({ theme, boxShadow: checkedBoxShadow(checkedBorderColor) })};
    }

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      box-shadow: none;
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = ({ theme, $isCentered }: IStyledTileProps & IStyledBaseProps) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;

  /*
   * 1. Centered tiles stack their content in a column.
   * 2. Start-aligned tiles are a two-column grid. The icon lives in the first column, which has no
   *    width when the icon is omitted. The icon spans the label and description rows.
   */
  const layout = $isCentered
    ? css`
        flex-direction: column; /* [1] */
        gap: ${theme.space.xs};
      `
    : css`
        grid-template-columns: auto 1fr; /* [2] */
        grid-template-rows: auto 1fr;
        align-items: start;
      `;

  return css`
    display: ${$isCentered ? 'flex' : 'grid'};
    border: ${border};
    padding: ${padding};
    min-width: 132px;

    ${layout};
  `;
};

export const StyledTile = styled.label<IStyledTileProps>`
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
