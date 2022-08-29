/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useText } from './useText';

describe('useText()', () => {
  const Component = () => <div />;

  Component.displayName = 'Component';

  it('sets default text if prop is not defined', () => {
    let text;

    renderHook(() => {
      text = useText(Component, {}, 'test', 'value');
    });

    expect(text).toBe('value');
  });

  it('sets default text if prop is not defined and re-renders when updated', () => {
    let text;
    let defaultValue = 'value';

    const { rerender } = renderHook(() => {
      text = useText(Component, {}, 'test', defaultValue);
    });

    expect(text).toBe('value');

    defaultValue = 'another value';

    rerender();

    expect(text).toBe('another value');
  });

  it('sets the text from the props and name passed as arguments to the hook', () => {
    let text;
    let label = 'labeled';

    const { rerender } = renderHook(() => {
      text = useText(Component, { label }, 'label', 'value');
    });

    expect(text).toBe('labeled');

    label = 'labeled-alternative';

    rerender();

    expect(text).toBe('labeled-alternative');
  });

  describe('Warnings', () => {
    const environment = process.env.NODE_ENV;
    const consoleWarning = console.warn;

    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      console.warn = jest.fn();
    });

    afterEach(() => {
      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });

    it('logs a warning if text prop is not defined', () => {
      const spy = jest.spyOn(console, 'warn');

      renderHook(() => useText(Component, {}, 'test', 'value'));

      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0]).toStrictEqual(expect.stringContaining('<Component>'));
    });

    it('does not log a warning in production', () => {
      const spy = jest.spyOn(console, 'warn');

      process.env.NODE_ENV = 'production';
      renderHook(() => useText(Component, {}, 'test', 'value'));

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('Errors', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('throws an error when applied to `children`', () => {
      expect(() => useText(Component, {}, 'children', 'value')).toThrow();
    });

    it('throws an error when a text prop is unset', () => {
      expect(() => useText(Component, { test: null }, 'test', 'value')).toThrow();
    });

    it('throws an error when a text prop is empty', () => {
      expect(() => useText(Component, { test: '' }, 'test', 'value')).toThrow();
    });
  });
});
