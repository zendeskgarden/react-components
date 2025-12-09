/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef, useCallback } from 'react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import '../../../styled/StyledCol.js';
import '../../../styled/StyledGrid.js';
import '../../../styled/StyledRow.js';
import '../../../styled/pane/StyledPane.js';
import '../../../styled/pane/StyledPaneContent.js';
import '../../../styled/pane/StyledPaneSplitter.js';
import { StyledPaneSplitterButton } from '../../../styled/pane/StyledPaneSplitterButton.js';
import { StyledPaneSplitterButtonContainer } from '../../../styled/pane/StyledPaneSplitterButtonContainer.js';
import usePaneSplitterContext from '../../../utils/usePaneSplitterContext.js';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext.js';

const SplitterButtonComponent = forwardRef((_ref, ref) => {
  let {
    label,
    placement: defaultPlacement,
    ...other
  } = _ref;
  const {
    orientation,
    layoutKey,
    min,
    max,
    isRow,
    valueNow,
    size,
    providerId
  } = usePaneSplitterContext();
  const paneProviderContext = usePaneProviderContextData(providerId);
  const isTop = orientation === 'top';
  const isStart = orientation === 'start';
  const isMin = valueNow === min;
  let placement = defaultPlacement;
  if (!defaultPlacement) {
    if (isRow) {
      placement = 'center';
    } else {
      placement = 'start';
    }
  }
  const setValue = useCallback(value => {
    if (isRow) {
      paneProviderContext.setRowValue(isTop, layoutKey, value);
    } else {
      paneProviderContext.setColumnValue(isStart, layoutKey, value);
    }
  }, [isRow, isTop, isStart, layoutKey, paneProviderContext]);
  const onClick = composeEventHandlers(other.onClick, () => {
    if (isMin) {
      setValue(max);
    } else {
      setValue(min);
    }
  });
  const onKeyDown = composeEventHandlers(other.onKeyDown, event => event.stopPropagation()
  );
  const onMouseDown = composeEventHandlers(other.onMouseDown, event => event.stopPropagation()
  );
  return React.createElement(StyledPaneSplitterButtonContainer, {
    $orientation: orientation,
    $placement: placement,
    $splitterSize: size || 0
  }, React.createElement(Tooltip, {
    content: label,
    placement: "auto",
    zIndex: 2,
    style: {
      cursor: 'default'
    },
    onMouseDown: e => e.stopPropagation()
  }, React.createElement(StyledPaneSplitterButton, Object.assign({
    "aria-label": label
  }, other, {
    $orientation: orientation,
    $isRotated: isMin,
    ref: ref,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown
  }))));
});
SplitterButtonComponent.displayName = 'Pane.SplitterButton';
const SplitterButton = SplitterButtonComponent;

export { SplitterButton };
