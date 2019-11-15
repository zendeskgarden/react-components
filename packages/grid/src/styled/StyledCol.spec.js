/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Col from './Col';

describe('Col', () => {
  it('renders default styling', () => {
    const { container } = render(<Col />);

    expect(container.firstChild).toHaveClass('col');
  });

  describe('Sizing', () => {
    const sizes = [
      {
        size: 4
      },
      {
        sm: true
      },
      {
        xs: 6
      },
      {
        sm: 6
      },
      {
        md: 6
      },
      {
        lg: 6
      },
      {
        xl: 6
      }
    ];

    sizes.forEach(props => {
      const key = Object.keys(props)[0];

      it(`renders ${key} if provided`, () => {
        const { container } = render(<Col {...props} />);
        let className;

        if (key === 'size') {
          className = `col-${props[key]}`;
        } else if (typeof props[key] === 'number') {
          className = `col-${key}-${props[key]}`;
        } else {
          className = `col-${key}`;
        }

        expect(container.firstChild).toHaveClass(className);
      });
    });
  });

  describe('Offsets', () => {
    ['offsetXs', 'offsetSm', 'offsetMd', 'offsetLg', 'offsetXl'].forEach(offset => {
      const props = {
        [offset]: 6
      };

      const classes = {
        offsetXs: 'offset-xs',
        offsetSm: 'offset-sm',
        offsetMd: 'offset-md',
        offsetLg: 'offset-lg',
        offsetXl: 'offset-xl'
      };

      it(`renders ${offset} if provided`, () => {
        const { container } = render(<Col {...props} />);

        expect(container.firstChild).toHaveClass(`${classes[offset]}-${props[offset]}`);
      });
    });
  });

  describe('Align Self', () => {
    ['start', 'center', 'end'].forEach(alignment => {
      it(`renders ${alignment} self alignment if provided`, () => {
        const { container } = render(<Col alignSelf={alignment} />);

        expect(container.firstChild).toHaveClass(`align-self-${alignment}`);
      });
    });
  });

  describe('Justify Content', () => {
    ['start', 'center', 'end', 'around', 'between'].forEach(justifyContent => {
      it(`renders ${justifyContent} justify content if provided`, () => {
        const { container } = render(<Col justifyContent={justifyContent} />);

        expect(container.firstChild).toHaveClass(`justify-content-${justifyContent}`);
      });
    });
  });

  describe('Order', () => {
    it('renders pseudo order if provided', () => {
      const { container } = render(<Col order="first" />);

      expect(container.firstChild).toHaveClass('order-first');
    });

    it('renders string based order if provided', () => {
      const { container } = render(<Col order="md-12" />);

      expect(container.firstChild).toHaveClass('order-md-12');
    });
  });
});
