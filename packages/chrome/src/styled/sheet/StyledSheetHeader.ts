/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_header';

export const StyledSheetHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION 
})`
  border-bottom: 1px solid #d8dcde;
  padding: 20px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: space-between;
  text-align: left;

  & > * {
    width: 100%;
  }
`;

StyledSheetHeader.defaultProps = {
  theme: DEFAULT_THEME
};