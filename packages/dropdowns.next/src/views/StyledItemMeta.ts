/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.item.meta';

interface IStyledItemMetaProps extends ThemeProps<DefaultTheme> {
  isDisabled?: boolean;
}

const colorStyles = (props: IStyledItemMetaProps) => {
  const color = getColor('neutralHue', props.isDisabled ? 400 : 600, props.theme);

  return css`
    color: ${color};
  `;
};

const sizeStyles = (props: IStyledItemMetaProps) => {
  const lineHeight = props.theme.lineHeights.sm;
  const fontSize = props.theme.fontSizes.sm;

  return css`
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledItemMeta = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemMetaProps>`
  transition: color 0.25s ease-in-out;
  font-weight: ${props => props.theme.fontWeights.regular};

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemMeta.defaultProps = {
  theme: DEFAULT_THEME
};
