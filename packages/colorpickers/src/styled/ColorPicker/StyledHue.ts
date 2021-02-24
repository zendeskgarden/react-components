/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRange } from '../common/StyledRange';
import { trackStyles, trackLowerStyles } from '../common/trackStyles';

const COMPONENT_ID = 'colorpickers.colorpicker_hue';

/**
 * 1. Provides height for the input so that the thumb shadow styles are not cut off in IE11.
 * 2. Adjusts the spacing to align thumb with track on Chrome, Safari, and Edge.
 */
export const StyledHue = styled((StyledRange as unknown) as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line declaration-no-important */
  margin-top: -${props => props.theme.space.base * 2}px !important;

  &::-webkit-slider-thumb {
    margin-top: -${props => props.theme.space.base / 2}px; /* [2] */
  }

  ${props =>
    trackStyles(`
    margin: 0;
    border-radius: 0;
    /* stylelint-disable */
    background: linear-gradient(
      to ${props.theme.rtl ? 'left' : 'right'},
        #f00 0%,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        #f00 100%
        );
        /* stylelint-enable */
        height: ${props.theme.space.base * 3}px;
        `)}

  ${trackLowerStyles(`opacity: 0;`)}
`;

StyledHue.defaultProps = {
  theme: DEFAULT_THEME
};
