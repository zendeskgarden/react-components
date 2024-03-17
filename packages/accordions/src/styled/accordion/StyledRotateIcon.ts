/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColorV8, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.rotate_icon';

interface IStyledRotateIcon {
  isCompact?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme> & any) => {
  const showColor = props.isCollapsible || !props.isRotated;
  let color = getColorV8('neutralHue', 600, props.theme);

  if (showColor && props.isHovered) {
    color = getColorV8('primaryHue', 600, props.theme);
  }

  return css`
    color: ${color};

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
  transition:
    transform 0.25s ease-in-out,
    color 0.1s ease-in-out;
  box-sizing: content-box;
  padding: ${props =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  width: ${props => props.theme.iconSizes.md};
  min-width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  vertical-align: middle;

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME
};
