/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRange, trackStyles } from '../common/StyledRange';

const COMPONENT_ID = 'colorpickers.colorpicker_hue';

export const StyledHueRange = styled(StyledRange as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props =>
    trackStyles(`
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
    `)}
`;

StyledHueRange.defaultProps = {
  theme: DEFAULT_THEME
};
