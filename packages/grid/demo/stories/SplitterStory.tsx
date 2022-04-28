/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { PaneProvider, IPaneProvider, Pane } from '@zendeskgarden/react-grid';
import { ISplitterPane } from './types';

const StyledPanes = styled.div`
  display: grid;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
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
  return (
    <PaneProvider
      totalPanesWidth={totalPanesWidth}
      totalPanesHeight={totalPanesHeight}
      columnValues={columnValues}
      rowValues={rowValues}
      defaultColumnValues={defaultColumnValues}
      defaultRowValues={defaultRowValues}
      onChange={handleValueChange}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }) => {
        return (
          <StyledPanes
            style={{
              width: totalPanesWidth,
              height: totalPanesHeight,
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