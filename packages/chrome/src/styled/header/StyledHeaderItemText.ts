/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_text';

export interface IStyledHeaderItemTextProps {
  /** Hides item text. Text remains accessible to screen readers. */
  isClipped?: boolean;
}

export const clippedStyling = css`
  position: absolute;
  margin: 0;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledHeaderItemText = styled.span.attrs<IStyledHeaderItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderItemTextProps>`
  margin: 0 3px;

  ${props => props.isClipped && clippedStyling}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItemText.defaultProps = {
  theme: DEFAULT_THEME
};
