/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.rotate_icon';

export interface IStyledRotateIcon {
  isExpanded?: boolean;
  isCompact?: boolean;
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const StyledRotateIcon = styled(({ children, isRotated, isHovered, isCompact, ...props }) =>
  cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRotateIcon>`
  transform: ${props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition: transform 0.25s ease-in-out;
  padding: ${props =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`};
  vertical-align: middle;
  color: ${props => props.isHovered && getColor('primaryHue', 600, props.theme)};

  &:hover {
    color: ${props => getColor('primaryHue', 600, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME
};
