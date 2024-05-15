/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { COMPONENT_ID as BTN_COMPONENT_ID, StyledButton } from './StyledButton';
import { IAnchorProps } from './../types';

export const COMPONENT_ID = 'buttons.anchor';

/**
 * Accepts all `<a>` props
 */
export const StyledAnchor = styled(StyledButton).attrs<IAnchorProps>(props => ({
  'data-garden-id':
    props['data-garden-id'] && props['data-garden-id'] !== BTN_COMPONENT_ID
      ? props['data-garden-id']
      : COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a',
  dir: props.theme.rtl ? 'rtl' : undefined,
  isLink: true,
  type: undefined
}))`
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => retrieveComponentStyles(props['data-garden-id'], props)};
`;

StyledAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
