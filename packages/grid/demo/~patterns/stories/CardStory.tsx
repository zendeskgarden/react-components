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
import { PaneProvider, Pane } from '@zendeskgarden/react-grid';
import { MD, LG } from '@zendeskgarden/react-typography';
import { IColumns } from './types';

const Row = ({ panes }: { panes: IColumns['panes'] }) => {
  const themeContext = useContext(ThemeContext);
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <PaneProvider
      totalPanesWidth={width}
      totalPanesHeight={height - 20}
      defaultColumnValues={{}}
      defaultRowValues={{
        'row-1': 1,
        'row-2': 1,
        'row-3': 1
      }}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }) => {
        return (
          <div
            ref={ref}
            style={{
              direction: themeContext.rtl ? 'rtl' : 'ltr',
              width: '100%',
              height: '100%',
              display: 'grid',
              gap: '10px',
              gridTemplateRows: getGridTemplateRows(),
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            {panes.map(pane => (
              <Pane key={pane.name}>
                <Pane.Content>
                  <div style={{ padding: '8px' }}>
                    <LG tag="h2">{pane.name}</LG>
                    <MD>{pane.content}</MD>
                  </div>
                </Pane.Content>
                {pane.splitters.map(({ providerId, ...splitter }, splitterIndex) => (
                  <Pane.Splitter
                    providerId={providerId}
                    key={`${pane.name}-${splitter.layoutKey}-${splitterIndex}`}
                    {...splitter}
                  />
                ))}
              </Pane>
            ))}
          </div>
        );
      }}
    </PaneProvider>
  );
};

export const CardStory: Story<{ columns: IColumns[] }> = ({ columns }) => {
  const themeContext = useContext(ThemeContext);
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  // remove 20px from the totalPanesWidth to account for gap size x 2
  // otherwise there will be a difference between cursor and splitter position
  return (
    <PaneProvider
      id="column-layout"
      totalPanesWidth={width - 20}
      totalPanesHeight={height}
      defaultColumnValues={{
        'column-1': 1,
        'column-2': 1,
        'column-3': 1
      }}
      defaultRowValues={{}}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }) => {
        return (
          <div
            ref={ref}
            style={{
              direction: themeContext.rtl ? 'rtl' : 'ltr',
              display: 'grid',
              width: '100%',
              // remove the height of the storybook top bar
              height: 'calc(100vh - 80px)',
              gap: '10px',
              gridTemplateRows: getGridTemplateRows(),
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            {columns.map(column => (
              <Pane key={column.name}>
                {/* Make column overflow visible otherwise splitters are cut off */}
                <Pane.Content style={{ overflow: 'visible' }}>
                  <Row panes={column.panes} />
                </Pane.Content>
              </Pane>
            ))}
          </div>
        );
      }}
    </PaneProvider>
  );
};
