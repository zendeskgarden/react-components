/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.rotate_icon';

export interface IStyledRotateIcon {
  isCompact?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme> & any) => {
  const color = getColor('primaryHue', 600, props.theme);
  const showColor = props.isCollapsible || !props.isRotated;

  return css`
    color: ${showColor ? props.isHovered && color : getColor('neutralHue', 400, props.theme)};

    &:hover {
      color: ${showColor && color};
    }
  `;
};

export const StyledRotateIcon = styled(
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  ({ children, isRotated, isHovered, isCompact, isCollapsible, ...props }) =>
    cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRotateIcon>`
  transform: ${props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition: transform 0.25s ease-in-out, color 0.1s ease-in-out;
  padding: ${props =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  min-width: ${props => props.theme.space.base * 4}px;
  min-height: ${props => props.theme.space.base * 4}px;
  vertical-align: middle;

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME
};
