/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { RefObject } from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PaneProvider } from '../PaneProvider';
import { Pane } from '../Pane';
import { Splitter } from './Splitter';
import { SplitterButton } from './SplitterButton';

import { COMPONENT_ID } from '../../../styled/pane/StyledPaneSplitterButton';

const UncontrolledTestSplitter = ({ buttonRef }: { buttonRef?: RefObject<HTMLButtonElement> }) => {
  return (
    <PaneProvider
      totalPanesWidth={1}
      totalPanesHeight={1}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{}}
    >
      {() => (
        <Pane>
          <Splitter layoutKey="a" min={0} max={1} orientation="end">
            <SplitterButton ref={buttonRef} label="toggle a" />
          </Splitter>
        </Pane>
      )}
    </PaneProvider>
  );
};

describe('SplitterButton', () => {
  it('is rendered as a button', () => {
    const { getByLabelText } = render(<UncontrolledTestSplitter />);

    expect(getByLabelText('toggle a').nodeName).toBe('BUTTON');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<UncontrolledTestSplitter buttonRef={ref} />);

    expect(ref.current?.getAttribute('aria-label')).toBe('toggle a');
  });
  it('is rendered as rtl', () => {
    const { getByLabelText } = renderRtl(<UncontrolledTestSplitter />);

    expect(getByLabelText('toggle a').querySelector('svg')).toBeDefined();
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { getByLabelText } = render(<UncontrolledTestSplitter />);

      expect(getByLabelText('toggle a')).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });
  });
});
