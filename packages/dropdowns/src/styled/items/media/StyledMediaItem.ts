/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { getMediaFigureSize, getMediaFigureMarginTop } from './StyledMediaFigure';
import { StyledItem, getItemPaddingVertical } from '../StyledItem';
import { StyledItemIcon } from '../StyledItemIcon';

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
  ${StyledItemIcon} {
    height: ${props =>
      !props.isCompact &&
      math(
        `${getMediaFigureSize(props)} + ${math(`${getItemPaddingVertical(props)} * 2`)} + ${math(
          `${getMediaFigureMarginTop(props)} * 2`
        )}`
      )};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMediaItem.defaultProps = {
  theme: DEFAULT_THEME
};
