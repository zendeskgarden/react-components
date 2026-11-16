/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, memo } from 'react';
import { styled } from 'styled-components';

import { getGardenType, isGardenType, withGardenType } from './gardenType';

describe('gardenType', () => {
  const Marked = withGardenType(() => <div />, 'test.marked');

  it('returns the marked component', () => {
    const Component = () => <div />;

    expect(withGardenType(Component, 'test.same')).toBe(Component);
  });

  it('resolves a marked component', () => {
    expect(getGardenType(Marked)).toBe('test.marked');
  });

  it('resolves through wrappers', () => {
    const Render = forwardRef<HTMLDivElement>((_props, ref) => <div ref={ref} />);

    Render.displayName = 'Render';
    const Forwarded = withGardenType(Render, 'test.forwarded');

    expect(getGardenType(memo(Marked))).toBe('test.marked');
    expect(getGardenType(memo(memo(Marked)))).toBe('test.marked');
    expect(getGardenType(memo(Forwarded))).toBe('test.forwarded');
    expect(getGardenType(styled(Marked)``)).toBe('test.marked');
    expect(getGardenType(styled(memo(Marked))``)).toBe('test.marked');
  });

  it('resolves a marker set by another copy of the package', () => {
    const Component = () => <div />;
    const Foreign = Object.assign(Component, {
      [Symbol.for('zendeskgarden.type')]: 'test.foreign'
    });

    expect(getGardenType(Foreign)).toBe('test.foreign');
  });

  it('ignores unmarked components and non-components', () => {
    const Plain = () => <div />;

    expect(getGardenType(Plain)).toBeUndefined();
    expect(getGardenType(memo(Plain))).toBeUndefined();
    expect(getGardenType('div')).toBeUndefined();
    expect(getGardenType(undefined)).toBeUndefined();
    expect(getGardenType(null)).toBeUndefined();
  });

  it('does not loop on a cyclic wrapper chain', () => {
    const cyclic: { type?: unknown } = {};

    cyclic.type = cyclic;

    expect(getGardenType(cyclic)).toBeUndefined();
  });

  it('identifies an element of a type', () => {
    expect(isGardenType(<Marked />, 'test.marked')).toBe(true);
    expect(isGardenType(<Marked />, 'test.other')).toBe(false);
    expect(isGardenType(<div />, 'test.marked')).toBe(false);
    expect(isGardenType('text', 'test.marked')).toBe(false);
    expect(isGardenType(null, 'test.marked')).toBe(false);
  });
});
