/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_label';

interface IStyledTileLabelProps {
  isStacked?: boolean;
}

export const StyledTileLabel = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileLabelProps>`
  display: block;
  margin-top: ${props => (props.isStacked ? 0 : props.theme.space.base * 2)}px;
  overflow: hidden;
  text-align: ${props => !props.isStacked && 'center'};
  text-overflow: ellipsis;
  line-height: ${props => props.theme.space.base * 5}px;
  white-space: nowrap;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.isStacked && props.theme.space.base * 13}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileLabel.defaultProps = {
  theme: DEFAULT_THEME
};
