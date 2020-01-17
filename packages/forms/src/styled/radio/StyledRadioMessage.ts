/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.radio_message';

export const StyledRadioMessage = styled(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 6px`)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioMessage.defaultProps = {
  theme: DEFAULT_THEME
};
