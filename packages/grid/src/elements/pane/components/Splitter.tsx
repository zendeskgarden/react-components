/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useEffect, forwardRef, useMemo } from 'react';
import mergeRefs from 'react-merge-refs';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  useSplitter,
  SplitterOrientation,
  SplitterType,
  SplitterPosition
} from '@zendeskgarden/container-splitter';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext';
import usePaneContext from '../../../utils/usePaneContext';
import { ISplitterProps, ORIENTATION } from '../../../types';
import { StyledPaneSplitter } from '../../../styled';
import { PaneSplitterContext } from '../../../utils/usePaneSplitterContext';

const orientationToPosition = {
  start: SplitterPosition.LEADS,
  end: SplitterPosition.TRAILS,
  top: SplitterPosition.LEADS,
  bottom: SplitterPosition.TRAILS
};

const paneToSplitterOrientation = {
  start: SplitterOrientation.VERTICAL,
  end: SplitterOrientation.VERTICAL,
  top: SplitterOrientation.HORIZONTAL,
  bottom: SplitterOrientation.HORIZONTAL
};

const orientationToDimension: Record<string, 'columns' | 'rows'> = {
  start: 'columns',
  end: 'columns',
  top: 'rows',
  bottom: 'rows'
};

const SplitterComponent = forwardRef<HTMLDivElement, ISplitterProps>(
  ({ providerId, layoutKey, min, max, orientation, ...props }, ref) => {
    const paneProviderContext = usePaneProviderContextData(providerId);
    const paneContext = usePaneContext();
    const themeContext = useContext(ThemeContext);
    const position = orientationToPosition[orientation!];
    const isRow = orientationToDimension[orientation!] === 'rows';

    const splitterOrientation = paneToSplitterOrientation[orientation!];

    const pixelsPerFr = paneProviderContext
      ? paneProviderContext.pixelsPerFr[orientationToDimension[orientation!]]
      : 0;

    const value = isRow
      ? paneProviderContext && paneProviderContext.getRowValue(layoutKey, true)
      : paneProviderContext && paneProviderContext.getColumnValue(layoutKey, true);

    const valueInFr = isRow
      ? paneProviderContext && paneProviderContext.getRowValue(layoutKey)
      : paneProviderContext && paneProviderContext.getColumnValue(layoutKey);

    const { getSeparatorProps, getPrimaryPaneProps } = useSplitter({
      type: SplitterType.VARIABLE,
      orientation: splitterOrientation,
      position,
      min: min * pixelsPerFr,
      max: max * pixelsPerFr,
      rtl: themeContext.rtl,
      environment: window,
      onChange: valueNow => {
        if (isRow) {
          return (
            paneProviderContext &&
            paneProviderContext.setRowValue(
              orientation === 'top',
              layoutKey,
              valueNow / pixelsPerFr
            )
          );
        }

        return (
          paneProviderContext &&
          paneProviderContext.setColumnValue(
            orientation === 'start',
            layoutKey,
            valueNow / pixelsPerFr
          )
        );
      },
      valueNow: value
    });

    useEffect(() => {
      if (!paneContext.id) {
        paneContext.setId(getPrimaryPaneProps().id);
      }
    }, [paneContext, getPrimaryPaneProps]);

    const separatorProps = getSeparatorProps({
      'aria-controls': paneContext.id
    });

    return (
      <PaneSplitterContext.Provider
        value={useMemo(
          () => ({ orientation, layoutKey, min, max, valueNow: valueInFr, isRow }),
          [orientation, layoutKey, min, max, valueInFr, isRow]
        )}
      >
        <StyledPaneSplitter
          orientation={orientation}
          {...separatorProps}
          {...props}
          ref={mergeRefs([separatorProps.ref, ref])}
        />
      </PaneSplitterContext.Provider>
    );
  }
);

SplitterComponent.displayName = 'Pane.Splitter';

SplitterComponent.propTypes = {
  layoutKey: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(ORIENTATION)
};

SplitterComponent.defaultProps = {
  orientation: 'end'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Splitter = SplitterComponent;
