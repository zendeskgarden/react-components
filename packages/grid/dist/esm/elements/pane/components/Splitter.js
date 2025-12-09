/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef, useContext, useRef, useEffect, useMemo } from 'react';
import { mergeRefs } from 'react-merge-refs';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useSplitter } from '@zendeskgarden/container-splitter';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext.js';
import usePaneContext from '../../../utils/usePaneContext.js';
import { ORIENTATION } from '../../../types/index.js';
import '../../../styled/StyledCol.js';
import '../../../styled/StyledGrid.js';
import '../../../styled/StyledRow.js';
import '../../../styled/pane/StyledPane.js';
import '../../../styled/pane/StyledPaneContent.js';
import { StyledPaneSplitter } from '../../../styled/pane/StyledPaneSplitter.js';
import '../../../styled/pane/StyledPaneSplitterButton.js';
import '../../../styled/pane/StyledPaneSplitterButtonContainer.js';
import { PaneSplitterContext } from '../../../utils/usePaneSplitterContext.js';
import { useDocument, useText } from '@zendeskgarden/react-theming';

const paneToSplitterOrientation = {
  start: 'vertical',
  end: 'vertical',
  top: 'horizontal',
  bottom: 'horizontal'
};
const orientationToDimension = {
  start: 'columns',
  end: 'columns',
  top: 'rows',
  bottom: 'rows'
};
const SplitterComponent = forwardRef(({
  children,
  providerId,
  layoutKey,
  min,
  max,
  orientation = 'end',
  isFixed,
  onMouseDown,
  onTouchStart,
  onKeyDown,
  onClick,
  ...props
}, ref) => {
  const paneProviderContext = usePaneProviderContextData(providerId);
  const paneContext = usePaneContext();
  const themeContext = useContext(ThemeContext);
  const environment = useDocument(themeContext);
  const isRow = orientationToDimension[orientation] === 'rows';
  const separatorRef = useRef(null);
  const splitterOrientation = paneToSplitterOrientation[orientation || 'end'];
  const pixelsPerFr = paneProviderContext ? paneProviderContext.pixelsPerFr[orientationToDimension[orientation]] : 0;
  const value = isRow ? paneProviderContext?.getRowValue(layoutKey, true) : paneProviderContext?.getColumnValue(layoutKey, true);
  const valueInFr = isRow ? paneProviderContext?.getRowValue(layoutKey) : paneProviderContext?.getColumnValue(layoutKey);
  const {
    getSeparatorProps,
    getPrimaryPaneProps
  } = useSplitter({
    orientation: splitterOrientation,
    isLeading: orientation === 'start' || orientation === 'top',
    min: min * pixelsPerFr,
    max: max * pixelsPerFr,
    rtl: themeContext.rtl,
    isFixed,
    environment,
    onChange: valueNow => {
      if (isRow) {
        return paneProviderContext?.setRowValue(orientation === 'top', layoutKey, valueNow / pixelsPerFr);
      }
      return paneProviderContext?.setColumnValue(orientation === 'start', layoutKey, valueNow / pixelsPerFr);
    },
    valueNow: value,
    separatorRef
  });
  useEffect(() => {
    if (!paneContext.id) {
      paneContext.setId(getPrimaryPaneProps().id);
    }
  }, [paneContext, getPrimaryPaneProps]);
  const ariaLabel = useText(SplitterComponent, props, 'aria-label', `${splitterOrientation} splitter`);
  const separatorProps = getSeparatorProps({
    'aria-controls': paneContext.id,
    'aria-label': ariaLabel,
    onMouseDown,
    onTouchStart,
    onKeyDown,
    onClick
  });
  const size = isRow ? separatorRef.current?.clientWidth : separatorRef.current?.clientHeight;
  return React.createElement(PaneSplitterContext.Provider, {
    value: useMemo(() => ({
      orientation,
      layoutKey,
      min,
      max,
      valueNow: valueInFr,
      size,
      isRow
    }), [orientation, layoutKey, min, max, valueInFr, size, isRow])
  }, React.createElement(StyledPaneSplitter, Object.assign({
    $isFixed: isFixed,
    $orientation: orientation
  }, separatorProps, props, {
    ref: mergeRefs([separatorRef, ref])
  })), children );
});
SplitterComponent.displayName = 'Pane.Splitter';
SplitterComponent.propTypes = {
  layoutKey: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(ORIENTATION),
  isFixed: PropTypes.bool
};
const Splitter = SplitterComponent;

export { Splitter };
