/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { rgba } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_close';

const placementStyles = (props: ThemeProps<DefaultTheme>) => {
  const placement = props.theme.rtl ? 'left' : 'right';

  return css`
    position: absolute;
    top: ${props.theme.space.base * 2.5}px;
    ${placement}: ${props.theme.space.base * 2}px;
  `;
};

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColor('neutralHue', shade, props.theme);
  const hoverColor = getColor('neutralHue', shade + 100, props.theme);
  const activeColor = getColor('neutralHue', shade + 200, props.theme);

  return css`
    background-color: transparent;
    color: ${baseColor};

    &:hover {
      background-color: ${rgba(baseColor as string, 0.08)};
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      background-color: ${rgba(baseColor as string, 0.2)};
      color: ${activeColor};
    }
  `;
};

export const StyledSheetClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 40px;
  height: 40px;
  line-height: 0;

  ${props => placementStyles(props)};
  ${props => colorStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetClose.defaultProps = {
  theme: DEFAULT_THEME
};
