/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { rgba, math } from 'polished';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';

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

  const hue = isDanger ? 'dangerHue' : 'primaryHue';
  const baseColor = getColorV8(hue, 600, theme);
  const neutralColor = getColorV8('neutralHue', 600, theme);

  let backgroundColor = 'transparent';
  let borderColor = neutralColor;
  let color = neutralColor;

  if (isDisabled) {
    backgroundColor = getColorV8('neutralHue', 200, theme) as string;
    borderColor = getColorV8('neutralHue', 300, theme);
    color = getColorV8('neutralHue', 400, theme);
  } else if (isActive || isHighlighted) {
    color = isHighlighted ? getColorV8(hue, 800, theme) : baseColor;
    backgroundColor = rgba(baseColor as string, 0.08);
    borderColor = baseColor;
  } else if (isDanger) {
    borderColor = baseColor;
    color = baseColor;
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
