/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.step_content';

export interface IStyledContent {
  isActive?: boolean;
}

const inactiveStyling = css`
  & > div {
    transition: height 0.25s ease-in-out;
    height: 0 !important; /* stylelint-disable-line */
  }
`;

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const { rtl, space } = props.theme;
  const padding = space.base * 4;
  const paddingRight = rtl ? space.base * 6 : '0';
  const paddingLeft = rtl ? '0' : space.base * 6;
  const margin = space.base * 1.5;
  const marginRight = rtl ? space.base * 3 : '0';
  const marginLeft = rtl ? '0' : space.base * 3;

  return css`
    margin: ${margin}px ${marginRight}px ${margin}px ${marginLeft}px;
    padding: ${padding}px ${paddingRight}px ${padding}px ${paddingLeft}px;
  `;
};

export const StyledContent = styled.div.attrs<IStyledContent>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledContent>`
  & > div {
    transition: height 0.25s ease-in-out;
    overflow: hidden;
  }

  ${sizeStyles}

  ${props => !props.isActive && inactiveStyling}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME
};
