/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColorV8, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';

const COMPONENT_ID = 'notifications.well';

export interface IStyledWellProps {
  isRecessed?: boolean;
}

/**
 * Supports all `<div>` props
 */
export const StyledWell = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledWellProps>`
  background-color: ${props => props.isRecessed && getColorV8('neutralHue', 100, props.theme)};
  color: ${props => getColorV8('neutralHue', 600, props.theme)}
    ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledWell.defaultProps = {
  theme: DEFAULT_THEME
};
