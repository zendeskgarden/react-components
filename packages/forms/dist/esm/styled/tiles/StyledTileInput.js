/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';

const StyledTileInput = styled.input.withConfig({
  displayName: "StyledTileInput",
  componentId: "sc-1nq2m6q-0"
})(["position:absolute;top:0;left:0;opacity:0;z-index:1;margin:0;cursor:", ";width:100%;height:100%;"], props => props.disabled ? 'default' : 'pointer');

export { StyledTileInput };
