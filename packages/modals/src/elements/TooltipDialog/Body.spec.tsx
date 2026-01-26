/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, act } from 'garden-test-utils';
import React from 'react';

import { TooltipDialog } from './TooltipDialog';

describe('TooltipDialog.Body', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Body ref={ref}>content</TooltipDialog.Body>
        </TooltipDialog>
      );
    });

    expect(getByText('content')).toBe(ref.current);
  });
});
