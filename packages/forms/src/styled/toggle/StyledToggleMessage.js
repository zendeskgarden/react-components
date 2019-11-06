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
import { StyledMessage } from '../common/StyledMessage';
import { StyledMessageIcon } from '../common/StyledMessageIcon';
import VALIDATION from '../../utils/validation';

const COMPONENT_ID = 'forms.toggle_message';

export const StyledToggleMessage = styled(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 12px`)};

  & ${StyledMessageIcon} {
    ${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledToggleMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledToggleMessage.defaultProps = {
  theme: DEFAULT_THEME
};
