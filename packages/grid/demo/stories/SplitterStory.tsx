/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import useResizeObserver from 'use-resize-observer';
import { Story } from '@storybook/react';
import { ThemeContext } from 'styled-components';
import {
  PaneProvider,
  IPaneProvider,
  Pane,
  IPaneProviderReturnProps
} from '@zendeskgarden/react-grid';
import { ISplitterPane } from './types';

interface IArgs extends IPaneProvider {
  handleValueChange?: IPaneProvider['onChange'];
  text: string[];
  panes: [ISplitterPane];
}

export const SplitterStory: Story<IArgs> = ({
  totalPanesWidth,
  totalPanesHeight,
  columnValues,
  rowValues,
  defaultColumnValues,
  defaultRowValues,
  handleValueChange,
  panes,
  text
}) => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const themeContext = useContext(ThemeContext);

  return (
    <PaneProvider
      totalPanesWidth={totalPanesWidth ? totalPanesWidth : width}
      totalPanesHeight={totalPanesWidth ? totalPanesHeight : height}
      columnValues={columnValues}
      rowValues={rowValues}
      defaultColumnValues={defaultColumnValues}
      defaultRowValues={defaultRowValues}
      onChange={handleValueChange}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }: IPaneProviderReturnProps) => {
        return (
          <div
            ref={ref}
            style={{
              direction: themeContext.rtl ? 'rtl' : 'ltr',
              display: 'grid',
              width: '100%',
              height: '90vh',
              gridTemplateRows: getGridTemplateRows(),
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            {panes.map((pane, index) => (
              <Pane key={pane.name}>
                <Pane.Content
                  style={{
                    overflow: 'auto'
                  }}
                >
                  <div style={{ height: '0px' }}>
                    <p>{pane.name}</p>
                    <p>{text[index]}</p>
                  </div>
                </Pane.Content>
                {pane.splitters.map(splitter => (
                  <Pane.Splitter key={splitter.layoutKey} {...splitter} />
                ))}
              </Pane>
            ))}
          </div>
        );
      }}
    </PaneProvider>
  );
};
