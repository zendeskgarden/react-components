/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.color_swatch';
const StyledColorSwatch = styled.table.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorSwatch",
  componentId: "sc-ajx440-0"
})(["border-collapse:collapse;line-height:normal;", ";"], componentStyles);

export { StyledColorSwatch };
