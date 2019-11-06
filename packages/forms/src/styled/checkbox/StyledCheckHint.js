/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRadioHint } from '../radio/StyledRadioHint';

const COMPONENT_ID = 'forms.checkbox_hint';

export const StyledCheckHint = styled(StyledRadioHint).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckHint.propTypes = {
  theme: PropTypes.object
};

StyledCheckHint.defaultProps = {
  theme: DEFAULT_THEME
};
