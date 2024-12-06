/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from './componentStyles';

describe('componentStyles', () => {
  const VALUE = 'content: "test";';

  it('returns component styles from the theme as expected', () => {
    const props = { 'data-garden-id': 'test', theme: { components: { test: VALUE } } } as any;
    const result = componentStyles(props);

    expect(result).toBe(VALUE);
  });

  it('returns undefined if no component styles are found', () => {
    const props = { 'data-garden-id': 'test', theme: {} } as any;
    const result = componentStyles(props);

    expect(result).toBeUndefined();
  });

  it('handles component styles provided as a function', () => {
    const fn = jest.fn().mockReturnValue(VALUE);
    const props = { 'data-garden-id': 'test', theme: { components: { test: fn } } } as any;
    const result = componentStyles(props);

    expect(result).toBe(VALUE);
  });

  it('accepts a custom component ID', () => {
    const componentId = 'custom';
    const props = { theme: { components: { [componentId]: VALUE } } } as any;
    const result = componentStyles({ ...props, componentId });

    expect(result).toBe(VALUE);
  });
});
