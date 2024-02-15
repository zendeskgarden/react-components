/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { OffsetPagination } from './OffsetPagination';
import { IPaginationProps } from '../../types';

describe('OffsetPagination', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(<OffsetPagination totalPages={0} currentPage={0} ref={ref} />);

    expect(container.firstChild!.firstChild).toBe(ref.current);
  });

  let onChange: jest.Mock;

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
    onChange = jest.fn();
  });

  describe('labels', () => {
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
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(container.firstElementChild!).toHaveAttribute('aria-label', containerLabel);
      expect(children[0].firstChild).toHaveAttribute('aria-label', labels.previous);
      expect(children[1]).toHaveAttribute('aria-label', labels.gap);
      expect(children[2].firstChild).toHaveAttribute('aria-label', labels.renderPage(3));
      expect(children[3].firstChild).toHaveAttribute('aria-label', labels.renderPage(4));
      expect(children[4].firstChild).toHaveAttribute('aria-label', labels.renderPage(5));
      expect(children[5].firstChild).toHaveAttribute('aria-label', labels.renderPage(6));
      expect(children[6].firstChild).toHaveAttribute('aria-label', labels.renderPage(7));
      expect(children[7]).toHaveAttribute('aria-label', labels.gap);
      expect(children[8].firstChild).toHaveAttribute('aria-label', labels.next);
    });
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is not first page', () => {
      const { container } = render(<BasicExample currentPage={4} totalPages={5} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      expect(paginationWrapper.firstElementChild!.firstChild).not.toHaveAttribute('hidden');
    });

    it('is invisible if currentPage is first page', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={5} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      expect(paginationWrapper.firstElementChild!.firstChild).toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      await user.click(paginationWrapper.firstElementChild!.firstChild! as HTMLButtonElement);

      expect(onChange).toHaveBeenCalledWith(2);
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is not final page', () => {
      const { container } = render(<BasicExample currentPage={4} totalPages={5} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      expect(paginationWrapper.lastElementChild!.firstChild).not.toHaveAttribute('hidden');
    });

    it('is invisible if currentPage is final page', () => {
      const { container } = render(<BasicExample currentPage={5} totalPages={5} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      expect(paginationWrapper.lastElementChild!.firstChild).toHaveAttribute('hidden');
    });

    it('increments currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} totalPages={5} />);
      const paginationWrapper = container.firstElementChild!.firstElementChild!;

      await user.click(paginationWrapper.lastElementChild!.firstChild! as HTMLButtonElement);

      expect(onChange).toHaveBeenCalledWith(4);
    });
  });

  describe('Pages', () => {
    it('updates onStateChange with currentPage when selected', async () => {
      const { getByText } = render(<BasicExample currentPage={1} totalPages={5} />);

      await user.click(getByText('2'));

      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('updates onChange with currentPage when selected', async () => {
      const { getByText } = render(<BasicExample currentPage={1} totalPages={5} />);

      await user.click(getByText('2'));

      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('hides front gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={25} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[9].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('hides back gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={25} totalPages={25} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays both gaps if not within padding range and totalPages is greater than padding limit', () => {
      const { container } = render(<BasicExample currentPage={15} totalPages={25} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[9].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays no gaps if less than padding limit', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={9} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('displays previous and next with zero total pages', () => {
      const { container } = render(<BasicExample totalPages={0} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });

  describe('Padding', () => {
    it('renders as expected with reduced page padding', () => {
      const { container } = render(<BasicExample totalPages={9} currentPage={5} pagePadding={1} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('renders as expected with expanded page padding', () => {
      const { container } = render(
        <BasicExample totalPages={20} currentPage={10} pagePadding={3} />
      );
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[10]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[11].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[12].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });

  describe('Gap', () => {
    it('renders as expected with greater gap positioning', () => {
      const { container } = render(<BasicExample totalPages={20} currentPage={10} pageGap={3} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[2].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[9]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[10].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[11].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[12].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });

    it('renders with lesser gap positioning', () => {
      const { container } = render(<BasicExample totalPages={9} currentPage={5} pageGap={1} />);
      const children = container.firstElementChild!.firstElementChild!.children;

      expect(children[0].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
      expect(children[1]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[2].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[3].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[4].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[5].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[6].firstChild).toHaveAttribute('data-garden-id', 'pagination.page');
      expect(children[7]).toHaveAttribute('data-garden-id', 'pagination.gap');
      expect(children[8].firstChild).toHaveAttribute('data-garden-id', 'pagination.navigation');
    });
  });
});
