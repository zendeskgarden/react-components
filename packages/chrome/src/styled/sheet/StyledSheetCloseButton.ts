/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_close';

const iconColorStyles = (props: any & ThemeProps<DefaultTheme>) => {
  const shade = 600;
  const baseColor = getColor('neutralHue', shade, props.theme);
  const hoverColor = getColor('neutralHue', shade + 100, props.theme);
  const activeColor = getColor('neutralHue', shade + 200, props.theme);

  return css`
    color: ${baseColor};

    &:hover {
      background-color: ${rgba(baseColor as string, 0.08)};
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      color: ${activeColor};
    }
  `;
};

const placementStyles = (props: any) => {
  const placement = props.theme.rtl ? 'left' : 'right';

  return css`
    top: ${props.theme.space.base * 3}px;
    ${placement}: ${props.theme.space.base * 3}px;
  `;
};

export const StyledSheetCloseButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<any>`
  ${props => iconColorStyles(props)};

  display: block;
  position: absolute;
  transition: all 0.25s ease-in-out;
  border: none;
  border-radius: 50%;
  background: none;
  width: 35px;
  height: 35px;
  line-height: 40px;
  ${props => placementStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetCloseButton.defaultProps = {
  theme: DEFAULT_THEME
};
