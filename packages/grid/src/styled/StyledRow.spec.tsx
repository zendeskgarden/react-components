/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { math } from 'polished';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRow } from './StyledRow';
import { ALIGN_ITEMS, JUSTIFY_CONTENT, SPACE, WRAP } from '../types';

describe('StyledRow', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledRow />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).not.toHaveStyleRule('box-shadow'); /* debug = false */
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledRow $debug />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });

  describe('Gutters', () => {
    it('renders gutters for each size', () => {
      SPACE.forEach(size => {
        if (typeof size === 'string') {
          const { container } = render(<StyledRow $gutters={size} />);
          const margin = math(`${DEFAULT_THEME.space[size]} / 2`);

          expect(container.firstChild).toHaveStyleRule('margin-right', `-${margin}`);
          expect(container.firstChild).toHaveStyleRule('margin-left', `-${margin}`);
        }
      });
    });

    it('collapses gutters', () => {
      const { container } = render(<StyledRow $gutters={false} />);

      expect(container.firstChild).toHaveStyleRule('margin-right', '-0');
      expect(container.firstChild).toHaveStyleRule('margin-left', '-0');
    });
  });

  describe('Align Items', () => {
    it('renders with each flex alignment position', () => {
      ALIGN_ITEMS.forEach(alignItems => {
        const { container } = render(<StyledRow $alignItems={alignItems} />);

        expect(container.firstChild).toHaveStyleRule(
          'align-items',
          expect.stringContaining(alignItems)
        );
      });
    });

    it('renders flex alignment responsively', () => {
      ALIGN_ITEMS.forEach(alignItems => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `$alignItems${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          const props = { [key]: alignItems };
          const { container } = render(<StyledRow {...props} />);
          const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

          expect(container.firstChild).toHaveStyleRule(
            'align-items',
            expect.stringContaining(alignItems),
            {
              media: `(min-width:  ${minWidth})`
            }
          );
        });
      });
    });
  });

  describe('Justify Content', () => {
    it('renders flex justification for each value', () => {
      JUSTIFY_CONTENT.forEach(justifyContent => {
        const { container } = render(<StyledRow $justifyContent={justifyContent} />);

        expect(container.firstChild).toHaveStyleRule(
          'justify-content',
          expect.stringContaining(justifyContent)
        );
      });
    });

    it('renders flex justification for each value responsively', () => {
      JUSTIFY_CONTENT.forEach(justifyContent => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `$justifyContent${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          const props = { [key]: justifyContent };
          const { container } = render(<StyledRow {...props} />);
          const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

          expect(container.firstChild).toHaveStyleRule(
            'justify-content',
            expect.stringContaining(justifyContent),
            {
              media: `(min-width:  ${minWidth})`
            }
          );
        });
      });
    });
  });
});

describe('Wrap', () => {
  it('renders flex wrapping', () => {
    WRAP.forEach(wrap => {
      const { container } = render(<StyledRow $wrapAll={wrap} />);

      expect(container.firstChild).toHaveStyleRule('flex-wrap', wrap);
    });
  });

  it('renders flex wrapping responsively', () => {
    WRAP.forEach(wrap => {
      Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
        const key = `$wrap${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

        const props = { [key]: wrap };
        const { container } = render(<StyledRow {...props} />);
        const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

        expect(container.firstChild).toHaveStyleRule('flex-wrap', expect.stringContaining(wrap), {
          media: `(min-width:  ${minWidth})`
        });
      });
    });
  });
});
