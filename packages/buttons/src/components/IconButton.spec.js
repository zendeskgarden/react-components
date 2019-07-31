/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import IconButton from './IconButton';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('IconButton', () => {
  it('renders a child SVG', () => {
    const { container } = render(
      <IconButton>
        <TestIcon />
      </IconButton>
    );

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('does not render focused styling if focused by mouse', () => {
    const { container } = render(
      <IconButton>
        <TestIcon />
      </IconButton>
    );

    fireEvent.click(container.firstChild);
    expect(container.firstChild).not.toHaveClass('focus-visible');
  });

  it('renders focused styling if focused by keyboard', () => {
    const { container } = render(
      <IconButton>
        <TestIcon />
      </IconButton>
    );

    fireEvent.focus(container.firstChild);
    expect(container.firstChild).toHaveClass('focus-visible');
  });

  describe('Invalid', () => {
    /* eslint-disable no-console */
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });
    /* eslint-enable no-console */

    it('throws if rendered with no child', () => {
      expect(() => {
        render(<IconButton />);
      }).toThrow();
    });

    it('throws if rendered with more than one child', () => {
      expect(() => {
        render(
          <IconButton>
            <TestIcon />
            <TestIcon />
          </IconButton>
        );
      }).toThrow();
    });
  });
});
