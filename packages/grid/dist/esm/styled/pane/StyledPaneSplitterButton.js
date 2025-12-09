/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { ChevronButton } from '@zendeskgarden/react-buttons';

const getSize = theme => theme.space.base * 6;
const sizeStyles$1 = ({
  theme
}) => {
  const size = `${getSize(theme)}px`;
  return css(["width:", ";min-width:", ";height:", ";"], size, size, size);
};
const transformStyles = ({
  $isRotated,
  $orientation,
  theme
}) => {
  let degrees = 0;
  if ($isRotated) {
    degrees = theme.rtl ? -180 : 180;
  }
  if ($orientation === 'end') {
    degrees += theme.rtl ? -90 : 90;
  } else if ($orientation === 'start') {
    degrees += theme.rtl ? 90 : -90;
  } else if ($orientation === 'bottom') {
    degrees += 180;
  }
  return css(["& > svg{transform:rotate(", "deg);}"], degrees);
};
const StyledPaneSplitterButton = styled(ChevronButton).attrs({
  'data-garden-version': '9.12.3',
  isBasic: true,
  isPill: true,
  size: 'small'
}).withConfig({
  displayName: "StyledPaneSplitterButton",
  componentId: "sc-zh032e-0"
})(["", ";", ";", ";"], sizeStyles$1, transformStyles, componentStyles);

export { StyledPaneSplitterButton, getSize };
