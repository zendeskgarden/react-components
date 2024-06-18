/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.well';

export interface IStyledWellProps {
  $isRecessed?: boolean;
}

/**
 * Supports all `<div>` props
 */
export const StyledWell = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledWellProps>`
  background-color: ${p =>
    p.$isRecessed && getColor({ variable: 'background.recessed', theme: p.theme })};
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};

  ${p => retrieveComponentStyles(COMPONENT_ID, p)};
`;

StyledWell.defaultProps = {
  theme: DEFAULT_THEME
};
