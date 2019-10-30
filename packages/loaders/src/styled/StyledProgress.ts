/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

type SIZE = 'small' | 'medium' | 'large';

const HEIGHTS: Record<string, number> = {
  small: 2,
  medium: 6,
  large: 12
};

const sizeToBorderRadius = (size: SIZE) => HEIGHTS[size] / 2;

interface IStyledProgressBackgroundProps {
  size: SIZE;
  borderRadius?: number;
  color?: string;
}

const PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';

export const StyledProgressBackground = styled.div.attrs<IStyledProgressBackgroundProps>(props => ({
  'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  borderRadius: props.borderRadius || sizeToBorderRadius(props.size)
}))<IStyledProgressBackgroundProps>`
  margin: ${props => props.theme.space.base * 2}px 0;
  border-radius: ${props => props.borderRadius}px;
  background-color: ${props => getColor('neutralHue', 200, props.theme)};
  color: ${props => props.color || getColor('successHue', 600, props.theme)};

  ${props => retrieveComponentStyles(PROGRESS_BACKGROUND_COMPONENT_ID, props)}
`;

StyledProgressBackground.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledProgressIndicatorProps {
  size: SIZE;
  borderRadius?: number;
  value: number;
  height?: number;
}

const PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';

export const StyledProgressIndicator = styled.div.attrs<IStyledProgressIndicatorProps>(props => ({
  'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  height: props.height || HEIGHTS[props.size],
  borderRadius: props.borderRadius || sizeToBorderRadius(props.size)
}))<IStyledProgressIndicatorProps>`
  transition: width 0.1s ease-in-out;
  border-radius: ${props => props.borderRadius}px;
  background: currentColor;
  width: ${props => props.value}%;
  height: ${props => props.height}px;

  ${props => retrieveComponentStyles(PROGESS_INDICATOR_COMPONENT_ID, props)}
`;

StyledProgressIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
