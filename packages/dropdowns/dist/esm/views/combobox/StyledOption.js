/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$l = 'dropdowns.combobox.option';
const colorStyles$7 = ({
  theme,
  $isActive,
  $type
}) => {
  let backgroundColor;
  let boxShadow;
  if ($isActive && $type !== 'group' && $type !== 'header') {
    const variable = 'background.primaryEmphasis';
    backgroundColor = getColor({
      theme,
      variable,
      transparency: theme.opacity[100]
    });
    boxShadow = `inset ${theme.rtl ? `-${theme.shadowWidths.md}` : theme.shadowWidths.md} 0 ${getColor({
      theme,
      variable
    })}`;
  }
  let foregroundVariable;
  if ($type === 'add') {
    foregroundVariable = 'foreground.primary';
  } else if ($type === 'danger') {
    foregroundVariable = 'foreground.danger';
  } else {
    foregroundVariable = 'foreground.default';
  }
  const foregroundColor = getColor({
    theme,
    variable: foregroundVariable
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["box-shadow:", ";background-color:", ";color:", ";&[aria-disabled='true']{background-color:transparent;color:", ";}"], boxShadow, backgroundColor, foregroundColor, disabledForegroundColor);
};
const getMinHeight = props => props.theme.space.base * (props.$isCompact ? 7 : 9);
const sizeStyles$6 = props => {
  const lineHeight = props.theme.lineHeights.md;
  const minHeight = getMinHeight(props);
  const paddingHorizontal = props.$type === 'group' ? 0 : `${props.theme.space.base * 9}px`;
  const paddingVertical = props.$type === 'group' ? 0 : math(`(${minHeight} - ${lineHeight}) / 2`);
  return css(["box-sizing:border-box;padding:", " ", ";min-height:", "px;line-height:", ";"], paddingVertical, paddingHorizontal, minHeight, lineHeight);
};
const StyledOption = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOption",
  componentId: "sc-jl4wn6-0"
})(["display:flex;position:relative;transition:color 0.25s ease-in-out;cursor:", ";overflow-wrap:anywhere;font-weight:", ";user-select:none;&:focus{outline:none;}", ";", ";&[aria-disabled='true']{cursor:default;}&[aria-hidden='true']{", ";}", ";"], props => props.$type === 'group' || props.$type === 'header' ? 'default' : 'pointer', props => props.$type === 'header' || props.$type === 'previous' ? props.theme.fontWeights.semibold : props.theme.fontWeights.regular, sizeStyles$6, colorStyles$7, hideVisually(), componentStyles);

export { StyledOption, getMinHeight };
