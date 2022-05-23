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
    const props = {};

    renderHook(() => useText(Component, props, 'test', 'value'));

    expect(props).toStrictEqual({ test: 'value' });
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
      const { result } = renderHook(() => useText(Component, {}, 'children', 'value'));

      expect(result.error?.message).toBeDefined();
    });

    it('throws an error when a text prop is explicitly unset', () => {
      const { result } = renderHook(() => useText(Component, { test: null }, 'test', 'value'));

      expect(result.error?.message).toBeDefined();
    });

    it('throws an error when a text prop is explicitly empty', () => {
      const { result } = renderHook(() => useText(Component, { test: '' }, 'test', 'value'));

      expect(result.error?.message).toBeDefined();
    });
  });
});
