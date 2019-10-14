/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import math from 'polished/lib/math/math';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider';

export const StyledSlider = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  position: relative;
  z-index: 0;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  /* thumb height + focused shadow widths */
  height: ${props =>
    math(`(${props.theme.space.base} * 5px) + (${props.theme.shadowWidths.md} * 2)`)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSlider.propTypes = {
  theme: PropTypes.object
};

StyledSlider.defaultProps = {
  theme: DEFAULT_THEME
};
