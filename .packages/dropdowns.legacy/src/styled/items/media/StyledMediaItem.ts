/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledItem } from '../StyledItem';

const COMPONENT_ID = 'dropdowns.media_item';

export interface IStyledMediaItem {
  isCompact?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const StyledMediaItem = styled(StyledItem).attrs<IStyledMediaItem>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMediaItem>`
  ${componentStyles};
`;
