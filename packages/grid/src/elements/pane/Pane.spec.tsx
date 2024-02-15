/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { act, render } from 'garden-test-utils';
import { Content } from './components/Content';
import { Splitter } from './components/Splitter';
import { Pane } from './Pane';
import { PaneProvider } from './PaneProvider';

type IMockResizeObserverPolyfillReturnValue = {
  ResizeObserver: (cb: () => void) => any;
};

// '@juggle/resize-observer' is the polyfill used by 'use-resize-observer'
// we tap into the polyfilled ResizeObserver to trigger the useResizeObserver hook
// this way we can test when the Pane is collapsed and ensure the Pane.Content is hidden
jest.mock<IMockResizeObserverPolyfillReturnValue>('@juggle/resize-observer', () => ({
  ResizeObserver: function ResizeObserver(cb: () => void) {
    const o = jest.requireActual('@juggle/resize-observer');

    // @ts-expect-error resize observer callback is an non-standard method added for testing
    return new o.ResizeObserver((window.resizeObserverCallback = jest.fn(cb)));
  }
}));

const UncontrolledTestSplitter = () => {
  return (
    <PaneProvider
      totalPanesWidth={1}
      totalPanesHeight={1}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{}}
    >
      {() => (
        <Pane>
          <Content>Content</Content>
          <Splitter layoutKey="a" min={0} max={1} />
          <Splitter layoutKey="b" min={0} max={1} />
        </Pane>
      )}
    </PaneProvider>
  );
};

describe('Pane', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Pane />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Pane ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('should set consistent aria-controls id', () => {
    const { getAllByRole } = render(<UncontrolledTestSplitter />);

    const [firstSplitter, secondSplitter] = getAllByRole('separator');

    expect(firstSplitter.getAttribute('aria-controls')).toBe(
      secondSplitter.getAttribute('aria-controls')
    );
  });

  it("doesn't display content when pane is collapsed", () => {
    const { getByText } = render(<UncontrolledTestSplitter />);

    act(() => {
      // @ts-expect-error resize observer callback is an non-standard method added for testing
      window.resizeObserverCallback([
        {
          contentBoxSize: {
            blockSize: 10,
            inlineSize: 10
          }
        }
      ]);
    });

    expect(getByText('Content')).not.toHaveAttribute('hidden');

    // collapse the height (vertical dimension)
    act(() => {
      // @ts-expect-error resize observer callback is an non-standard method added for testing
      window.resizeObserverCallback([
        {
          contentBoxSize: {
            blockSize: 0,
            inlineSize: 10
          }
        }
      ]);
    });

    expect(getByText('Content')).toHaveAttribute('hidden');
    expect(getByText('Content')).toHaveStyleRule('display', 'none', {
      modifier: '&[hidden]'
    });

    // collapse the width (horizontal dimension)
    act(() => {
      // @ts-expect-error resize observer callback is an non-standard method added for testing
      window.resizeObserverCallback([
        {
          contentBoxSize: {
            blockSize: 10,
            inlineSize: 0
          }
        }
      ]);
    });

    expect(getByText('Content')).toHaveAttribute('hidden');
    expect(getByText('Content')).toHaveStyleRule('display', 'none', {
      modifier: '&[hidden]'
    });
  });
});
