/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_description';

interface IStyledTileDescriptionProps {
  isStacked?: boolean;
}

export const StyledTileDescription = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileDescriptionProps>`
  display: block;
  margin-top: ${props => props.theme.space.base}px;
  text-align: ${props => !props.isStacked && 'center'};
  line-height: ${props => props.theme.space.base * 4}px;
  font-size: ${props => props.theme.fontSizes.sm};
  /* stylelint-disable-next-line property-no-unknown */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.isStacked && props.theme.space.base * 13}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileDescription.defaultProps = {
  theme: DEFAULT_THEME
};
