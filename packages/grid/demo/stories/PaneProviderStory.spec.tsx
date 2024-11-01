/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { PaneProviderStory } from './PaneProviderStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<PaneProviderStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('PaneProviderStory Component', () => {
  it('renders default PaneProviderStory', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: []
    });
  });

  it('renders PaneProviderStory with custom totalPanesWidth and totalPanesHeight', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '500px',
      totalPanesHeight: '300px',
      panes: []
    });
  });

  it('renders PaneProviderStory with columnValues and rowValues', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      columnValues: [1, 2],
      rowValues: [1, 2],
      panes: []
    });
  });

  it('renders PaneProviderStory with defaultColumnValues and defaultRowValues', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      defaultColumnValues: [1, 2],
      defaultRowValues: [1, 2],
      panes: []
    });
  });

  it('renders PaneProviderStory with panes containing content', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: [
        {
          content: 'Pane 1',
          splitters: []
        },
        {
          content: 'Pane 2',
          splitters: []
        }
      ]
    });
  });

  it('renders PaneProviderStory with panes containing splitters', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: [
        {
          content: 'Pane 1',
          splitters: [
            {
              layoutKey: 'splitter-1',
              min: 100,
              max: 500
            }
          ]
        }
      ]
    });
  });

  it('renders PaneProviderStory with panes containing splitters and buttons', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: [
        {
          content: 'Pane 1',
          splitters: [
            {
              layoutKey: 'splitter-1',
              min: 100,
              max: 500,
              button: {
                label: 'Toggle',
                placement: 'start'
              }
            }
          ]
        }
      ]
    });
  });

  it('renders PaneProviderStory with multiple panes and splitters', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: [
        {
          content: 'Pane 1',
          splitters: [
            {
              layoutKey: 'splitter-1',
              min: 100,
              max: 500
            }
          ]
        },
        {
          content: 'Pane 2',
          splitters: [
            {
              layoutKey: 'splitter-2',
              min: 200,
              max: 600,
              button: {
                label: 'Expand',
                placement: 'end'
              }
            }
          ]
        }
      ]
    });
  });

  it('renders PaneProviderStory with onChange handler', () => {
    const mockOnChange = jest.fn();
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      onChange: mockOnChange,
      panes: [
        {
          content: 'Pane 1',
          splitters: [
            {
              layoutKey: 'splitter-1',
              min: 100,
              max: 500
            }
          ]
        }
      ]
    });
  });

  it('renders PaneProviderStory with custom gridTemplateColumns and gridTemplateRows', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      columnValues: [1, 2],
      rowValues: [1, 2],
      panes: [
        {
          content: 'Pane 1',
          splitters: []
        }
      ]
    });
  });

  it('renders PaneProviderStory with RTL direction', () => {
    renderAndMatchSnapshot({
      totalPanesWidth: '100%',
      totalPanesHeight: '100%',
      panes: [
        {
          content: 'Pane 1',
          splitters: []
        }
      ],
      theme: { rtl: true }
    });
  });
});
