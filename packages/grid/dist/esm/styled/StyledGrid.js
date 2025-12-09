/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$5 = 'grid.grid';
const colorStyles$3 = ({
  theme,
  $debug
}) => {
  const borderColor = $debug && getColor({
    theme,
    hue: 'crimson',
    shade: 700,
    transparency: theme.opacity[600]
  });
  const borderWidth = $debug && math(`${theme.borderWidths.sm} * 2`);
  return css(["color-scheme:only ", ";box-shadow:", ";"], theme.colors.base, $debug && `
      -${borderWidth} 0 0 0 ${borderColor},
      ${borderWidth} 0 0 0 ${borderColor}
    `);
};
const sizeStyles$4 = ({
  theme,
  $gutters
}) => {
  const padding = $gutters ? math(`${theme.space[$gutters]} / 2`) : 0;
  return css(["padding-right:", ";padding-left:", ";"], padding, padding);
};
const StyledGrid = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  $gutters: props.$gutters ?? 'md'
})).withConfig({
  displayName: "StyledGrid",
  componentId: "sc-oxgg5i-0"
})(["direction:", ";margin-right:auto;margin-left:auto;width:100%;box-sizing:border-box;", ";", ";", ";"], props => props.theme.rtl && 'rtl', sizeStyles$4, colorStyles$3, componentStyles);

export { StyledGrid };
