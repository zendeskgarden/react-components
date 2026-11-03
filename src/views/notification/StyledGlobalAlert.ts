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
import getLineHeight from '../../theming/utils/getLineHeight';
import { IGlobalAlertProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';

interface IStyledGlobalAlertProps {
  $alertType: IGlobalAlertProps['type'];
}

/**
 * 1. Shifting :focus-visible from LVHFA order to preserve `color` on hover
 * 2. The anchor focus indicator matches the Anchor: an outline that contains
 *    line breaks, offset so it clears the corners, which round only while focused
 */
const colorStyles = ({ theme, $alertType }: WithTheme<IStyledGlobalAlertProps>) => {
  let borderColor;
  let backgroundColor;
  let foregroundColor;
  let anchorHoverColor;
  let anchorActiveColor;

  switch ($alertType) {
    case 'success': {
      borderColor = getColor({ variable: 'border.successEmphasis', offset: 100, theme });
      backgroundColor = getColor({ variable: 'background.successEmphasis', theme });
      foregroundColor = getColor({ variable: 'foreground.success', offset: -600, theme });
      anchorHoverColor = theme.palette.white;
      anchorActiveColor = theme.palette.white;
      break;
    }
    case 'error': {
      borderColor = getColor({ variable: 'border.dangerEmphasis', offset: 100, theme });
      backgroundColor = getColor({ variable: 'background.dangerEmphasis', theme });
      foregroundColor = getColor({ variable: 'foreground.danger', offset: -600, theme });
      anchorActiveColor = theme.palette.white;
      anchorHoverColor = theme.palette.white;
      break;
    }
    case 'warning': {
      borderColor = getColor({ variable: 'border.warningEmphasis', offset: -300, theme });
      backgroundColor = getColor({ variable: 'background.warningEmphasis', offset: -400, theme });
      const fgVariable = 'foreground.warning';
      foregroundColor = getColor({ variable: fgVariable, offset: 100, theme });
      anchorHoverColor = getColor({ variable: fgVariable, offset: 200, theme });
      anchorActiveColor = getColor({ variable: fgVariable, offset: 300, theme });
      break;
    }
    case 'info': {
      borderColor = getColor({ variable: 'border.primaryEmphasis', offset: -300, theme });
      backgroundColor = getColor({ variable: 'background.primaryEmphasis', offset: -400, theme });
      const fgVariable = 'foreground.primary';
      foregroundColor = getColor({ variable: fgVariable, offset: 100, theme });
      anchorHoverColor = getColor({ variable: fgVariable, offset: 200, theme });
      anchorActiveColor = getColor({ variable: fgVariable, offset: 300, theme });
      break;
    }
  }

  // Apply a border without affecting the element's size
  const boxShadow = `inset 0 -${theme.borderWidths.sm} 0 ${borderColor}`;
  const anchorFocusOutlineColor = getColor({ hue: 'neutralHue', shade: 900, theme });

  /* stylelint-disable selector-no-qualifying-type */
  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    & a {
      color: inherit;

      /* [1] */
      ${focusStyles({
        theme,
        condition: false,
        styles: {
          borderRadius: theme.borderRadii.sm /* [2] */,
          color: 'inherit' /* [1] */,
          outlineColor: anchorFocusOutlineColor /* [2] */,
          outlineOffset: theme.shadowWidths.sm /* [2] */
        }
      })}

      /* [1] */
      &:hover {
        color: ${anchorHoverColor};
      }

      &:active {
        color: ${anchorActiveColor};
      }
    }
  `;
};

const sizeStyles = (props: WithTheme) => {
  const { fontSizes, space } = props.theme;
  const minHeight = space.base * 13;
  const padding = space.base * 4;
  const lineHeight = getLineHeight(space.base * 5, fontSizes.md);

  return css`
    padding: ${padding}px;
    min-height: ${minHeight}px;
    line-height: ${lineHeight};
    font-size: ${fontSizes.md};
  `;
};

export const StyledGlobalAlert = styled.div<WithTheme<IStyledGlobalAlertProps>>`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${sizeStyles}
  ${colorStyles}

  && a {
    text-decoration: underline;
  }

  ${componentStyles};
`;
