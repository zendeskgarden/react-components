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

describe('TooltipDialog.FooterItem', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLSpanElement>();
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Footer>
            <TooltipDialog.FooterItem ref={ref}>content</TooltipDialog.FooterItem>
          </TooltipDialog.Footer>
        </TooltipDialog>
      );
    });

    expect(getByText('content')).toBe(ref.current);
  });
});
