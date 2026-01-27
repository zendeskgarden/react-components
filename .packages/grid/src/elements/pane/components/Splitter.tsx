/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useSplitter } from '@zendeskgarden/container-splitter';
import { useDocument, useText } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, forwardRef, useMemo, useRef, HTMLAttributes } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';

import { StyledPaneSplitter } from '../../../styled';
import { ISplitterProps, ORIENTATION } from '../../../types';
import usePaneContext from '../../../utils/usePaneContext';
import { usePaneProviderContextData } from '../../../utils/usePaneProviderContext';
import { PaneSplitterContext } from '../../../utils/usePaneSplitterContext';

const paneToSplitterOrientation: Record<string, 'vertical' | 'horizontal'> = {
  start: 'vertical',
  end: 'vertical',
  top: 'horizontal',
  bottom: 'horizontal'
};

const orientationToDimension: Record<string, 'columns' | 'rows'> = {
  start: 'columns',
  end: 'columns',
  top: 'rows',
  bottom: 'rows'
};

const SplitterComponent = forwardRef<HTMLDivElement, ISplitterProps>(
  (
    {
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
    },
    ref
  ) => {
    const paneProviderContext = usePaneProviderContextData(providerId);
    const paneContext = usePaneContext();
    const themeContext = useContext(ThemeContext);
    const environment = useDocument(themeContext);
    const isRow = orientationToDimension[orientation!] === 'rows';
    const separatorRef = useRef<HTMLDivElement>(null);

    const splitterOrientation = paneToSplitterOrientation[orientation || 'end'];

    const pixelsPerFr = paneProviderContext
      ? paneProviderContext.pixelsPerFr[orientationToDimension[orientation!]]
      : 0;

    const value = isRow
      ? paneProviderContext?.getRowValue(layoutKey, true)
      : paneProviderContext?.getColumnValue(layoutKey, true);

    const valueInFr = isRow
      ? paneProviderContext?.getRowValue(layoutKey)
      : paneProviderContext?.getColumnValue(layoutKey);

    const { getSeparatorProps, getPrimaryPaneProps } = useSplitter({
      orientation: splitterOrientation,
      isLeading: orientation === 'start' || orientation === 'top',
      min: min * pixelsPerFr,
      max: max * pixelsPerFr,
      rtl: themeContext.rtl,
      isFixed,
      environment,
      onChange: valueNow => {
        if (isRow) {
          return paneProviderContext?.setRowValue(
            orientation === 'top',
            layoutKey,
            valueNow / pixelsPerFr
          );
        }

        return paneProviderContext?.setColumnValue(
          orientation === 'start',
          layoutKey,
          valueNow / pixelsPerFr
        );
      },
      valueNow: value,
      separatorRef
    });

    useEffect(() => {
      if (!paneContext.id) {
        paneContext.setId(getPrimaryPaneProps().id!);
      }
    }, [paneContext, getPrimaryPaneProps]);

    const ariaLabel = useText(
      SplitterComponent,
      props,
      'aria-label',
      `${splitterOrientation} splitter`
    );

    const separatorProps = getSeparatorProps({
      'aria-controls': paneContext.id,
      'aria-label': ariaLabel!,
      /* allow following handlers to be composed */
      onMouseDown,
      onTouchStart,
      onKeyDown,
      onClick
    }) as HTMLAttributes<HTMLDivElement>;

    const size = isRow ? separatorRef.current?.clientWidth : separatorRef.current?.clientHeight;

    return (
      <PaneSplitterContext.Provider
        value={useMemo(
          () => ({ orientation, layoutKey, min, max, valueNow: valueInFr, size, isRow }),
          [orientation, layoutKey, min, max, valueInFr, size, isRow]
        )}
      >
        <StyledPaneSplitter
          $isFixed={isFixed}
          $orientation={orientation}
          {...separatorProps}
          {...props}
          ref={mergeRefs([separatorRef, ref])}
        />
        {children /* Splitter.Button is the only valid child */}
      </PaneSplitterContext.Provider>
    );
  }
);

SplitterComponent.displayName = 'Pane.Splitter';

SplitterComponent.propTypes = {
  layoutKey: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(ORIENTATION),
  isFixed: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Splitter = SplitterComponent;
