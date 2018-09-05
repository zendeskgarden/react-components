/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { KEY_CODES } from '@zendeskgarden/react-selection';

import Pagination from './Pagination';
import PaginationView from '../views/PaginationView';
import PreviousPage from '../views/PreviousPage';
import NextPage from '../views/NextPage';
import Page from '../views/Page';

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

      mountWithTheme(
        <BasicExample currentPage={1} totalPages={10} transformPageProps={transformPageProps} />
      );
    });

    it('calls provided transform function with correct page type', () => {
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

      const wrapper = mountWithTheme(
        <BasicExample currentPage={1} totalPages={10} transformPageProps={transformPageProps} />
      );

      wrapper
        .find('ul')
        .children()
        .forEach(child => {
          expect(child).toHaveProp('data-test-id', CUSTOM_PROP_VALUE);
        });
    });
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is first page', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={1} />);

      expect(wrapper.find(PreviousPage)).toHaveProp('hidden');
    });

    it('is visible otherwise', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={2} />);

      expect(wrapper.find(PreviousPage)).not.toHaveProp('hidden');
    });

    it('decrements currentPage when selected', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={3} />);

      wrapper.find(PreviousPage).simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });

    it('focuses first page when visibility is lost', () => {
      const wrapper = mountWithTheme(<Pagination totalPages={5} currentPage={2} />);
      const paginationWrapper = wrapper.find(PaginationView);

      wrapper.simulate('focus');
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.LEFT });
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.LEFT });
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.ENTER });

      expect(wrapper.state()).toMatchObject({ currentPage: 1, focusedKey: 1 });
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is final page', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={5} totalPages={5} />);

      expect(wrapper.find(NextPage)).toHaveProp('hidden');
    });

    it('is visible otherwise', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={2} totalPages={5} />);

      expect(wrapper.find(NextPage)).not.toHaveProp('hidden');
    });

    it('decrements currentPage when selected', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={3} totalPages={5} />);

      wrapper.find(NextPage).simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 4 });
    });

    it('focuses last page when visibility is lost', () => {
      const wrapper = mountWithTheme(<Pagination totalPages={5} currentPage={4} />);
      const paginationWrapper = wrapper.find(PaginationView);

      wrapper.simulate('focus');
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
      paginationWrapper.simulate('keydown', { keyCode: KEY_CODES.ENTER });

      expect(wrapper.state()).toMatchObject({ currentPage: 5, focusedKey: 5 });
    });
  });

  describe('Pages', () => {
    it('updates onStateChange with currentPage when selected', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={1} totalPages={5} />);

      wrapper
        .find(Page)
        .at(2)
        .simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });

    it('updates onChange with currentPage when selected', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={1} totalPages={5} />);

      wrapper
        .find(Page)
        .at(2)
        .simulate('click');
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it('hides front gap when currentPage is within padding range', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={1} totalPages={25} />);
      const children = wrapper
        .find(PaginationView)
        .children()
        .at(0)
        .children();

      expect(children.at(0).name()).toBe('PreviousPage');
      expect(children.at(1).name()).toBe('Page');
      expect(children.at(2).name()).toBe('Page');
      expect(children.at(3).name()).toBe('Page');
      expect(children.at(4).name()).toBe('Page');
      expect(children.at(5).name()).toBe('Page');
      expect(children.at(6).name()).toBe('Page');
      expect(children.at(7).name()).toBe('Page');
      expect(children.at(8).name()).toBe('Gap');
      expect(children.at(9).name()).toBe('Page');
      expect(children.at(10).name()).toBe('NextPage');
    });

    it('hides back gap when currentPage is within padding range', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={25} totalPages={25} />);
      const children = wrapper
        .find(PaginationView)
        .children()
        .at(0)
        .children();

      expect(children.at(0).name()).toBe('PreviousPage');
      expect(children.at(1).name()).toBe('Page');
      expect(children.at(2).name()).toBe('Gap');
      expect(children.at(3).name()).toBe('Page');
      expect(children.at(4).name()).toBe('Page');
      expect(children.at(5).name()).toBe('Page');
      expect(children.at(6).name()).toBe('Page');
      expect(children.at(7).name()).toBe('Page');
      expect(children.at(8).name()).toBe('Page');
      expect(children.at(9).name()).toBe('Page');
      expect(children.at(10).name()).toBe('NextPage');
    });

    it('displays both gaps if not within padding range and totalPages is greater than padding limit', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={15} totalPages={25} />);
      const children = wrapper
        .find(PaginationView)
        .children()
        .at(0)
        .children();

      expect(children.at(0).name()).toBe('PreviousPage');
      expect(children.at(1).name()).toBe('Page');
      expect(children.at(2).name()).toBe('Gap');
      expect(children.at(3).name()).toBe('Page');
      expect(children.at(4).name()).toBe('Page');
      expect(children.at(5).name()).toBe('Page');
      expect(children.at(6).name()).toBe('Page');
      expect(children.at(7).name()).toBe('Page');
      expect(children.at(8).name()).toBe('Gap');
      expect(children.at(9).name()).toBe('Page');
      expect(children.at(10).name()).toBe('NextPage');
    });

    it('displays no gaps if less than padding limit', () => {
      const wrapper = mountWithTheme(<BasicExample currentPage={1} totalPages={5} />);
      const children = wrapper
        .find(PaginationView)
        .children()
        .at(0)
        .children();

      expect(children.at(0).name()).toBe('PreviousPage');
      expect(children.at(1).name()).toBe('Page');
      expect(children.at(2).name()).toBe('Page');
      expect(children.at(3).name()).toBe('Page');
      expect(children.at(4).name()).toBe('Page');
      expect(children.at(5).name()).toBe('Page');
      expect(children.at(6).name()).toBe('NextPage');
    });
  });
});
