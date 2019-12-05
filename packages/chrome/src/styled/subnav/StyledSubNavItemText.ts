/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import stripUnit from 'polished/lib/helpers/stripUnit';

const COMPONENT_ID = 'chrome.subnav_item_text';

export interface IStyledSubNavItemTextProps {
  /**
   * Wrap overflow text instead of truncating long strings with an ellipsis
   * (use in conjunction with max-width styling applied to the `SubNav` container)
   **/
  isWrapped?: boolean;
}

export const StyledSubNavItemText = styled.span.attrs<IStyledSubNavItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavItemTextProps>`
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: ${props => (props.theme.space.base * 5) / stripUnit(props.theme.fontSizes.md)};
  white-space: ${props => (props.isWrapped ? 'normal' : 'nowrap')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
