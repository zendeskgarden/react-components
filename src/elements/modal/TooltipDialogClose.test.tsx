/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import { TooltipDialog } from './TooltipDialog';

describe('TooltipDialog.Close', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLButtonElement>();
    const { container, getByRole, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Close ref={ref} aria-label="Close" />
        </TooltipDialog>
      );
    });

    expect(getByRole('button')).toBe(ref.current);
  });
});
