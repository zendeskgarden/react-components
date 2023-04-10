/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone';

export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
  hasMessage?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  isHighlighted?: boolean;
  isActive?: boolean;
}

const colorStyles = (props: IStyledDropzoneProps) => {
  const { isDanger, isDisabled, isActive, isHighlighted, theme } = props;

  const hue = isDanger ? 'dangerHue' : 'primaryHue';
  const baseColor = getColor(hue, 600, theme);
  const neutralColor = getColor('neutralHue', 600, theme);

  let backgroundColor = 'transparent';
  let borderColor = neutralColor;
  let color = neutralColor;

  if (isDisabled) {
    backgroundColor = getColor('neutralHue', 200, theme) as string;
    borderColor = getColor('neutralHue', 300, theme);
    color = getColor('neutralHue', 400, theme);
  } else if (isActive || isHighlighted) {
    color = isHighlighted ? getColor(hue, 800, theme) : baseColor;
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

  return css`
    border-width: ${isHighlighted ? '2px' : '1px'};
    border-style: ${isHighlighted ? 'solid' : 'dashed'};
    border-radius: ${theme.borderRadii.md};
    padding: ${isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4}px;
    width: 100%;
    font-family: ${theme.fonts.system};
    font-size: ${theme.fontSizes.md};
  `;
};

export const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropzoneProps>`
  display: ${p => p.hasMessage && 'flex'};
  align-items: ${p => p.hasMessage && 'center'};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
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
