/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import PaginationContainer from './PaginationContainer';

describe('PaginationContainer', () => {
  const pages = [1, 2, 3, 4, 5];

  const BasicExample = () => (
    <PaginationContainer>
      {({
        getContainerProps,
        getPageProps,
        getPreviousPageProps,
        getNextPageProps,
        focusedKey,
        selectedKey
      }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })}>
          <div
            {...getPreviousPageProps({
              'data-test-id': 'previous',
              key: 'previous',
              'data-focused': focusedKey === 'previous',
              'data-selected': selectedKey === 'previous'
            })}
          />
          {pages.map(page => (
            <div
              {...getPageProps({
                key: page,
                'data-test-id': 'page',
                'data-selected': page === selectedKey,
                'data-focused': page === focusedKey
              })}
            >
              {page}
            </div>
          ))}
          <div
            {...getNextPageProps({
              'data-test-id': 'next',
              key: 'next',
              'data-focused': focusedKey === 'next',
              'data-selected': selectedKey === 'next'
            })}
          />
        </div>
      )}
    </PaginationContainer>
  );

  describe('getContainerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { container } = render(<BasicExample />);

      expect(container.firstChild).toHaveAttribute('role', 'listbox');
      expect(container.firstChild).toHaveAttribute('aria-label', 'Pagination navigation');
    });
  });

  describe('getPreviousPageProps()', () => {
    it('throws if key is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <PaginationContainer>
            {({ getPreviousPageProps }) => <div {...getPreviousPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getPreviousPageProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('applies correct accessibility attributes', () => {
      const { container } = render(<BasicExample />);

      expect(container.firstChild.children[0]).toHaveAttribute('aria-label', 'Previous page');
    });
  });

  describe('getNextPageProps()', () => {
    it('throws if key is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <PaginationContainer>
            {({ getNextPageProps }) => <div {...getNextPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getNextPageProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('applies correct accessibility attributes', () => {
      const { container } = render(<BasicExample />);

      expect(
        container.firstChild.children[container.firstChild.children.length - 1]
      ).toHaveAttribute('aria-label', 'Next page');
    });
  });

  describe('getPageProps()', () => {
    it('throws if key is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <PaginationContainer>
            {({ getPageProps }) => <div {...getPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getPageProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('applies correct accessibility attributes if not current page', () => {
      const { container } = render(<BasicExample />);

      expect(container.firstChild.children[1]).toHaveAttribute('aria-label', 'Page 1');
    });

    it('applies correct accessibility attributes if current page', () => {
      const { container } = render(<BasicExample />);
      const firstPage = container.firstChild.children[1];

      fireEvent.click(firstPage);

      expect(firstPage).toHaveAttribute('aria-label', 'Current page, Page 1');
    });
  });
});
