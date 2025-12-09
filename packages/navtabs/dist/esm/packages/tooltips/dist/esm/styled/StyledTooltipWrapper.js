/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';

const StyledTooltipWrapper = styled.div.withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1b7q9q6-0"
})(["position:absolute;top:0;left:0;transition:opacity 10ms;opacity:1;z-index:", ";&[aria-hidden='true']{visibility:hidden;opacity:0;}"], props => props.$zIndex);

export { StyledTooltipWrapper };
