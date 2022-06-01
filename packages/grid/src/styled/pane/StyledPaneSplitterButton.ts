/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ISplitterButtonProps, Orientation } from '../../types';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'pane.splitterbutton';

interface IStyledSplitterButtonProps extends ISplitterButtonProps {
  orientation: Orientation;
}

export const StyledPaneSplitterButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSplitterButtonProps>`
  position: absolute;
  top: -9px;
  left: -9px;
  width: 24px;
  min-width: 24px;
  height: 24px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitterButton.defaultProps = {
  theme: DEFAULT_THEME
};
