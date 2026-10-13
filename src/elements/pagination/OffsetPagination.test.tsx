/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef, useState } from 'react';
import { vi, type Mock } from 'vitest';

import { DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { IPaginationProps } from '../../types/elements';
import { OffsetPagination } from './OffsetPagination';

describe('OffsetPagination', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLUListElement>();
    const { container } = render(<OffsetPagination totalPages={0} currentPage={0} ref={ref} />);

    expect(container.firstChild!.firstChild).toBe(ref.current);
  });

  let onChange: Mock;

  const BasicExample = ({
    currentPage = 1,
    totalPages = 5,
    ...other
  }: Partial<IPaginationProps> = {}) => (
    <OffsetPagination
      totalPages={totalPages}
      currentPage={currentPage}
      onChange={onChange}
      {...other}
    />
  );

  beforeEach(() => {
    onChange = vi.fn();
  });

  afterEach(() => {
    onChange.mockReset();
  });

  describe('Accessibility', () => {
    it('applies labels to elements', () => {
      const containerLabel = 'container label';
      const labels = {
        gap: 'gap',
        renderPage: (p: number) => `Page ${p}`,
        next: 'next',
        previous: 'prev'
      };

      const { container } = render(
        <BasicExample
          currentPage={5}
          totalPages={9}
          labels={labels}
          aria-label={containerLabel}
          pageGap={1}
        />
      );
      const children = container.querySelector('ul')!.children;

      expect(container.firstElementChild!).toHaveAttribute('aria-label', containerLabel);
      expect(children[0]!.firstChild).toHaveAttribute('aria-label', labels.previous);
      expect(children[1]!).toHaveAttribute('aria-label', labels.gap);
      expect(children[2]!.firstChild).toHaveAttribute('aria-label', labels.renderPage(3));
      expect(children[3]!.firstChild).toHaveAttribute('aria-label', labels.renderPage(4));
      expect(children[4]!.firstChild).toHaveAttribute('aria-label', labels.renderPage(5));
      expect(children[5]!.firstChild).toHaveAttribute('aria-label', labels.renderPage(6));
      expect(children[6]!.firstChild).toHaveAttribute('aria-label', labels.renderPage(7));
      expect(children[7]!).toHaveAttribute('aria-label', labels.gap);
      expect(children[8]!.firstChild).toHaveAttribute('aria-label', labels.next);
    });

    it('sets aria-current to currently selected page', () => {
      const { getByText } = render(<BasicExample currentPage={3} totalPages={5} />);

      expect(getByText('3')).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Selected page styles', () => {
    const color = (theme: typeof DEFAULT_THEME, variable: string, options = {}) =>
      getColor({ variable, theme, ...options });

    const pageStyles = (theme: typeof DEFAULT_THEME) => ({
      current: {
        backgroundColor: color(theme, 'background.primaryEmphasis', {
          transparency: theme.opacity[100],
          dark: { offset: -100 }
        }),
        color: color(theme, 'foreground.subtle', {
          light: { offset: 200 },
          dark: { offset: -200 }
        })
      },
      hover: color(theme, 'background.primaryEmphasis', {
        transparency: theme.opacity[100],
        dark: { offset: -100 }
      }),
      active: color(theme, 'background.primaryEmphasis', {
        transparency: theme.opacity[200],
        dark: { offset: -100 }
      }),
      currentHover: color(theme, 'background.primaryEmphasis', {
        transparency: theme.opacity[200],
        dark: { offset: -100 }
      }),
      currentActive: color(theme, 'background.primaryEmphasis', {
        transparency: theme.opacity[300],
        dark: { offset: -100 }
      })
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the expected styles on the selected page in $0 mode', (_, theme) => {
      const { getByText } = render(<BasicExample currentPage={3} totalPages={5} />, { theme });

      const page = getByText('3');
      const styles = pageStyles(theme);

      expect(page).toHaveStyleRule('font-weight', `${theme.fontWeights.semibold}`, {
        modifier: '&[aria-current="page"]'
      });
      expect(page).toHaveStyleRule('background-color', styles.current.backgroundColor, {
        modifier: '&[aria-current="page"]'
      });
      expect(page).toHaveStyleRule('color', styles.current.color, {
        modifier: '&[aria-current="page"]'
      });
      expect(page).toHaveStyleRule('background-color', styles.hover, {
        modifier: '&:hover'
      });
      expect(page).toHaveStyleRule('background-color', styles.active, {
        modifier: '&:active'
      });
      expect(page).toHaveStyleRule('background-color', styles.currentHover, {
        modifier: '&[aria-current="page"]:hover'
      });
      expect(page).toHaveStyleRule('background-color', styles.currentActive, {
        modifier: '&[aria-current="page"]:active'
      });
    });
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is not first page', () => {
      const { container } = render(<BasicExample currentPage={4} totalPages={5} />);

      expect(container.querySelector('button')).not.toHaveAttribute('hidden');
    });

    it('is invisible if currentPage is first page', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={5} />);

      expect(container.querySelector('button')).toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} />);

      await user.click(container.querySelector('button')!);

      expect(onChange).toHaveBeenCalledWith(2);
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is not final page', () => {
      const { container } = render(<BasicExample currentPage={4} totalPages={5} />);

      expect(container.querySelector('li:last-child > button')).not.toHaveAttribute('hidden');
    });

    it('is invisible if currentPage is final page', () => {
      const { container } = render(<BasicExample currentPage={5} totalPages={5} />);

      expect(container.querySelector('li:last-child > button')).toHaveAttribute('hidden');
    });

    it('increments currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} totalPages={5} />);

      await user.click(container.querySelector('li:last-child > button')!);

      expect(onChange).toHaveBeenCalledWith(4);
    });
  });

  describe('Pages', () => {
    it('updates onChange with currentPage when selected', async () => {
      const { getByText } = render(<BasicExample currentPage={1} totalPages={5} />);

      await user.click(getByText('2'));

      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('hides front gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={25} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[9]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('hides back gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={25} totalPages={25} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays both gaps if not within padding range and totalPages is greater than padding limit', () => {
      const { container } = render(<BasicExample currentPage={15} totalPages={25} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[9]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays no gaps if less than padding limit', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={9} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays previous and next with zero total pages', () => {
      const { container } = render(<BasicExample totalPages={0} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });

  describe('Padding', () => {
    it('renders as expected with reduced page padding', () => {
      const { container } = render(<BasicExample totalPages={9} currentPage={5} pagePadding={1} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('renders as expected with expanded page padding', () => {
      const { container } = render(
        <BasicExample totalPages={20} currentPage={10} pagePadding={3} />
      );
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[11]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[12]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });

  describe('Gap', () => {
    it('renders as expected with greater gap positioning', () => {
      const { container } = render(<BasicExample totalPages={20} currentPage={10} pageGap={3} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[10]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[11]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[12]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('renders with lesser gap positioning', () => {
      const { container } = render(<BasicExample totalPages={9} currentPage={5} pageGap={1} />);
      const children = container.querySelector('ul')!.children;

      expect(children[0]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[2]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]!).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[8]!.firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });

  describe('Page changes', () => {
    const StatefulExample = ({ totalPages }: { totalPages: number }) => {
      const [currentPage, setCurrentPage] = useState(1);

      return (
        <OffsetPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={page => {
            setCurrentPage(page);
            onChange(page);
          }}
        />
      );
    };

    it('hides Previous after it selects the first page', async () => {
      const { container } = render(<StatefulExample totalPages={3} />);
      const next = container.querySelector('li:last-child > button')!;
      const previous = container.querySelector('button')!;

      await user.click(next);
      await user.click(previous);

      expect(onChange).toHaveBeenLastCalledWith(1);
      expect(previous).toHaveAttribute('hidden');
    });

    it('hides Next after it selects the last page', async () => {
      const { container } = render(<StatefulExample totalPages={2} />);
      const next = container.querySelector('li:last-child > button')!;

      await user.click(next);

      expect(onChange).toHaveBeenLastCalledWith(2);
      expect(next).toHaveAttribute('hidden');
    });
  });
});
