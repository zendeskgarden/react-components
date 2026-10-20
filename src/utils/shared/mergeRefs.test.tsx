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

describe('mergeRefs cleanup', () => {
  it('runs a callback ref cleanup instead of calling it with null', () => {
    const cleanup = vi.fn();
    const ref = vi.fn(() => cleanup);
    const { unmount } = render(<div ref={mergeRefs([ref])} data-test-id="target" />);

    unmount();

    expect(ref).toHaveBeenCalledTimes(1);
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('calls every ref with null before React 19', async () => {
    vi.resetModules();
    vi.doMock('react', async () => ({
      ...(await vi.importActual<typeof import('react')>('react')),
      version: '18.3.1'
    }));

    const { mergeRefs: mergeRefsReact18 } = await import('./mergeRefs');
    const cleanup = vi.fn();
    const ref = vi.fn(() => cleanup);
    const merged = mergeRefsReact18([ref]);

    expect(merged(document.createElement('div'))).toBeUndefined();

    merged(null);

    expect(ref).toHaveBeenLastCalledWith(null);
    expect(cleanup).not.toHaveBeenCalled();

    vi.doUnmock('react');
  });
});
