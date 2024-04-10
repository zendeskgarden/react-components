/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getColorV8,
  DEFAULT_THEME,
  retrieveComponentStyles,
  focusStyles
} from '@zendeskgarden/react-theming';
import { StyledTileIcon } from './StyledTileIcon';

const COMPONENT_ID = 'forms.tile';

interface IStyledTileProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
}

const colorStyles = (props: IStyledTileProps & ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const iconColor = getColorV8('neutralHue', SHADE, props.theme);
  const color = getColorV8('neutralHue', SHADE + 200, props.theme);
  const borderColor = getColorV8('neutralHue', SHADE - 300, props.theme);
  const hoverBackgroundColor = getColorV8('primaryHue', SHADE, props.theme, 0.08);
  const hoverBorderColor = getColorV8('primaryHue', SHADE, props.theme);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = getColorV8('primaryHue', SHADE, props.theme, 0.2);
  const activeBorderColor = focusBorderColor;
  const disabledBackgroundColor = getColorV8('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColorV8('neutralHue', SHADE - 400, props.theme);
  const disabledColor = getColorV8('neutralHue', SHADE - 200, props.theme);
  const selectedBorderColor = focusBorderColor;
  const selectedBackgroundColor = selectedBorderColor;
  const selectedHoverBorderColor = getColorV8('primaryHue', SHADE + 100, props.theme);
  const selectedHoverBackgroundColor = selectedHoverBorderColor;
  const selectedActiveBorderColor = getColorV8('primaryHue', SHADE + 200, props.theme);
  const selectedActiveBackgroundColor = selectedActiveBorderColor;
  const selectedDisabledBackgroundColor = disabledBorderColor;

  return css`
    border: ${props.theme.borders.sm} ${getColorV8('neutralHue', SHADE - 300, props.theme)};
    border-color: ${borderColor};
    background-color: ${getColorV8('background', 600 /* default shade */, props.theme)};
    color: ${color};

    ${StyledTileIcon} {
      color: ${iconColor};
    }

    &:hover:not([aria-disabled='true']) {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};

      /* stylelint-disable-next-line selector-max-specificity */
      ${StyledTileIcon} {
        color: ${color};
      }
    }

    ${focusStyles({
      theme: props.theme,
      color: { hue: focusBorderColor },
      styles: {
        borderColor: focusBorderColor
      },
      selector: `&:focus-within`
    })}

    &:active:not([aria-disabled='true']) {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};

      /* stylelint-disable-next-line selector-max-specificity */
      ${StyledTileIcon} {
        color: ${color};
      }
    }

    &[data-garden-selected='true'] {
      border-color: ${selectedBorderColor};
      background-color: ${selectedBackgroundColor};
      color: ${getColorV8('background', 600 /* default shade */, props.theme)};

      ${StyledTileIcon} {
        color: ${getColorV8('background', 600 /* default shade */, props.theme)};
      }
    }

    /* stylelint-disable selector-max-specificity */
    &[data-garden-selected='true']:not([aria-disabled='true']):hover {
      border-color: ${selectedHoverBorderColor};
      background-color: ${selectedHoverBackgroundColor};
      color: ${getColorV8('background', 600 /* default shade */, props.theme)};

      ${StyledTileIcon} {
        color: ${getColorV8('background', 600 /* default shade */, props.theme)};
      }
    }

    &[data-garden-selected='true']:not([aria-disabled='true']):active {
      border-color: ${selectedActiveBorderColor};
      background-color: ${selectedActiveBackgroundColor};
      color: ${getColorV8('background', 600 /* default shade */, props.theme)};

      ${StyledTileIcon} {
        color: ${getColorV8('background', 600 /* default shade */, props.theme)};
      }
    }
    /* stylelint-enable selector-max-specificity */

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledColor};

      /* stylelint-disable-next-line selector-max-specificity */
      ${StyledTileIcon} {
        color: ${disabledColor};
      }
    }

    &[data-garden-selected='true'][aria-disabled='true'] {
      background-color: ${selectedDisabledBackgroundColor};
      color: ${disabledColor};

      /* stylelint-disable-next-line selector-max-specificity */
      ${StyledTileIcon} {
        color: ${disabledColor};
      }
    }
  `;
};

export const StyledTile = styled.label.attrs<IStyledTileProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-selected': props.isSelected
}))<IStyledTileProps>`
  display: block;
  position: relative;
  /* prettier-ignore */
  transition:
    border-color .25s ease-in-out,
    box-shadow .1s ease-in-out,
    background-color .25s ease-in-out,
    color .25s ease-in-out;
  border-radius: ${props => props.theme.borderRadii.md};
  cursor: ${props => !props.isDisabled && 'pointer'};
  padding: ${props => props.theme.space.base * 5}px;
  direction: ${props => props.theme.rtl && 'rtl'};
  min-width: 132px;
  word-break: break-word;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTile.defaultProps = {
  theme: DEFAULT_THEME
};
