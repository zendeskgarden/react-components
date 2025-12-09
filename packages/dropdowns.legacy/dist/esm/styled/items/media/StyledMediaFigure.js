/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { Children } from 'react';
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.media_figure';
const StyledMediaFigure = styled(
_ref => {
  let {
    children,
    $isCompact,
    theme,
    ...props
  } = _ref;
  return  React__default.cloneElement(Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaFigure",
  componentId: "sc-16vz3xj-0"
})(["float:", ";margin-top:", "px !important;width:", ";height:", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 0.5, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, componentStyles);

export { StyledMediaFigure };
