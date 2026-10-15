/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { TooltipDialog } from './TooltipDialog';

describe('TooltipDialog.Footer', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLDivElement>();
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Footer ref={ref}>content</TooltipDialog.Footer>
        </TooltipDialog>
      );
    });

    expect(getByText('content')).toBe(ref.current);
  });

  it('renders default styling', async () => {
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Footer>content</TooltipDialog.Footer>
        </TooltipDialog>
      );
    });

    expect(getByText('content')).toHaveStyleRule('padding-top', DEFAULT_THEME.space.sm);
  });
});
