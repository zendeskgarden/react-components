/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Avatar from './Avatar';

describe('Avatar', () => {
  const defaultImage = <img src="test" alt="test" />;

  it('applies default styling correctly', () => {
    const { container } = render(<Avatar>{defaultImage}</Avatar>);

    expect(container.firstChild).toHaveClass('c-avatar');
  });

  it('applies system styling correctly if provided', () => {
    const { container } = render(<Avatar system>{defaultImage}</Avatar>);

    expect(container.firstChild).toHaveClass('c-avatar--system');
  });

  describe('Sizes', () => {
    ['extrasmall', 'small', 'large'].forEach(size => {
      it(`applies ${size} correctly if provided`, () => {
        const classes = {
          extrasmall: 'c-avatar--xs',
          small: 'c-avatar--sm',
          large: 'c-avatar--lg'
        };

        const { container } = render(<Avatar size={size}>{defaultImage}</Avatar>);

        expect(container.firstChild).toHaveClass(classes[size]);
      });
    });
  });

  describe('States', () => {
    it('applies disabled styling if provided', () => {
      const { container } = render(<Avatar disabled>{defaultImage}</Avatar>);

      expect(container.firstChild).toHaveClass('is-disabled');
    });

    it('applies borderless styling if provided', () => {
      const { container } = render(<Avatar isBorderless>{defaultImage}</Avatar>);

      expect(container.firstChild).toHaveClass('c-avatar--borderless');
    });
  });
});
