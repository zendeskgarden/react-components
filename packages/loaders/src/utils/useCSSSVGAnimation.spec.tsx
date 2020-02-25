/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { useCSSSVGAnimation } from './useCSSSVGAnimation';

describe('useCSSSVGAnimation', () => {
  beforeEach(() => {
    document.elementFromPoint = jest.fn().mockReturnValue(document.createElement('svg'));
  });

  it('does not throw when called', () => {
    const Example = () => {
      const result = useCSSSVGAnimation();

      return <div data-test-id="result">{result.toString()}</div>;
    };

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
