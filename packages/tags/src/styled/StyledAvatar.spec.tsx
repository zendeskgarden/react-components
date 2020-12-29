/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledAvatar } from './StyledAvatar';

describe('StyledAvatar', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledAvatar>
        <img alt="" />
      </StyledAvatar>
    );

    expect(container.firstChild!.nodeName).toBe('IMG');
  });

  it('successfully renders child icon', () => {
    const { getByTestId } = render(
      <StyledAvatar>
        <img alt="" data-test-id="icon" />
      </StyledAvatar>
    );

    expect(getByTestId('icon')).not.toBeNull();
  });

  describe('Invalid', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('throws if rendered with no child', () => {
      expect(() => {
        render(<StyledAvatar />);
      }).toThrow();
    });

    it('throws if rendered with more than one child', () => {
      expect(() => {
        render(
          <StyledAvatar>
            <img alt="" />
            <img alt="" />
          </StyledAvatar>
        );
      }).toThrow();
    });
  });
});
