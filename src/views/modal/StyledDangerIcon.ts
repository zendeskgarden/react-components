/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ExclamationCircleFillIcon from '@zendeskgarden/svg-icons/src/exclamation-circle-fill.svg';
import { styled } from 'styled-components';

import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import type { WithTheme } from '../../types/views';

export const StyledDangerIcon = styled(ExclamationCircleFillIcon)<WithTheme>`
  position: absolute;
  top: ${props => props.theme.space.md};
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.sm};
  width: ${props => getIconRenderSize(props.theme)};
  height: ${props => getIconRenderSize(props.theme)};
`;
