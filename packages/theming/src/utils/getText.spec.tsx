/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getText } from './getText';

describe('useText()', () => {
  const Component = () => <div />;

  Component.displayName = 'Component';

  it('sets default text if prop is not defined', () => {
    const text = getText(Component, {}, 'test', 'value');

    expect(text).toBe('value');
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

      getText(Component, {}, 'test', 'value');

      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0]).toStrictEqual(expect.stringContaining('<Component>'));
    });

    it('does not log a warning in production', () => {
      const spy = jest.spyOn(console, 'warn');

      process.env.NODE_ENV = 'production';
      getText(Component, {}, 'test', 'value');

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
      expect(() => getText(Component, {}, 'children', 'value')).toThrow();
    });

    it('throws an error when a text prop is unset', () => {
      expect(() => getText(Component, { test: null }, 'test', 'value')).toThrow();
    });

    it('throws an error when a text prop is empty', () => {
      expect(() => getText(Component, { test: '' }, 'test', 'value')).toThrow();
    });
  });
});
