/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, screen } from '@testing-library/react';
import { createRef, type MutableRefObject } from 'react';

import { mergeRefs } from './mergeRefs';

describe('mergeRefs', () => {
  it('sets an object ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<div ref={mergeRefs([ref])} data-test-id="target" />);

    expect(ref.current).toBe(screen.getByTestId('target'));
  });

  it('calls a callback ref', () => {
    const ref = vi.fn();

    render(<div ref={mergeRefs([ref])} data-test-id="target" />);

    expect(ref).toHaveBeenCalledWith(screen.getByTestId('target'));
  });

  it('sets every ref', () => {
    const objectRef = createRef<HTMLDivElement>();
    const callbackRef = vi.fn();

    render(<div ref={mergeRefs([objectRef, callbackRef])} data-test-id="target" />);

    const target = screen.getByTestId('target');

    expect(objectRef.current).toBe(target);
    expect(callbackRef).toHaveBeenCalledWith(target);
  });

  it('ignores a missing ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<div ref={mergeRefs([undefined, null, ref])} data-test-id="target" />);

    expect(ref.current).toBe(screen.getByTestId('target'));
  });

  it('clears every ref on unmount', () => {
    const objectRef = createRef<HTMLDivElement>();
    const callbackRef = vi.fn();
    const { unmount } = render(
      <div ref={mergeRefs([objectRef, callbackRef])} data-test-id="target" />
    );

    unmount();

    expect(objectRef.current).toBeNull();
    expect(callbackRef).toHaveBeenLastCalledWith(null);
  });

  it('writes to a mutable ref object', () => {
    const ref: MutableRefObject<string | null> = { current: null };

    mergeRefs<string>([ref])('value');

    expect(ref.current).toBe('value');
  });
});
