/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
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
  background-color: ${props => props.isRecessed && getColor('neutralHue', 100, props.theme)};
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  color: ${props => getColor('neutralHue', 600, props.theme)}
    ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledWell.defaultProps = {
  theme: DEFAULT_THEME
};
