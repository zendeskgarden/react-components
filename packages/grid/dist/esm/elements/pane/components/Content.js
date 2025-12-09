/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import '../../../styled/StyledCol.js';
import '../../../styled/StyledGrid.js';
import '../../../styled/StyledRow.js';
import '../../../styled/pane/StyledPane.js';
import { StyledPaneContent } from '../../../styled/pane/StyledPaneContent.js';
import '../../../styled/pane/StyledPaneSplitter.js';
import '../../../styled/pane/StyledPaneSplitterButton.js';
import '../../../styled/pane/StyledPaneSplitterButtonContainer.js';
import usePaneContext from '../../../utils/usePaneContext.js';

const ContentComponent = forwardRef((props, ref) => {
  const {
    isVisible
  } = usePaneContext();
  return React.createElement(StyledPaneContent, Object.assign({
    hidden: !isVisible,
    ref: ref
  }, props));
});
ContentComponent.displayName = 'Pane.Content';
const Content = ContentComponent;

export { Content };
