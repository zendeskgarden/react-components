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
import { ARRAY_ORIENTATION, DIMENSIONS, ISplitterProps } from '../../../types';

import { StyledPaneItem, StyledSeparatorContainer, StyledSeparator } from '../../../styled';

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

const orientationToDimension = {
  start: 'columns',
  end: 'columns',
  top: 'rows',
  bottom: 'rows'
};

const SplitterComponent = forwardRef<HTMLDivElement, ISplitterProps>(
  (
    { layoutKey, min, max, orientation, isFixed, isLeading, isTrailing, environment, ...props },
    ref
  ) => {
    const splitterContext = useSplitterContext();
    const paneContext = usePaneContext();
    const themeContext = useContext(ThemeContext);
    let position;

    if (isLeading === true) {
      position = SplitterPosition.LEADS;
    } else if (isTrailing === true) {
      position = SplitterPosition.TRAILS;
    } else {
      position = orientationToPosition[orientation!];
    }

    const splitterOrientation = paneToSplitterOrientation[orientation!];

    const pixelsPerFr =
      splitterContext.pixelsPerFr[orientationToDimension[orientation!] as DIMENSIONS];

    const { getSeparatorProps, getPrimaryPaneProps } = useSplitter({
      type: isFixed ? SplitterType.FIXED : SplitterType.VARIABLE,
      orientation: splitterOrientation,
      position,
      min: min * pixelsPerFr,
      max: max * pixelsPerFr,
      rtl: themeContext.rtl,
      environment: environment!,
      onChange: valueNow => {
        switch (orientationToDimension[orientation!]) {
          case 'rows':
            splitterContext.setRowValue(orientation === 'top', layoutKey, valueNow / pixelsPerFr);
            break;
          case 'columns':
            splitterContext.setColumnValue(
              orientation === 'start',
              layoutKey,
              valueNow / pixelsPerFr
            );
            break;
        }
      },
      valueNow: splitterContext.getLayoutValue(
        orientationToDimension[orientation!] as DIMENSIONS,
        layoutKey,
        'px'
      )
    });

    useEffect(() => {
      if (!paneContext.id) {
        paneContext.setId(getPrimaryPaneProps().id);
      }
    }, [paneContext, getPrimaryPaneProps]);

    const isHorizontal = paneToSplitterOrientation[orientation!] === SplitterOrientation.HORIZONTAL;

    const separatorProps = getSeparatorProps({
      'aria-controls': paneContext.id
    });

    return (
      <StyledPaneItem data-test-id="splitter-pane-item" ref={ref} paneOrientation={orientation}>
        <StyledSeparatorContainer isHorizontal={isHorizontal} {...separatorProps} {...props}>
          <StyledSeparator isHorizontal={isHorizontal} />
        </StyledSeparatorContainer>
      </StyledPaneItem>
    );
  }
);

SplitterComponent.displayName = 'Pane.Splitter';

SplitterComponent.propTypes = {
  layoutKey: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(ARRAY_ORIENTATION),
  isLeading: PropTypes.bool,
  isTrailing: PropTypes.bool,
  environment: PropTypes.any,
  isFixed: PropTypes.bool
};

SplitterComponent.defaultProps = {
  orientation: 'end',
  isFixed: false,
  environment: window
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Splitter = SplitterComponent;
