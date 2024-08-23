/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import AlertErrorStrokeIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';

export const StyledDangerIcon = styled(AlertErrorStrokeIcon)`
  position: absolute;
  top: ${props => props.theme.space.base * 5.5}px;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => `${props.theme.space.base * 4}px`};
`;
