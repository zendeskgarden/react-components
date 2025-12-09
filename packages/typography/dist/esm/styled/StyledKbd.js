/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { stripUnit, math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCode } from './StyledCode.js';

const COMPONENT_ID$1 = 'typography.kbd';
const sizeStyles = ({
  theme,
  $size
}) => {
  let minWidth;
  let paddingHorizontal;
  let paddingVertical = '0';
  switch ($size) {
    case 'small':
      minWidth = math(`${theme.lineHeights.sm} - 1px`);
      paddingHorizontal = `${theme.space.base}px`;
      break;
    case 'medium':
      minWidth = math(`${theme.lineHeights.md} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.5}px`;
      break;
    case 'large':
      minWidth = math(`${theme.lineHeights.lg} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.75}px`;
      break;
    default:
      minWidth = 'calc(1.2em + 3px)';
      paddingHorizontal = `${stripUnit(math(`${theme.space.base * 1.5} / (${theme.fontSizes.md} - 1px)`))}em`;
      paddingVertical = '1.5px';
      break;
  }
  const padding = `${paddingVertical} ${paddingHorizontal}`;
  return css(["&&{box-sizing:border-box;padding:", ";min-width:", ";}"], padding, minWidth);
};
const StyledKbd = styled(StyledCode).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3',
  as: 'kbd'
}).withConfig({
  displayName: "StyledKbd",
  componentId: "sc-1gzk2wp-0"
})(["display:inline-block;direction:ltr;text-align:center;font-family:sans-serif;", ";", ";"], sizeStyles, componentStyles);

export { StyledKbd };
