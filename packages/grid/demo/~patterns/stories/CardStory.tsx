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
  const {
    rtl,
    space: { base }
  } = useContext(ThemeContext);
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const gap = base * 3;

  return (
    <PaneProvider
      totalPanesWidth={width}
      totalPanesHeight={height - gap * 2}
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
              direction: rtl ? 'rtl' : 'ltr',
              width: '100%',
              height: '100%',
              display: 'grid',
              gap: `${gap}px`,
              gridTemplateRows: getGridTemplateRows(),
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            {panes.map(pane => (
              <Pane key={pane.name}>
                <Pane.Content>
                  <div style={{ padding: base * 2 }}>
                    <LG tag="h2">{pane.name}</LG>
                    <MD>{pane.content}</MD>
                  </div>
                </Pane.Content>
                {pane.splitters.map(({ providerId, ...splitter }, splitterIndex) => (
                  <Pane.Splitter
                    providerId={providerId}
                    key={`${pane.name}-${splitter.layoutKey}-${splitterIndex}`}
                    {...splitter}
                  >
                    {splitter.button ? (
                      <Pane.SplitterButton
                        label={splitter.button.label}
                        placement={splitter.button.placement}
                      />
                    ) : null}
                  </Pane.Splitter>
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
  const {
    rtl,
    space: { base }
  } = useContext(ThemeContext);
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const gap = base * 3;

  return (
    <PaneProvider
      id="column-layout"
      totalPanesWidth={width - gap * 2}
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
              direction: rtl ? 'rtl' : 'ltr',
              display: 'grid',
              width: '100%',
              // remove the height of the storybook padding
              height: 'calc(100vh - 80px)',
              gap: `${gap}px`,
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
