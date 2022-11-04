/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IStyledSVGProps {
  dataGardenId: string;
  color?: string;
  fontSize?: string | number;
  width: number | string;
  height: number | string;
  containerWidth?: string;
  containerHeight?: string;
}

export const StyledSVG = styled.svg.attrs<IStyledSVGProps>(props => ({
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  width: props.width,
  height: props.height,
  focusable: 'false',
  viewBox: `0 0 ${props.width} ${props.height}`,
  role: 'img'
}))<IStyledSVGProps>`
  width: ${props => props.containerWidth || '1em'};
  height: ${props => props.containerHeight || '0.9em'};
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};

  ${props => retrieveComponentStyles(props.dataGardenId, props)};
`;

StyledSVG.defaultProps = {
  theme: DEFAULT_THEME
};
