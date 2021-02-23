/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Range } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { colorStyles, thumbStyles, trackStyles, trackLowerStyles } from './StyledHue';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha';

/**
 * 1. Adjust spacing in IE11 to match other browsers
 * 2. Provides height for the input so that the thumb shadow styles are not cut off in IE11.
 * 3. Adjusts the spacing to align thumb with track on Chrome, Safari, and Edge.
 */
export const StyledAlpha = styled((Range as unknown) as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  z-index: 2;
  /* stylelint-disable-next-line declaration-no-important */
  margin-top: 0 !important;
  border-radius: 0;
  height: ${props => props.theme.space.base * 3}px;

  &::-webkit-slider-thumb {
    margin-top: -5px; /* [3] */
  }

  ${props =>
    thumbStyles(`
    height: ${props.theme.space.base * 4}px;
    width: ${props.theme.space.base * 4}px;
  `)}

  ${trackStyles(`background: none;`)}

  ${trackLowerStyles(`background: none;`)}

  ${colorStyles}

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    top: -${props => props.theme.space.base * 2.5}px; /* [1] */
    height: ${props => props.theme.space.base * 8}px; /* [2] */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlpha.defaultProps = {
  theme: DEFAULT_THEME
};
