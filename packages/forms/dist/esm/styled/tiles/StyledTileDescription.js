/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_description';
const sizeStyles = _ref => {
  let {
    theme,
    $isCentered
  } = _ref;
  const marginTop = `${theme.space.base}px`;
  const marginHorizontal = $isCentered ? undefined : math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.space.base * 4, fontSize);
  return css(["margin-top:", ";margin-", ":", ";line-height:", ";font-size:", ";"], marginTop, theme.rtl ? 'right' : 'left', marginHorizontal, lineHeight, fontSize);
};
const StyledTileDescription = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileDescription",
  componentId: "sc-xfuu7u-0"
})(["display:block;text-align:", ";", ";", ";"], props => props.$isCentered && 'center', sizeStyles, componentStyles);

export { StyledTileDescription };
