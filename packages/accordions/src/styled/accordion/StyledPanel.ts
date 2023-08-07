/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getColor,
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

interface IStyledPanel {
  isBare?: boolean;
  isCompact?: boolean;
  isExpanded?: boolean;
  isAnimated?: boolean;
}

const COMPONENT_ID = 'accordions.panel';

const colorStyles = (props: IStyledPanel & ThemeProps<DefaultTheme>) => {
  const { theme, isBare } = props;

  return css`
    border-bottom-color: ${isBare ? 'transparent' : getColor('neutralHue', 300, theme)};
  `;
};

const sizeStyles = (props: IStyledPanel & ThemeProps<DefaultTheme>) => {
  const { theme, isCompact, isExpanded } = props;
  const { base } = theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * 5;
  let paddingBottom = base * 8;

  if (isCompact) {
    paddingTop = base * 2;
    paddingHorizontal = base * 3;
    paddingBottom = base * 4;
  }

  if (isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  return css`
    grid-template-rows: ${isExpanded ? 1 : 0}fr;
    border-bottom: ${theme.borders.sm};
    padding: ${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px;
    line-height: ${getLineHeight(base * 5, theme.fontSizes.md)};
    font-size: ${theme.fontSizes.md};
  `;
};

export const StyledPanel = styled.section.attrs<IStyledPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPanel>`
  display: grid;
  transition: ${props =>
    props.isAnimated && 'padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out'};
  overflow: hidden;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  isAnimated: true,
  theme: DEFAULT_THEME
};
