/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { cloneElement, Children } from 'react';

const StyledBaseIcon = styled(
_ref => {
  let {
    children,
    theme,
    ...props
  } = _ref;
  return cloneElement(Children.only(children), props);
}).withConfig({
  displayName: "StyledBaseIcon",
  componentId: "sc-1moykgb-0"
})([""]);

export { StyledBaseIcon };
