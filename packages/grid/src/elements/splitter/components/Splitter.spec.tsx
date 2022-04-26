/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject } from 'react';
import { render } from 'garden-test-utils';
import { PaneProvider } from '../PaneProvider';
import { Pane } from '../Pane';
import { Splitter } from './Splitter';

const UncontrolledTestSplitter = ({ splitterRef }: { splitterRef?: RefObject<HTMLDivElement> }) => {
  return (
    <PaneProvider
      totalPanesWidth={1}
      totalPanesHeight={1}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{}}
    >
      {() => (
        <Pane>
          <Splitter ref={splitterRef} layoutKey="a" min={0} max={1} />
        </Pane>
      )}
    </PaneProvider>
  );
};

describe('Splitter', () => {
  it('is rendered as a div', () => {
    const { getByRole } = render(<UncontrolledTestSplitter />);

    expect(getByRole('separator').nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { queryByTestId } = render(<UncontrolledTestSplitter splitterRef={ref} />);

    expect(queryByTestId('splitter-pane-item')).toBe(ref.current);
  });
});
