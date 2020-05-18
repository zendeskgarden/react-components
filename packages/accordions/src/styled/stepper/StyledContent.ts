/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_content';

interface IStyledContent {
  isActive?: boolean;
}

const sizeStyles = (props: IStyledContent & ThemeProps<DefaultTheme>) => {
  const { rtl, space } = props.theme;
  const paddingBottom = props.isActive ? space.base * 8 : space.base * 6;
  const paddingRight = rtl ? space.base * 6 : space.base * 5;
  const paddingLeft = rtl ? space.base * 5 : space.base * 6;
  const marginRight = rtl ? space.base * 3 : '0';
  const marginLeft = rtl ? '0' : space.base * 3;
  const marginVertical = space.base * 3;

  return css`
    margin: ${marginVertical}px ${marginRight}px ${marginVertical}px ${marginLeft}px;
    padding: 0 ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `;
};

export const StyledContent = styled.div.attrs<IStyledContent>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledContent>`
  ${sizeStyles}
  min-width: ${props => props.theme.space.base * 30}px;
  word-break: break-word;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME
};
