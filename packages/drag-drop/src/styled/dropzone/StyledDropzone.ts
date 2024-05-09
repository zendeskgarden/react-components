/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone';

export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
  isActive?: boolean;
  isVertical?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  isHighlighted?: boolean;
  hasMessage?: boolean;
  hasIcon?: boolean;
}

const colorStyles = (props: IStyledDropzoneProps) => {
  const { isDanger, isDisabled, isActive, isHighlighted, theme } = props;

  const variable = `foreground.${isDanger ? 'danger' : 'primary'}`;
  const fgActive = getColor({ variable, theme });
  const bgActive = getColor({
    variable: `background.${isDanger ? 'danger' : 'primary'}Emphasis`,
    transparency: theme.opacity[100],
    dark: { offset: -100 },
    theme
  });
  const borderActive = getColor({
    variable: `border.${isDanger ? 'danger' : 'primary'}Emphasis`,
    theme
  });

  let backgroundColor = 'transparent';
  let borderColor = getColor({ variable: `border.emphasis`, theme });
  let color = getColor({ variable: `foreground.subtle`, theme });

  if (isDisabled) {
    backgroundColor = getColor({
      variable: 'background.emphasis',
      transparency: theme.opacity[100],
      dark: { offset: -100 },
      theme
    });
    borderColor = getColor({ variable: `border.default`, theme });
    color = getColor({
      variable: 'foreground.subtle',
      light: { offset: -100 },
      dark: { offset: 200 },
      theme
    });
  } else if (isActive || isHighlighted) {
    color = isHighlighted
      ? getColor({
          variable,
          light: { offset: 200 },
          dark: { offset: -200 },
          theme
        })
      : fgActive;
    backgroundColor = bgActive;
    borderColor = borderActive;
  } else if (isDanger) {
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
  const { theme, isHighlighted } = props;
  const borderWidth = isHighlighted ? math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;

  return css`
    border-width: ${borderWidth};
    border-style: ${isHighlighted ? theme.borderStyles.solid : 'dashed'};
    border-radius: ${theme.borderRadii.md};
    padding: ${isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4}px;
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
  display: ${p => (p.hasMessage || p.hasIcon) && 'flex'};
  flex-direction: ${p => p.hasMessage && p.isVertical && 'column'};
  align-items: ${p => (p.hasMessage || p.hasIcon) && 'center'};
  justify-content: ${p => (p.hasMessage || p.hasIcon) && 'center'};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  margin: 0; /* [1] */
  text-align: ${p => p.hasMessage && 'center'};
  direction: ${props => props.theme.rtl && 'rtl'};
  box-sizing: border-box;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropzone.defaultProps = {
  theme: DEFAULT_THEME
};
