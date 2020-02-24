/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getColor,
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.icon';

interface IStyledIcon {
  isActive?: boolean;
  isHorizontal?: boolean;
}

export const StyledIcon = styled.div.attrs<IStyledIcon>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => !props.isHorizontal && `${props.theme.space.base * 3}px`};
  border-radius: 100%;
  background: ${props =>
    props.isActive
      ? getColor('neutralHue', 600, props.theme)
      : getColor('neutralHue', 200, props.theme)};
  width: ${props => props.theme.space.base * 6}px;
  height: ${props => props.theme.space.base * 6}px;
  line-height: ${props => getLineHeight(props.theme.lineHeights.lg, props.theme.fontSizes.sm)};
  color: ${props =>
    props.isActive ? props.theme.colors.background : getColor('neutralHue', 800, props.theme)};
  font-size: ${props => props.theme.fontSizes.sm};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
