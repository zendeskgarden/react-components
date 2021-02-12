/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Range } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { thumbStyles } from './StyledHue';

const COMPONENT_ID = 'colorpickers.colorpicker.alpha';

export const StyledAlpha = styled(Range).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  z-index: 2;
  border-radius: 0;
  height: ${props => props.theme.space.base * 3}px;

  &::-webkit-slider-runnable-track {
    background: none;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-ms-track {
    background: none;
  }

  &::-moz-range-progress {
    background: none;
  }

  &::-ms-fill-lower {
    background: none;
  }

  &::-webkit-slider-thumb {
    margin-top: -5px;
  }

  ${props =>
    thumbStyles(`
    height: ${props.theme.space.base * 4}px;
    width: ${props.theme.space.base * 4}px;
  `)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlpha.defaultProps = {
  theme: DEFAULT_THEME
};
