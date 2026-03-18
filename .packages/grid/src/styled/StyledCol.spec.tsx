/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import { math } from 'polished';
import React from 'react';

import { ALIGN_SELF, SPACE, TEXT_ALIGN } from '../types';
import { StyledCol } from './StyledCol';

describe('StyledCol', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledCol />);

    expect(container.firstChild).not.toHaveStyleRule('background-color'); /* debug = false */
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledCol $debug />);

    expect(container.firstChild).toHaveStyleRule('background-color', expect.any(String));
  });

  describe('Columns', () => {
    it('renders 12 columns by default', () => {
      const { container } = render(<StyledCol $sizeAll={1} />);

      expect(container.firstChild).toHaveStyleRule('max-width', `${(1 / 12) * 100}%`);
    });

    it('renders column', () => {
      [4, 8, 16, 24].forEach(columns => {
        const { container } = render(<StyledCol $sizeAll={1} $columns={columns} />);

        expect(container.firstChild).toHaveStyleRule('max-width', `${(1 / columns) * 100}%`);
      });
    });
  });

  describe('Gutters', () => {
    it('renders gutters', () => {
      SPACE.forEach(size => {
        if (size) {
          const { container } = render(<StyledCol $gutters={size} />);
          const padding = math(`${DEFAULT_THEME.space[size]} / 2`);

          expect(container.firstChild).toHaveStyleRule('padding-right', padding);
          expect(container.firstChild).toHaveStyleRule('padding-left', padding);
        }
      });
    });

    it('collapses gutters', () => {
      const { container } = render(<StyledCol $gutters={false} />);

      expect(container.firstChild).toHaveStyleRule('padding-right', '0');
      expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    });
  });

  describe('Sizing', () => {
    it('renders default width', () => {
      const { container } = render(<StyledCol />);

      expect(container.firstChild).toHaveStyleRule('flex-basis', '0');
    });

    it('renders auto width', () => {
      const { container } = render(<StyledCol $sizeAll="auto" />);

      expect(container.firstChild).toHaveStyleRule('width', 'auto');
    });

    it('renders max-width for sizes', () => {
      [1, 2, 3, 5, 8].forEach(size => {
        const { container } = render(<StyledCol $sizeAll={size} />);

        expect(container.firstChild).toHaveStyleRule('max-width', `${(size / 12) * 100}%`);
      });
    });

    describe('Responsively', () => {
      it('renders min width according to size and breakpoint', () => {
        [1, 2, 3, 5, 8].forEach(size => {
          Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
            const props = { [`$${breakpoint}`]: size };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule('max-width', `${(size / 12) * 100}%`, {
              media: `(min-width:  ${minWidth})`
            });
          });
        });
      });
    });
  });

  describe('Align Self', () => {
    it('renders flex alignments', () => {
      ALIGN_SELF.forEach(alignSelf => {
        const { container } = render(<StyledCol $alignSelf={alignSelf} />);

        expect(container.firstChild).toHaveStyleRule(
          'align-self',
          expect.stringContaining(alignSelf)
        );
      });
    });

    it('renders flex alignment responsively', () => {
      ALIGN_SELF.forEach(alignSelf => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `$alignSelf${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          const props = { [key]: alignSelf };
          const { container } = render(<StyledCol {...props} />);
          const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

          expect(container.firstChild).toHaveStyleRule(
            'align-self',
            expect.stringContaining(alignSelf),
            {
              media: `(min-width:  ${minWidth})`
            }
          );
        });
      });
    });
  });

  describe('Text Align', () => {
    it('renders text alignments', () => {
      const alignments = {
        start: 'left',
        end: 'right',
        center: 'center',
        justify: 'justify'
      };

      TEXT_ALIGN.forEach(textAlign => {
        const { container } = render(<StyledCol $textAlign={textAlign} />);

        expect(container.firstChild).toHaveStyleRule('text-align', alignments[textAlign]);
      });
    });

    it('renders text alignments responsively', () => {
      const alignments = {
        start: 'left',
        end: 'right',
        center: 'center',
        justify: 'justify'
      };

      TEXT_ALIGN.forEach(textAlign => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `$textAlign${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          const props = { [key]: textAlign };
          const { container } = render(<StyledCol {...props} />);
          const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

          expect(container.firstChild).toHaveStyleRule('text-align', alignments[textAlign], {
            media: `(min-width:  ${minWidth})`
          });
        });
      });
    });

    it('renders RTL text alignment in RTL direction', () => {
      TEXT_ALIGN.forEach(textAlign => {
        const { container } = renderRtl(<StyledCol $textAlign={textAlign} />);

        const alignments = {
          start: 'right',
          end: 'left',
          center: 'center',
          justify: 'justify'
        };

        expect(container.firstChild).toHaveStyleRule('text-align', alignments[textAlign]);
      });
    });
  });

  describe('Offsets', () => {
    it('renders offsets over 12', () => {
      [1, 2, 3, 5, 8].forEach(offset => {
        const { container } = render(<StyledCol $offset={offset} />);

        expect(container.firstChild).toHaveStyleRule('margin-left', `${(offset / 12) * 100}%`);
      });
    });

    it('renders offsets over 12 in RTL direction', () => {
      [1, 2, 3, 5, 8].forEach(offset => {
        const { container } = renderRtl(<StyledCol $offset={offset} />);

        expect(container.firstChild).toHaveStyleRule('margin-right', `${(offset / 12) * 100}%`);
      });
    });

    it('renders offsets over 12 responsively', () => {
      [1, 2, 3, 5, 8].forEach(offset => {
        Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
          const key = `$offset${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

          const props = { [key]: offset };
          const { container } = render(<StyledCol {...props} />);
          const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

          expect(container.firstChild).toHaveStyleRule('margin-left', `${(offset / 12) * 100}%`, {
            media: `(min-width:  ${minWidth})`
          });
        });
      });
    });
  });

  describe('Order', () => {
    it('renders flex orders', () => {
      [1, 2, 3, 5, 8].forEach(order => {
        const { container } = render(<StyledCol $order={order} />);

        expect(container.firstChild).toHaveStyleRule(
          'order',
          expect.stringContaining(order.toString())
        );
      });
    });

    describe('Responsively', () => {
      it('renders flex orders', () => {
        [1, 2, 3, 5, 8].forEach(order => {
          Object.keys(DEFAULT_THEME.breakpoints).forEach(breakpoint => {
            const key = `$order${breakpoint[0].toUpperCase()}${breakpoint.substring(1)}`;

            const props = { [key]: order };
            const { container } = render(<StyledCol {...props} />);
            const minWidth = (DEFAULT_THEME.breakpoints as any)[breakpoint];

            expect(container.firstChild).toHaveStyleRule(
              'order',
              expect.stringContaining(order.toString()),
              {
                media: `(min-width:  ${minWidth})`
              }
            );
          });
        });
      });
    });

    it('renders flex order first', () => {
      const { container } = render(<StyledCol $order="first" />);

      expect(container.firstChild).toHaveStyleRule('order', '-1');
    });

    it('renders flex order last', () => {
      const { container } = render(<StyledCol $order="last" />);

      expect(container.firstChild).toHaveStyleRule('order', '13');
    });
  });
});
