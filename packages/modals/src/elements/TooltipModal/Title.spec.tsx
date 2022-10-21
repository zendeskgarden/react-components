/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, act } from 'garden-test-utils';
import { TooltipModal } from './TooltipModal';

describe('TooltipModal.Title', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container as HTMLElement}>
          <TooltipModal.Title ref={ref}>title</TooltipModal.Title>
        </TooltipModal>
      );
    });

    expect(getByText('title')).toBe(ref.current);
  });

  it('renders as a <div> by default', async () => {
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container as HTMLElement}>
          <TooltipModal.Title>title</TooltipModal.Title>
        </TooltipModal>
      );
    });

    expect(getByText('title').tagName).toBe('DIV');
  });

  it('renders as a custom element, when passed a tag', async () => {
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container as HTMLElement}>
          <TooltipModal.Title tag="h1">title</TooltipModal.Title>
        </TooltipModal>
      );
    });

    expect(getByText('title').tagName).not.toBe('DIV');
  });
});
