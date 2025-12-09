/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.sortable';
const StyledBaseIconWrapper = styled.div.withConfig({
  displayName: "StyledSortableButton__StyledBaseIconWrapper",
  componentId: "sc-2s1dli-0"
})(["display:flex;position:absolute;top:0;", ":0;align-items:center;justify-content:center;opacity:0;width:", ";height:100%;color:inherit;fill:inherit;"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.iconSizes.sm);
const StyledSortableStrokeIconWrapper = styled(StyledBaseIconWrapper).withConfig({
  displayName: "StyledSortableButton__StyledSortableStrokeIconWrapper",
  componentId: "sc-2s1dli-1"
})([""]);
const StyledSortableFillIconWrapper = styled(StyledBaseIconWrapper).withConfig({
  displayName: "StyledSortableButton__StyledSortableFillIconWrapper",
  componentId: "sc-2s1dli-2"
})([""]);
const colorStyles = _ref => {
  let {
    theme,
    $sort
  } = _ref;
  const fgInactive = getColor({
    variable: 'foreground.subtle',
    transparency: theme.opacity[200],
    theme
  });
  const fgActive = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const fgPrimaryActive = getColor({
    variable: 'foreground.primary',
    theme
  });
  const fgPrimaryInactive = getColor({
    variable: 'foreground.primary',
    theme,
    dark: {
      offset: -100
    },
    transparency: theme.opacity[200]
  });
  let color = fgActive;
  let fill = fgActive;
  if ($sort === 'asc') {
    color = fgActive;
    fill = fgInactive;
  } else if ($sort === 'desc') {
    color = fgInactive;
    fill = fgActive;
  }
  return css(["", "{color:", ";fill:", ";}", "{color:", ";fill:", ";}&:hover,", "{color:", ";", ";", " ", "}", ""], StyledSortableStrokeIconWrapper, fgActive, fgActive, StyledSortableFillIconWrapper, color, fill, SELECTOR_FOCUS_VISIBLE, fgPrimaryActive, $sort === undefined && `
        ${StyledSortableFillIconWrapper} {
          opacity: 1;
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryActive};
        }

        ${StyledSortableStrokeIconWrapper} {
          opacity: 0;
        }
      `, $sort === 'asc' && `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryInactive};
        }
      `, $sort === 'desc' && `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryInactive};
          fill: ${fgPrimaryActive};
        }
      `, focusStyles({
    theme
  }));
};
const StyledSortableButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  type: 'button'
}).withConfig({
  displayName: "StyledSortableButton",
  componentId: "sc-2s1dli-3"
})(["position:relative;transition:box-shadow 0.1s ease-in-out;border:none;border-radius:", ";background-color:transparent;cursor:pointer;padding:0;padding-", ":", ";width:", ";text-decoration:none;color:inherit;font-family:inherit;font-size:inherit;font-weight:", ";", "{opacity:", ";}", "{opacity:", ";}&:hover,", "{text-decoration:none;}", " ", ";"], props => props.theme.borderRadii.sm, props => props.theme.rtl ? 'left' : 'right', props => math(`${props.theme.space.base} + ${props.theme.iconSizes.sm}`), props => props.width, props => props.theme.fontWeights.semibold, StyledSortableStrokeIconWrapper, props => props.$sort === undefined && 1, StyledSortableFillIconWrapper, props => props.$sort !== undefined && 1, SELECTOR_FOCUS_VISIBLE, colorStyles, componentStyles);

export { StyledSortableButton, StyledSortableFillIconWrapper, StyledSortableStrokeIconWrapper };
