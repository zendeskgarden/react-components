/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getMinHeight as getOptionMinHeight } from './StyledOption';

const COMPONENT_ID = 'dropdowns.optgroup';

interface IStyledOptGroupProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

const sizeStyles = (props: IStyledOptGroupProps) => {
  const marginVertical = math(
    `-(${getOptionMinHeight(props)} - ${props.theme.lineHeights.md}) / 2`
  );
  const marginHorizontal = `-${props.theme.space.base * 9}px`;

  return css`
    margin: ${marginVertical} ${marginHorizontal};
    padding: 0;
  `;
};

export const StyledOptGroup = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptGroupProps>`
  list-style-type: none;

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOptGroup.defaultProps = {
  theme: DEFAULT_THEME
};
