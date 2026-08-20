/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { render } from 'garden-test-utils';
import React from 'react';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders a child SVG', () => {
    const { container } = render(
      <IconButton>
        <TestIcon />
      </IconButton>
    );

    expect(container.querySelector('svg')).not.toBeNull();
  });

  describe('`type` attribute', () => {
    it('renders default type of "button"', () => {
      const { container } = render(
        <IconButton>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders default type of "button" if explicitly undefined', () => {
      const { container } = render(
        <IconButton type={undefined}>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders custom type if provided', () => {
      const { container } = render(
        <IconButton type="submit">
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'submit');
    });
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
