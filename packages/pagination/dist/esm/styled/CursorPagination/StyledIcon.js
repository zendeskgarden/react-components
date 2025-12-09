/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon } from '@zendeskgarden/react-theming';

const marginStyles = props => {
  const {
    $type,
    theme
  } = props;
  const margin = theme.space.base;
  if (theme.rtl) {
    return css(["margin-", ":", "px;"], $type === 'last' || $type === 'next' ? 'right' : 'left', margin);
  }
  return css(["margin-", ":", "px;"], $type === 'first' || $type === 'previous' ? 'right' : 'left', margin);
};
const StyledIcon = styled(StyledBaseIcon).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-2vzk6e-0"
})(["", " transform:", ";"], marginStyles, props => props.theme.rtl && 'rotate(180deg)');

export { StyledIcon };
