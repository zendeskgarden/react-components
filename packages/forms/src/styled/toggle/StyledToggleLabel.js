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
import { StyledCheckLabel } from '../checkbox/StyledCheckLabel';

const COMPONENT_ID = 'forms.toggle_label';

export const StyledToggleLabel = styled(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 12px`)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledToggleLabel.propTypes = {
  isRegular: PropTypes.bool,
  theme: PropTypes.object
};

StyledToggleLabel.defaultProps = {
  theme: DEFAULT_THEME
};
