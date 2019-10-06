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
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_label';

export const StyledLabel = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  direction: ${props => props.theme.rtl && 'rtl'};
  vertical-align: middle; /* support label inline with input layout */
  line-height: ${props =>
    stripUnit(math(`${props.theme.space.base * 5} / ${props.theme.fontSizes.md}`))};
  color: ${props => props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props =>
    props.isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLabel.propTypes = {
  isRegular: PropTypes.bool,
  theme: PropTypes.object
};

StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
