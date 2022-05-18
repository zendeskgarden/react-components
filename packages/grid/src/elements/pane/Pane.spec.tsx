/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Splitter } from './components/Splitter';
import { Pane } from './Pane';
import { PaneProvider } from './PaneProvider';

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
});
