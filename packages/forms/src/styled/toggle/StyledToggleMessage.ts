/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledMessage } from '../common/StyledMessage';
import { StyledMessageIcon } from '../common/StyledMessageIcon';

const COMPONENT_ID = 'forms.toggle_message';

export const StyledToggleMessage = styled(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 12px`)};

  & ${StyledMessageIcon} {
    ${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
      math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledToggleMessage.defaultProps = {
  theme: DEFAULT_THEME
};
