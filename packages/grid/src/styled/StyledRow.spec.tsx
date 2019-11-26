/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import math from 'polished/lib/math/math';
import { render } from 'garden-test-utils';
import { ARRAY_SPACE, ARRAY_ALIGN_ITEMS, ARRAY_JUSTIFY_CONTENT, ARRAY_WRAP } from '../utils/types';
import { StyledRow } from './StyledRow';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledRow', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledRow />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).not.toHaveStyleRule('box-shadow'); /* debug = false */
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledRow debug />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });

  describe('Gutters', () => {
    ARRAY_SPACE.forEach(size => {
      if (size) {
        it(`renders ${size} gutters`, () => {
          const { container } = render(<StyledRow gutters={size} />);
          const margin = math(`${DEFAULT_THEME.space[size]} / 2`);

          expect(container.firstChild).toHaveStyleRule('margin-right', `-${margin}`);
          expect(container.firstChild).toHaveStyleRule('margin-left', `-${margin}`);
        });
      } else {
        it('collapses gutters', () => {
          const { container } = render(<StyledRow gutters={false} />);

          expect(container.firstChild).toHaveStyleRule('margin-right', '-0');
          expect(container.firstChild).toHaveStyleRule('margin-left', '-0');
        });
      }
    });
  });

  describe('Align Items', () => {
    ARRAY_ALIGN_ITEMS.forEach(alignItems => {
      it(`renders ${alignItems} flex alignment`, () => {
        const { container } = render(<StyledRow alignItems={alignItems} />);

        expect(container.firstChild).toHaveStyleRule(
          'align-items',
          expect.stringContaining(alignItems)
        );
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `alignItems${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${alignItems} flex alignment`, () => {
            const props = { [key]: alignItems };
            const { container } = render(<StyledRow {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'align-items',
              expect.stringContaining(alignItems),
              {
                media: `(min-width: ${minWidth})`
              }
            );
          });
        });
      });
    });
  });

  describe('Justify Content', () => {
    ARRAY_JUSTIFY_CONTENT.forEach(justifyContent => {
      it(`renders ${justifyContent} flex justification`, () => {
        const { container } = render(<StyledRow justifyContent={justifyContent} />);

        expect(container.firstChild).toHaveStyleRule(
          'justify-content',
          expect.stringContaining(justifyContent)
        );
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `justifyContent${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${justifyContent} flex justification`, () => {
            const props = { [key]: justifyContent };
            const { container } = render(<StyledRow {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'justify-content',
              expect.stringContaining(justifyContent),
              {
                media: `(min-width: ${minWidth})`
              }
            );
          });
        });
      });
    });
  });

  describe('Wrap', () => {
    ARRAY_WRAP.forEach(wrap => {
      it(`renders ${wrap} flex wrapping`, () => {
        const { container } = render(<StyledRow wrapAll={wrap} />);

        expect(container.firstChild).toHaveStyleRule('flex-wrap', wrap);
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `wrap${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${wrap} flex wrapping`, () => {
            const props = { [key]: wrap };
            const { container } = render(<StyledRow {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'flex-wrap',
              expect.stringContaining(wrap),
              {
                media: `(min-width: ${minWidth})`
              }
            );
          });
        });
      });
    });
  });
});
