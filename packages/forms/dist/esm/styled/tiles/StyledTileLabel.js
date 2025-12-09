/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_label';
const sizeStyles = ({
  theme,
  $isCentered
}) => {
  const marginTop = $isCentered ? `${theme.space.base * 2}px` : 0;
  const marginHorizontal = $isCentered ? undefined : math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  return css(["margin-top:", ";margin-", ":", ";line-height:", ";font-size:", ";"], marginTop, theme.rtl ? 'right' : 'left', marginHorizontal, lineHeight, fontSize);
};
const StyledTileLabel = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileLabel",
  componentId: "sc-1mypv27-0"
})(["display:block;text-align:", ";font-weight:", ";", ";", ";"], props => props.$isCentered && 'center', props => props.theme.fontWeights.semibold, sizeStyles, componentStyles);

export { StyledTileLabel };
