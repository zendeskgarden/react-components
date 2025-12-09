/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getValueAndUnit } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.loading_placeholder';
const sizeStyles = _ref => {
  let {
    $width = '1em',
    $height = '0.9em',
    $fontSize
  } = _ref;
  const [value, unit] = getValueAndUnit($fontSize);
  let fontSize;
  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }
  return css(["width:", ";height:", ";font-size:", ";"], $width, $height, fontSize);
};
const StyledLoadingPlaceholder = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  role: 'progressbar'
}).withConfig({
  displayName: "StyledLoadingPlaceholder",
  componentId: "sc-x3bwsx-0"
})(["display:inline-block;", ";", ""], sizeStyles, componentStyles);

export { StyledLoadingPlaceholder };
