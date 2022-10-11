/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';
import { StyledTileIcon } from './StyledTileIcon';

const COMPONENT_ID = 'forms.tile';

interface IStyledTileProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
}

const colorStyles = (props: IStyledTileProps & ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const iconColor = getColor('neutralHue', SHADE, props.theme);
  const color = getColor('neutralHue', SHADE + 200, props.theme);
  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const hoverBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.08);
  const hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
  const focusBorderColor = hoverBorderColor;
  const focusBoxShadow = props.theme.shadows.md(rgba(focusBorderColor!, 0.35));
  const activeBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.2);
  const activeBorderColor = focusBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColor('neutralHue', SHADE - 400, props.theme);
  const disabledColor = getColor('neutralHue', SHADE - 200, props.theme);
  const selectedBorderColor = focusBorderColor;
  const selectedBackgroundColor = selectedBorderColor;
  const selectedHoverBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const selectedHoverBackgroundColor = selectedHoverBorderColor;
  const selectedActiveBorderColor = getColor('primaryHue', SHADE + 200, props.theme);
  const selectedActiveBackgroundColor = selectedActiveBorderColor;
  const selectedDisabledBackgroundColor = disabledBorderColor;

  return css`
    border: ${props.theme.borders.sm} ${getColor('neutralHue', SHADE - 300, props.theme)};
    border-color: ${borderColor};
    background-color: ${props.theme.colors.background};
    color: ${color};

    ${StyledTileIcon} {
      color: ${iconColor};
    }

    &:focus {
      outline: none;
    }

    &:hover:not([aria-disabled='true']) {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};

      /* stylelint-disable-next-line selector-max-specificity */
      ${StyledTileIcon} {
        color: ${color};
      }
    }

    &[data-garden-focus-visible='true'] {
      border-color: ${focusBorderColor};
      box-shadow: ${focusBoxShadow};
    }

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
      color: ${props.theme.colors.background};

      ${StyledTileIcon} {
        color: ${props.theme.colors.background};
      }
    }

    /* stylelint-disable selector-max-specificity */
    &[data-garden-selected='true']:not([aria-disabled='true']):hover {
      border-color: ${selectedHoverBorderColor};
      background-color: ${selectedHoverBackgroundColor};
      color: ${props.theme.colors.background};

      ${StyledTileIcon} {
        color: ${props.theme.colors.background};
      }
    }

    &[data-garden-selected='true']:not([aria-disabled='true']):active {
      border-color: ${selectedActiveBorderColor};
      background-color: ${selectedActiveBackgroundColor};
      color: ${props.theme.colors.background};

      ${StyledTileIcon} {
        color: ${props.theme.colors.background};
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
  'data-garden-focus-visible': props.isFocused,
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
