/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  useSplitter,
  SplitterOrientation,
  SplitterType,
  SplitterPosition
} from '@zendeskgarden/container-splitter';
import useSplitterContext from '../../../utils/useSplitterContext';
import usePaneContext from '../../../utils/usePaneContext';
import { ISplitterProps, ORIENTATION } from '../../../types';
import { StyledPaneSplitter } from '../../../styled';

const orientationToPosition = {
  start: SplitterPosition.TRAILS,
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

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Splitter = forwardRef<HTMLDivElement, ISplitterProps>(
  ({ layoutKey, min, max, orientation, ...props }, ref) => {
    const splitterContext = useSplitterContext();
    const paneContext = usePaneContext();
    const themeContext = useContext(ThemeContext);
    const position = orientationToPosition[orientation!];
    const isRow = orientationToDimension[orientation!] === 'rows';

    const splitterOrientation = paneToSplitterOrientation[orientation!];

    const pixelsPerFr = splitterContext.pixelsPerFr[orientationToDimension[orientation!]];

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
          return splitterContext.setRowValue(
            orientation === 'top',
            layoutKey,
            valueNow / pixelsPerFr
          );
        }

        return splitterContext.setColumnValue(
          orientation === 'start',
          layoutKey,
          valueNow / pixelsPerFr
        );
      },
      valueNow: splitterContext.getLayoutValue(layoutKey, isRow, true)
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
      <StyledPaneSplitter orientation={orientation} ref={ref} {...separatorProps} {...props} />
    );
  }
);

Splitter.displayName = 'Pane.Splitter';

Splitter.propTypes = {
  layoutKey: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(ORIENTATION)
};

Splitter.defaultProps = {
  orientation: 'end'
};
