/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef, useState, useRef, useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';
import { mergeRefs } from 'react-merge-refs';
import { Splitter } from './components/Splitter.js';
import { Content } from './components/Content.js';
import { SplitterButton } from './components/SplitterButton.js';
import '../../styled/StyledCol.js';
import '../../styled/StyledGrid.js';
import '../../styled/StyledRow.js';
import { StyledPane } from '../../styled/pane/StyledPane.js';
import '../../styled/pane/StyledPaneContent.js';
import '../../styled/pane/StyledPaneSplitter.js';
import '../../styled/pane/StyledPaneSplitterButton.js';
import '../../styled/pane/StyledPaneSplitterButtonContainer.js';
import { PaneContext } from '../../utils/usePaneContext.js';

const PaneComponent = forwardRef(({
  children,
  ...props
}, ref) => {
  const [paneId, setPaneId] = useState();
  const observerRef = useRef(null);
  const {
    width = 0,
    height = 0
  } = useResizeObserver({
    ref: observerRef
  });
  const isVisible = useMemo(() => observerRef.current ? width > 0 && height > 0 : true, [width, height]);
  const paneContext = useMemo(() => ({
    isVisible,
    id: paneId,
    setId: id => setPaneId(id)
  }), [paneId, isVisible]);
  return React.createElement(PaneContext.Provider, {
    value: paneContext
  }, React.createElement(StyledPane, Object.assign({
    id: paneId,
    ref: mergeRefs([ref, observerRef])
  }, props), children));
});
PaneComponent.displayName = 'Pane';
const Pane = PaneComponent;
Pane.Content = Content;
Pane.Splitter = Splitter;
Pane.SplitterButton = SplitterButton;

export { Pane };
