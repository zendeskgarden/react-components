/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';

import Pagination from './Pagination';

describe('Pagination', () => {
  let onStateChange;
  let onChange;

  const BasicExample = ({ currentPage = 1, totalPages = 5, ...other } = {}) => (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onStateChange={onStateChange}
      onChange={onChange}
      {...other}
    />
  );

  beforeEach(() => {
    onStateChange = jest.fn();
    onChange = jest.fn();
  });

  describe('transformPageProps', () => {
    let transformPageProps;

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

      transformPageProps = (type, props) => {
        props['data-test-id'] = CUSTOM_PROP_VALUE;

        return props;
      };

      const { container } = render(
        <BasicExample currentPage={1} totalPages={10} transformPageProps={transformPageProps} />
      );

      [...container.firstChild.children].forEach(child => {
        expect(child).toHaveAttribute('data-test-id', CUSTOM_PROP_VALUE);
      });
    });
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is first page', () => {
      const { container } = render(<BasicExample currentPage={1} />);

      expect(container.firstChild.children[0]).toHaveAttribute('hidden');
    });

    it('is visible otherwise', () => {
      const { container } = render(<BasicExample currentPage={2} />);

      expect(container.firstChild.children[0]).not.toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', () => {
      const { container } = render(<BasicExample currentPage={3} />);

      fireEvent.click(container.firstChild.children[0]);
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });

    it('focuses first page when visibility is lost', () => {
      const { container } = render(<Pagination totalPages={5} currentPage={2} />);
      const paginationWrapper = container.firstChild;

      fireEvent.focus(paginationWrapper);

      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.LEFT });
      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.LEFT });
      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.ENTER });

      expect(container.firstChild.children[1]).toHaveClass('is-focused');
      expect(container.firstChild.children[2]).toHaveClass('is-current');
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is final page', () => {
      const { container } = render(<BasicExample currentPage={5} totalPages={5} />);

      expect(
        container.firstChild.children[container.firstChild.children.length - 1]
      ).toHaveAttribute('hidden');
    });

    it('is visible otherwise', () => {
      const { container } = render(<BasicExample currentPage={2} totalPages={5} />);

      expect(
        container.firstChild.children[container.firstChild.children.length - 1]
      ).not.toHaveAttribute('hidden');
    });

    it('decrements currentPage when selected', () => {
      const { container } = render(<BasicExample currentPage={3} totalPages={5} />);

      fireEvent.click(container.firstChild.children[container.firstChild.children.length - 1]);

      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 4 });
    });

    it('focuses last page when visibility is lost', () => {
      const { container } = render(
        <Pagination totalPages={5} currentPage={4} onStateChange={onStateChange} />
      );
      const paginationWrapper = container.firstChild;

      fireEvent.focus(paginationWrapper);
      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.RIGHT });
      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.RIGHT });
      fireEvent.keyDown(paginationWrapper, { keyCode: KEY_CODES.ENTER });

      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 5 });
    });
  });

  describe('Pages', () => {
    it('updates onStateChange with currentPage when selected', () => {
      const { getByText } = render(<BasicExample currentPage={1} totalPages={5} />);

      fireEvent.click(getByText('2'));

      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });

    it('updates onChange with currentPage when selected', () => {
      const { getByText } = render(<BasicExample currentPage={1} totalPages={5} />);

      fireEvent.click(getByText('2'));

      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('hides front gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={25} />);
      const children = container.firstChild.children;

      expect(children[0]).toHaveClass('c-pagination__page--previous');
      expect(children[1]).toHaveClass('c-pagination__page');
      expect(children[2]).toHaveClass('c-pagination__page');
      expect(children[3]).toHaveClass('c-pagination__page');
      expect(children[4]).toHaveClass('c-pagination__page');
      expect(children[5]).toHaveClass('c-pagination__page');
      expect(children[6]).toHaveClass('c-pagination__page');
      expect(children[7]).toHaveClass('c-pagination__page');
      expect(children[8]).toHaveClass('c-pagination__page--gap');
      expect(children[9]).toHaveClass('c-pagination__page');
      expect(children[10]).toHaveClass('c-pagination__page--next');
    });

    it('hides back gap when currentPage is within padding range', () => {
      const { container } = render(<BasicExample currentPage={25} totalPages={25} />);
      const children = container.firstChild.children;

      expect(children[0]).toHaveClass('c-pagination__page--previous');
      expect(children[1]).toHaveClass('c-pagination__page');
      expect(children[2]).toHaveClass('c-pagination__page--gap');
      expect(children[3]).toHaveClass('c-pagination__page');
      expect(children[4]).toHaveClass('c-pagination__page');
      expect(children[5]).toHaveClass('c-pagination__page');
      expect(children[6]).toHaveClass('c-pagination__page');
      expect(children[7]).toHaveClass('c-pagination__page');
      expect(children[8]).toHaveClass('c-pagination__page');
      expect(children[9]).toHaveClass('c-pagination__page');
      expect(children[10]).toHaveClass('c-pagination__page--next');
    });

    it('displays both gaps if not within padding range and totalPages is greater than padding limit', () => {
      const { container } = render(<BasicExample currentPage={15} totalPages={25} />);
      const children = container.firstChild.children;

      expect(children[0]).toHaveClass('c-pagination__page--previous');
      expect(children[1]).toHaveClass('c-pagination__page');
      expect(children[2]).toHaveClass('c-pagination__page--gap');
      expect(children[3]).toHaveClass('c-pagination__page');
      expect(children[4]).toHaveClass('c-pagination__page');
      expect(children[5]).toHaveClass('c-pagination__page');
      expect(children[6]).toHaveClass('c-pagination__page');
      expect(children[7]).toHaveClass('c-pagination__page');
      expect(children[8]).toHaveClass('c-pagination__page--gap');
      expect(children[9]).toHaveClass('c-pagination__page');
      expect(children[10]).toHaveClass('c-pagination__page--next');
    });

    it('displays no gaps if less than padding limit', () => {
      const { container } = render(<BasicExample currentPage={1} totalPages={5} />);
      const children = container.firstChild.children;

      expect(children[0]).toHaveClass('c-pagination__page--previous');
      expect(children[1]).toHaveClass('c-pagination__page');
      expect(children[2]).toHaveClass('c-pagination__page');
      expect(children[3]).toHaveClass('c-pagination__page');
      expect(children[4]).toHaveClass('c-pagination__page');
      expect(children[5]).toHaveClass('c-pagination__page');
      expect(children[6]).toHaveClass('c-pagination__page--next');
    });
  });
});
