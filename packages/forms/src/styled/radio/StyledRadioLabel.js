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
import { StyledLabel } from '../common/StyledLabel';

const COMPONENT_ID = 'forms.radio_label';

export const StyledRadioLabel = styled(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block; /* required to display input on hidden label */
  position: relative;
  cursor: pointer;
  /* stylelint-disable-next-line */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 6px`)};
  user-select: none;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioLabel.propTypes = {
  isRegular: PropTypes.bool,
  theme: PropTypes.object
};

StyledRadioLabel.defaultProps = {
  theme: DEFAULT_THEME
};
