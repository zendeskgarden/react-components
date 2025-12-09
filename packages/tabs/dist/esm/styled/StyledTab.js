/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { stripUnit } from 'polished';

const COMPONENT_ID = 'tabs.tab';
const colorStyles = _ref => {
  let {
    theme,
    $isSelected
  } = _ref;
  const borderColor = $isSelected ? getColor({
    theme,
    variable: 'border.primaryEmphasis'
  }) : 'transparent';
  const selectedColor = getColor({
    theme,
    variable: 'foreground.primary'
  });
  const foregroundColor = $isSelected ? selectedColor : 'inherit';
  const disabledColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["border-color:", ";color:", ";&:hover{color:", ";}", " &:active{border-color:currentcolor;color:", ";}&[aria-disabled='true']{border-color:transparent;color:", ";}"], borderColor, foregroundColor, selectedColor, focusStyles({
    theme,
    inset: true,
    spacerWidth: null,
    shadowWidth: 'sm',
    selector: '&:focus-visible::before',
    styles: {
      color: selectedColor
    }
  }), selectedColor, disabledColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isVertical
  } = _ref2;
  const borderWidth = theme.borderWidths.md;
  const focusHeight = `calc(100% - ${theme.space.base * ($isVertical ? 2 : 4)}px);`;
  let marginBottom;
  let padding;
  if ($isVertical) {
    marginBottom = `${theme.space.base * 5}px`;
    padding = `${theme.space.base}px ${theme.space.base * 2}px`;
  } else {
    const paddingTop = theme.space.base * 2.5;
    const paddingHorizontal = theme.space.base * 7;
    const paddingBottom = paddingTop - stripUnit(theme.borderWidths.md) - stripUnit(theme.borderWidths.sm);
    padding = `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`;
  }
  return css(["margin-bottom:", ";border-width:", ";padding:", ";&:focus-visible::before,&[data-garden-focus-visible]::before{height:", ";}&:last-of-type{margin-bottom:0;}"], marginBottom, borderWidth, padding, focusHeight);
};
const StyledTab = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTab",
  componentId: "sc-x2pbow-0"
})(["display:", ";position:relative;transition:color 0.25s ease-in-out;border-bottom:", ";border-", ":", ";cursor:pointer;overflow:hidden;vertical-align:top;user-select:none;text-align:", ";text-decoration:none;text-overflow:ellipsis;", ";", ";&:focus{text-decoration:none;}&::before{transition:box-shadow 0.1s ease-in-out;content:'';}&:focus-visible::before{position:absolute;top:", "px;right:", "px;left:", "px;border-radius:", ";pointer-events:none;}&:active::before{box-shadow:none;}&[aria-disabled='true']{cursor:default;}", ";"], props => props.$isVertical ? 'block' : 'inline-block', props => props.$isVertical ? undefined : props.theme.borderStyles.solid, props => props.theme.rtl ? 'right' : 'left', props => props.$isVertical ? props.theme.borderStyles.solid : undefined, props => {
  if (props.$isVertical) {
    return props.theme.rtl ? 'right' : 'left';
  }
  return 'center';
}, sizeStyles, colorStyles, props => props.theme.space.base * (props.$isVertical ? 1 : 2.5), props => props.theme.space.base * (props.$isVertical ? 1 : 6), props => props.theme.space.base * (props.$isVertical ? 1 : 6), props => props.theme.borderRadii.md, componentStyles);

export { StyledTab };
