/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { PaneProvider, IPaneProviderProps, Pane } from '@zendeskgarden/react-grid';
import React from 'react';
import styled from 'styled-components';

import { ISplitterPane } from './types';

const StyledPanes = styled.div`
  display: grid;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
`;

interface IArgs extends IPaneProviderProps {
  panes: ISplitterPane[];
}

export const PaneProviderStory: StoryFn<IArgs> = ({
  totalPanesWidth,
  totalPanesHeight,
  columnValues,
  rowValues,
  defaultColumnValues,
  defaultRowValues,
  onChange,
  panes
}) => (
  <PaneProvider
    totalPanesWidth={totalPanesWidth}
    totalPanesHeight={totalPanesHeight}
    columnValues={columnValues}
    rowValues={rowValues}
    defaultColumnValues={defaultColumnValues}
    defaultRowValues={defaultRowValues}
    onChange={onChange}
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
              {pane.splitters.map(({ button, ...splitter }) => (
                <Pane.Splitter key={splitter.layoutKey} {...splitter}>
                  {!!button && (
                    <Pane.SplitterButton label={button.label} placement={button.placement} />
                  )}
                </Pane.Splitter>
              ))}
            </Pane>
          ))}
        </StyledPanes>
      );
    }}
  </PaneProvider>
);
