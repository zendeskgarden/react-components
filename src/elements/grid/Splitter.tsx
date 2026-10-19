/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useSplitter } from '@zendeskgarden/container-splitter';
import PropTypes from 'prop-types';
import {
  useContext,
  useEffect,
  forwardRef,
  useMemo,
  useRef,
  HTMLAttributes,
  RefObject
} from 'react';
import { ThemeContext } from 'styled-components';

import { PaneSplitterProvider } from '../../context/grid/PaneSplitterContext';
import { usePaneContext } from '../../hooks/grid/usePaneContext';
import { usePaneProviderContextData } from '../../hooks/grid/usePaneProviderContext';
import DEFAULT_THEME from '../../theming/elements/theme';
import { useDocument } from '../../theming/utils/useDocument';
import { useText } from '../../theming/utils/useText';
import { ISplitterProps, ORIENTATION } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledPaneSplitter } from '../../views/grid/StyledPaneSplitter';
import { COMPONENT_IDS } from '../utils';

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
    const themeContext = useContext(ThemeContext) || DEFAULT_THEME;
    const environment = useDocument(themeContext);
    const isRow = orientationToDimension[orientation!] === 'rows';
    const separatorRef = useRef<HTMLDivElement>(null);

    const splitterOrientation = paneToSplitterOrientation[orientation || 'end'];

    const pixelsPerFr = paneProviderContext
      ? paneProviderContext.pixelsPerFr[orientationToDimension[orientation!]!]
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
      separatorRef: separatorRef as RefObject<HTMLElement>
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
      <PaneSplitterProvider
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
          data-garden-id={COMPONENT_IDS['pane.splitter']}
          data-garden-version={PACKAGE_VERSION}
          ref={mergeRefs([separatorRef, ref])}
        />
        {children /* Splitter.Button is the only valid child */}
      </PaneSplitterProvider>
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
