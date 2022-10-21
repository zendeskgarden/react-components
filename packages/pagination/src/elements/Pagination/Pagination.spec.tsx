/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Pagination } from './Pagination';
import { IPaginationProps, PageType } from '../../types';

describe('Pagination', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(<Pagination totalPages={0} currentPage={0} ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  let onChange: jest.Mock;

  const BasicExample = ({
    currentPage = 1,
    totalPages = 5,
    ...other
  }: Partial<IPaginationProps> = {}) => (
    <Pagination totalPages={totalPages} currentPage={currentPage} onChange={onChange} {...other} />
  );

  beforeEach(() => {
    onChange = jest.fn();
  });

  describe('transformPageProps', () => {
    let transformPageProps: any;

    beforeEach(() => {
      transformPageProps = jest.fn((pageType, props) => props);
    });

    it('calls provided transform function with correct page type', () => {
      render(
        <BasicExample currentPage={1} totalPages={10} transformPageProps={transformPageProps} />
      );

      expect(transformPageProps).toHaveBeenCalledTimes(11);
      expect(transformPageProps.mock.calls[0][0]).toBe('previous');
      expect(transformPageProps.mock.calls[1][0]).toBe('page');
      expect(transformPageProps.mock.calls[2][0]).toBe('page');
      expect(transformPageProps.mock.calls[3][0]).toBe('page');
      expect(transformPageProps.mock.calls[4][0]).toBe('page');
      expect(transformPageProps.mock.calls[5][0]).toBe('page');
      expect(transformPageProps.mock.calls[6][0]).toBe('page');
      expect(transformPageProps.mock.calls[7][0]).toBe('page');
      expect(transformPageProps.mock.calls[8][0]).toBe('gap');
      expect(transformPageProps.mock.calls[9][0]).toBe('page');
      expect(transformPageProps.mock.calls[10][0]).toBe('next');
    });

    it('applies transformed props if transform is supplied', () => {
      const CUSTOM_PROP_VALUE = 'custom-prop';

      transformPageProps = (type: PageType, props: any) => {
        props['data-test-id'] = CUSTOM_PROP_VALUE;

        return props;
      };

      const { container } = render(
        <BasicExample currentPage={1} totalPages={10} transformPageProps={transformPageProps} />
      );

      [...container.firstElementChild!.children].forEach(child => {
        expect(child).toHaveAttribute('data-test-id', CUSTOM_PROP_VALUE);
      });
    });
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is first page', () => {
      const { container } = render(<BasicExample currentPage={1} />);

      expect(container.firstElementChild!.children[0]).toHaveAttribute('hidden');
    });

    it('is visible otherwise', () => {
      const { container } = render(<BasicExample currentPage={2} />);

      expect(container.firstElementChild!.children[0]).not.toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} />);

      await user.click(container.firstElementChild!.children[0]);
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('focuses first page when visibility is lost', () => {
      const { container } = render(<Pagination totalPages={5} currentPage={2} />);
      const previousPage = container.firstElementChild!.children[0];

      fireEvent.focus(previousPage);
      fireEvent.keyDown(previousPage, { keyCode: KEY_CODES.ENTER });

      expect(container.firstElementChild!.children[1]).toHaveAttribute('tabindex', '0');
      expect(container.firstElementChild!.children[2]).toHaveAttribute('aria-current', 'true');
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is final page', () => {
      const { container } = render(<BasicExample currentPage={5} totalPages={5} />);

      expect(
        container.firstElementChild!.children[container.firstElementChild!.children.length - 1]
      ).toHaveAttribute('hidden');
    });

    it('is visible otherwise', () => {
      const { container } = render(<BasicExample currentPage={2} totalPages={5} />);

      expect(
        container.firstElementChild!.children[container.firstElementChild!.children.length - 1]
      ).not.toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', async () => {
      const { container } = render(<BasicExample currentPage={3} totalPages={5} />);

      await user.click(
        container.firstElementChild!.children[container.firstElementChild!.children.length - 1]
      );

      expect(onChange).toHaveBeenCalledWith(4);
    });

    it('focuses last page when visibility is lost', async () => {
      const { container } = render(
        <Pagination totalPages={5} currentPage={4} onChange={onChange} />
      );
      const paginationWrapper = container.firstElementChild!;
      const nextPage = paginationWrapper.children[paginationWrapper.children.length - 1];

      await user.click(nextPage);
      await user.type(nextPage, '{enter}');

      expect(onChange).toHaveBeenCalledWith(5);
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

    const transformPageProps = (pageType: PageType, props: any) => {
      props[`data-test-${pageType}`] = true;

      return props;
    };

    it('hides front gap when currentPage is within padding range', () => {
      const { container } = render(
        <BasicExample currentPage={1} totalPages={25} transformPageProps={transformPageProps} />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-page');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-gap');
      expect(children[9]).toHaveAttribute('data-test-page');
      expect(children[10]).toHaveAttribute('data-test-next');
    });

    it('hides back gap when currentPage is within padding range', () => {
      const { container } = render(
        <BasicExample currentPage={25} totalPages={25} transformPageProps={transformPageProps} />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-gap');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-page');
      expect(children[9]).toHaveAttribute('data-test-page');
      expect(children[10]).toHaveAttribute('data-test-next');
    });

    it('displays both gaps if not within padding range and totalPages is greater than padding limit', () => {
      const { container } = render(
        <BasicExample currentPage={15} totalPages={25} transformPageProps={transformPageProps} />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-gap');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-gap');
      expect(children[9]).toHaveAttribute('data-test-page');
      expect(children[10]).toHaveAttribute('data-test-next');
    });

    it('displays no gaps if less than padding limit', () => {
      const { container } = render(
        <BasicExample currentPage={1} totalPages={9} transformPageProps={transformPageProps} />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-page');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-page');
      expect(children[9]).toHaveAttribute('data-test-page');
      expect(children[10]).toHaveAttribute('data-test-next');
    });

    it('displays previous and next with zero total pages', () => {
      const { container } = render(
        <BasicExample totalPages={0} transformPageProps={transformPageProps} />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-next');
    });
  });

  describe('Padding', () => {
    const transformPageProps = (pageType: PageType, props: any) => {
      props[`data-test-${pageType}`] = true;

      return props;
    };

    it('renders as expected with reduced page padding', () => {
      const { container } = render(
        <BasicExample
          totalPages={9}
          currentPage={5}
          pagePadding={1}
          transformPageProps={transformPageProps}
        />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-gap');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-gap');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-next');
    });

    it('renders as expected with expanded page padding', () => {
      const { container } = render(
        <BasicExample
          totalPages={20}
          currentPage={10}
          pagePadding={3}
          transformPageProps={transformPageProps}
        />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-gap');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-page');
      expect(children[9]).toHaveAttribute('data-test-page');
      expect(children[10]).toHaveAttribute('data-test-gap');
      expect(children[11]).toHaveAttribute('data-test-page');
      expect(children[12]).toHaveAttribute('data-test-next');
    });
  });

  describe('Gap', () => {
    const transformPageProps = (pageType: PageType, props: any) => {
      props[`data-test-${pageType}`] = true;

      return props;
    };

    it('renders as expected with greater gap positioning', () => {
      const { container } = render(
        <BasicExample
          totalPages={20}
          currentPage={10}
          pageGap={3}
          transformPageProps={transformPageProps}
        />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-page');
      expect(children[2]).toHaveAttribute('data-test-page');
      expect(children[3]).toHaveAttribute('data-test-gap');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-page');
      expect(children[8]).toHaveAttribute('data-test-page');
      expect(children[9]).toHaveAttribute('data-test-gap');
      expect(children[10]).toHaveAttribute('data-test-page');
      expect(children[11]).toHaveAttribute('data-test-page');
      expect(children[12]).toHaveAttribute('data-test-next');
    });

    it('renders with lesser gap positioning', () => {
      const { container } = render(
        <BasicExample
          totalPages={9}
          currentPage={5}
          pageGap={1}
          transformPageProps={transformPageProps}
        />
      );
      const children = container.firstElementChild!.children;

      expect(children[0]).toHaveAttribute('data-test-previous');
      expect(children[1]).toHaveAttribute('data-test-gap');
      expect(children[2]).toHaveAttribute('data-test-page');
      expect(children[3]).toHaveAttribute('data-test-page');
      expect(children[4]).toHaveAttribute('data-test-page');
      expect(children[5]).toHaveAttribute('data-test-page');
      expect(children[6]).toHaveAttribute('data-test-page');
      expect(children[7]).toHaveAttribute('data-test-gap');
      expect(children[8]).toHaveAttribute('data-test-next');
    });
  });
});
