/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import math from 'polished/lib/math/math';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_hint';

export const StyledTextHint = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  line-height: ${props =>
    stripUnit(math(`${props.theme.space.base * 5} / ${props.theme.fontSizes.md}`))};
  color: ${props => getColor('neutralHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextHint.propTypes = {
  theme: PropTypes.object
};

StyledTextHint.defaultProps = {
  theme: DEFAULT_THEME
};
