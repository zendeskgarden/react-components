/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';
import math from 'polished/lib/math/math';

export const StyledCheckLabel = styled(StyledLabel).attrs(props => ({}))`
  display: inline-block; /* required to display checkbox on hidden label */
  position: relative;
  cursor: pointer;
  /* stylelint-disable-next-line */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 6px`)};
  user-select: none;

  ${props => retrieveComponentStyles('forms.check_label', props)};
`;

StyledCheckLabel.propTypes = {
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  indeterminate: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};
