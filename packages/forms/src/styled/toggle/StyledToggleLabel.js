/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from '../checkboxes/StyledCheckLabel';

const StyledToggleLabel = styled(StyledCheckLabel).attrs(props => ({}))`
  ${props => retrieveComponentStyles('forms.toggle_label', props)};
`;

StyledToggleLabel.propTypes = {
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};

export default StyledToggleLabel;
