/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import { Story } from '@storybook/react';
import {
  PaneProvider,
  IPaneProvider,
  Pane,
  IPaneProviderReturnProps
} from '@zendeskgarden/react-grid';
import { ISplitterPane } from './types';

const StyledPanes = styled.div`
  display: grid;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  width: 100%;
  height: calc(100vh - 80px);
`;

interface IArgs extends IPaneProvider {
  handleValueChange?: IPaneProvider['onChange'];
  panes: ISplitterPane[];
}

export const SplitterStory: Story<IArgs> = ({
  totalPanesWidth,
  totalPanesHeight,
  columnValues,
  rowValues,
  defaultColumnValues,
  defaultRowValues,
  handleValueChange,
  panes
}) => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

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
          <StyledPanes
            ref={ref}
            style={{
              gridTemplateRows: getGridTemplateRows(),
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            {panes.map((pane, index) => (
              <Pane key={index}>
                <Pane.Content>{pane.content}</Pane.Content>
                {pane.splitters.map(splitter => (
                  <Pane.Splitter key={splitter.layoutKey} {...splitter} />
                ))}
              </Pane>
            ))}
          </StyledPanes>
        );
      }}
    </PaneProvider>
  );
};
