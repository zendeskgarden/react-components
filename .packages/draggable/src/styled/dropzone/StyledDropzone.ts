/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

const COMPONENT_ID = 'dropzone';

export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
  $isActive?: boolean;
  $isVertical?: boolean;
  $isDanger?: boolean;
  $isDisabled?: boolean;
  $isHighlighted?: boolean;
  $hasMessage?: boolean;
  $hasIcon?: boolean;
}

const colorStyles = (props: IStyledDropzoneProps) => {
  const { $isDanger, $isDisabled, $isActive, $isHighlighted, theme } = props;

  const fgVariable = $isDanger ? 'foreground.danger' : 'foreground.primary';
  const fgActive = getColor({ variable: fgVariable, theme });
  const borderActive = getColor({
    variable: $isDanger ? `border.dangerEmphasis` : 'border.primaryEmphasis',
    theme
  });

  let backgroundColor = 'transparent';
  let borderColor = getColor({ variable: `border.emphasis`, theme });
  let color = getColor({ variable: `foreground.subtle`, theme });

  if ($isDisabled) {
    backgroundColor = getColor({ variable: 'background.disabled', theme });
    borderColor = getColor({ variable: `border.disabled`, theme });
    color = getColor({ variable: 'foreground.disabled', theme });
  } else if ($isActive || $isHighlighted) {
    color = $isHighlighted
      ? getColor({
          variable: fgVariable,
          light: { offset: 200 },
          dark: { offset: -200 },
          theme
        })
      : fgActive;
    backgroundColor = getColor({
      variable: $isDanger ? 'background.dangerEmphasis' : 'background.primaryEmphasis',
      transparency: theme.opacity[100],
      dark: { offset: -100 },
      theme
    });
    borderColor = borderActive;
  } else if ($isDanger) {
    borderColor = borderActive;
    color = fgActive;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};
  `;
};

const sizeStyles = (props: IStyledDropzoneProps) => {
  const { theme, $isHighlighted } = props;
  const borderWidth = $isHighlighted ? math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;

  return css`
    border-width: ${borderWidth};
    border-style: ${$isHighlighted ? theme.borderStyles.solid : 'dashed'};
    border-radius: ${theme.borderRadii.md};
    padding: ${$isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4}px;
    width: 100%;
    font-family: ${theme.fonts.system};
    font-size: ${theme.fontSizes.md};
  `;
};

/**
 * 1. Reset margin, e.g. when alternative tag includes native margin
 */
export const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropzoneProps>`
  display: ${p => (p.$hasMessage || p.$hasIcon) && 'flex'};
  flex-direction: ${p => p.$hasMessage && p.$isVertical && 'column'};
  align-items: ${p => (p.$hasMessage || p.$hasIcon) && 'center'};
  justify-content: ${p => (p.$hasMessage || p.$hasIcon) && 'center'};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  margin: 0; /* [1] */
  text-align: ${p => p.$hasMessage && 'center'};
  direction: ${props => props.theme.rtl && 'rtl'};
  box-sizing: border-box;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
