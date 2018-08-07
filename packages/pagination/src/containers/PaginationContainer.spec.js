/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import PaginationContainer from './PaginationContainer';

describe('PaginationContainer', () => {
  let wrapper;
  const pages = [1, 2, 3, 4, 5];

  const basicExample = () => (
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

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  const findContainer = enzymeWrapper => enzymeWrapper.find('[data-test-id="container"]');
  const findPage = enzymeWrapper => enzymeWrapper.find('[data-test-id="page"]');
  const findPrevious = enzymeWrapper => enzymeWrapper.find('[data-test-id="previous"]');
  const findNext = enzymeWrapper => enzymeWrapper.find('[data-test-id="next"]');

  describe('getContainerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const container = findContainer(wrapper);

      expect(container).toHaveProp('role', 'navigation');
      expect(container).toHaveProp('aria-label', 'Pagination');
    });
  });

  describe('getPreviousPageProps()', () => {
    it('throws if key is not provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mountWithTheme(
          <PaginationContainer>
            {({ getPreviousPageProps }) => <div {...getPreviousPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getPreviousPageProps regardless of being used within a .map()'
      );
    });

    it('applies correct accessibility attributes', () => {
      expect(findPrevious(wrapper)).toHaveProp('aria-label', 'Previous page');
    });
  });

  describe('getNextPageProps()', () => {
    it('throws if key is not provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mountWithTheme(
          <PaginationContainer>
            {({ getNextPageProps }) => <div {...getNextPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getNextPageProps regardless of being used within a .map()'
      );
    });

    it('applies correct accessibility attributes', () => {
      expect(findNext(wrapper)).toHaveProp('aria-label', 'Next page');
    });
  });

  describe('getPageProps()', () => {
    it('throws if key is not provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mountWithTheme(
          <PaginationContainer>
            {({ getPageProps }) => <div {...getPageProps()} />}
          </PaginationContainer>
        );
      }).toThrow(
        '"key" must be defined within getPageProps regardless of being used within a .map()'
      );
    });

    it('applies correct accessibility attributes if not current page', () => {
      expect(findPage(wrapper).at(0)).toHaveProp('aria-label', 'Page 1');
    });

    it('applies correct accessibility attributes if current page', () => {
      findPage(wrapper)
        .at(0)
        .simulate('click');
      expect(findPage(wrapper).at(0)).toHaveProp('aria-label', 'Current page, Page 1');
    });
  });
});
