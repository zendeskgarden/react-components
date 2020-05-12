/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { math } from 'polished';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ARRAY_ALIGN_SELF, ARRAY_SPACE, ARRAY_TEXT_ALIGN } from '../utils/types';
import { StyledCol } from './StyledCol';

describe('StyledCol', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledCol />);

    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).not.toHaveStyleRule('background-color'); /* debug = false */
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledCol debug />);

    expect(container.firstChild).toHaveStyleRule('background-color', expect.any(String));
  });

  describe('Columns', () => {
    it('renders 12 columns by default', () => {
      const { container } = render(<StyledCol sizeAll={1} />);

      expect(container.firstChild).toHaveStyleRule('max-width', `${(1 / 12) * 100}%`);
    });

    [4, 8, 16, 24].forEach(columns => {
      it(`renders ${columns} columns if specified`, () => {
        const { container } = render(<StyledCol sizeAll={1} columns={columns} />);

        expect(container.firstChild).toHaveStyleRule('max-width', `${(1 / columns) * 100}%`);
      });
    });
  });

  describe('Gutters', () => {
    ARRAY_SPACE.forEach(size => {
      if (size) {
        it(`renders ${size} gutters`, () => {
          const { container } = render(<StyledCol gutters={size} />);
          const padding = math(`${DEFAULT_THEME.space[size]} / 2`);

          expect(container.firstChild).toHaveStyleRule('padding-right', padding);
          expect(container.firstChild).toHaveStyleRule('padding-left', padding);
        });
      } else {
        it('collapses gutters', () => {
          const { container } = render(<StyledCol gutters={false} />);

          expect(container.firstChild).toHaveStyleRule('padding-right', '0');
          expect(container.firstChild).toHaveStyleRule('padding-left', '0');
        });
      }
    });
  });

  describe('Sizing', () => {
    it('renders default width', () => {
      const { container } = render(<StyledCol />);

      expect(container.firstChild).toHaveStyleRule('flex-basis', '0');
    });

    it('renders auto width', () => {
      const { container } = render(<StyledCol sizeAll="auto" />);

      expect(container.firstChild).toHaveStyleRule('width', 'auto');
    });

    [1, 2, 3, 5, 8].forEach(size => {
      it(`renders ${size}/12 width`, () => {
        const { container } = render(<StyledCol sizeAll={size} />);

        expect(container.firstChild).toHaveStyleRule('max-width', `${(size / 12) * 100}%`);
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          it(`renders ${breakpoint}=${size} width`, () => {
            const props = { [breakpoint]: size };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule('max-width', `${(size / 12) * 100}%`, {
              media: `(min-width: ${minWidth})`
            });
          });
        });
      });
    });
  });

  describe('Align Self', () => {
    ARRAY_ALIGN_SELF.forEach(alignSelf => {
      it(`renders ${alignSelf} flex alignment`, () => {
        const { container } = render(<StyledCol alignSelf={alignSelf} />);

        expect(container.firstChild).toHaveStyleRule(
          'align-self',
          expect.stringContaining(alignSelf)
        );
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `alignSelf${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${alignSelf} flex alignment`, () => {
            const props = { [key]: alignSelf };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'align-self',
              expect.stringContaining(alignSelf),
              {
                media: `(min-width: ${minWidth})`
              }
            );
          });
        });
      });
    });
  });

  describe('Text Align', () => {
    ARRAY_TEXT_ALIGN.forEach(textAlign => {
      let expected: any;

      if (textAlign === 'start') {
        expected = 'left';
      } else if (textAlign === 'end') {
        expected = 'right';
      } else {
        expected = textAlign;
      }

      it(`renders ${textAlign} text alignment`, () => {
        const { container } = render(<StyledCol textAlign={textAlign} />);

        expect(container.firstChild).toHaveStyleRule('text-align', expected);
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `textAlign${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${textAlign} text alignment`, () => {
            const props = { [key]: textAlign };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule('text-align', expected, {
              media: `(min-width: ${minWidth})`
            });
          });
        });
      });

      it(`renders ${textAlign} RTL text alignment`, () => {
        const { container } = renderRtl(<StyledCol textAlign={textAlign} />);

        if (textAlign === 'start') {
          expected = 'right';
        } else if (textAlign === 'end') {
          expected = 'left';
        }

        expect(container.firstChild).toHaveStyleRule('text-align', expected);
      });
    });
  });

  describe('Offsets', () => {
    [1, 2, 3, 5, 8].forEach(offset => {
      it(`renders ${offset}/12 offset`, () => {
        const { container } = render(<StyledCol offset={offset} />);

        expect(container.firstChild).toHaveStyleRule('margin-left', `${(offset / 12) * 100}%`);
      });

      it(`renders ${offset}/12 RTL offset`, () => {
        const { container } = renderRtl(<StyledCol offset={offset} />);

        expect(container.firstChild).toHaveStyleRule('margin-right', `${(offset / 12) * 100}%`);
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `offset${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${offset} offset`, () => {
            const props = { [key]: offset };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule('margin-left', `${(offset / 12) * 100}%`, {
              media: `(min-width: ${minWidth})`
            });
          });
        });
      });
    });
  });

  describe('Order', () => {
    [1, 2, 3, 5, 8].forEach(order => {
      it(`renders flex order ${order}`, () => {
        const { container } = render(<StyledCol order={order} />);

        expect(container.firstChild).toHaveStyleRule(
          'order',
          expect.stringContaining(order.toString())
        );
      });

      describe('Responsively', () => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `order${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          it(`renders ${key}=${order} flex order`, () => {
            const props = { [key]: order };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'order',
              expect.stringContaining(order.toString()),
              {
                media: `(min-width: ${minWidth})`
              }
            );
          });
        });
      });
    });

    it('renders flex order first', () => {
      const { container } = render(<StyledCol order="first" />);

      expect(container.firstChild).toHaveStyleRule('order', '-1');
    });

    it('renders flex order last', () => {
      const { container } = render(<StyledCol order="last" />);

      expect(container.firstChild).toHaveStyleRule('order', '13');
    });
  });
});
