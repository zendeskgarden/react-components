/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import CircleStrokeIcon from '@zendeskgarden/svg-icons/src/12/circle-full-stroke.svg';

const COMPONENT_ID = 'timeline.icon';

/**
 * 1. Odd sizing allows the timeline line to center respective of the circle icon.
 */
export const StyledCircleStrokeIcon = styled(CircleStrokeIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: ${props => props.theme.space.base * 2.75}px; /* [1] */
  height: ${props => props.theme.space.base * 2.75}px; /* [1] */
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCircleStrokeIcon.defaultProps = {
  theme: DEFAULT_THEME
};
