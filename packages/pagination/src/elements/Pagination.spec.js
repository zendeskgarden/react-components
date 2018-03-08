import React from 'react';
import { mount } from 'enzyme';

import Pagination from './Pagination';
import PaginationView from '../views/PaginationView';
import PreviousPage from '../views/PreviousPage';
import NextPage from '../views/NextPage';
import Page from '../views/Page';

describe('Pagination', () => {
  let onStateChange;

  const BasicExample = ({ currentPage = 1, totalPages = 5 } = {}) => (
    <Pagination totalPages={totalPages} currentPage={currentPage} onStateChange={onStateChange} />
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    onStateChange = jest.fn();
  });

  describe('Previous Page', () => {
    it('is visible if currentPage is first page', () => {
      const wrapper = mount(<BasicExample currentPage={1} />);

      expect(wrapper.find(PreviousPage)).toHaveProp('hidden');
    });

    it('is visible otherwise', () => {
      const wrapper = mount(<BasicExample currentPage={2} />);

      expect(wrapper.find(PreviousPage)).not.toHaveProp('hidden');
    });

    it('decrements currentPage when selected', () => {
      const wrapper = mount(<BasicExample currentPage={3} />);

      wrapper.find(PreviousPage).simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });
  });

  describe('Next Page', () => {
    it('is visible if currentPage is final page', () => {
      const wrapper = mount(<BasicExample currentPage={5} totalPages={5} />);

      expect(wrapper.find(NextPage)).toHaveProp('hidden');
    });

    it('is visible otherwise', () => {
      const wrapper = mount(<BasicExample currentPage={2} totalPages={5} />);

      expect(wrapper.find(NextPage)).not.toHaveProp('hidden');
    });

    it('decrements currentPage when selected', () => {
      const wrapper = mount(<BasicExample currentPage={3} totalPages={5} />);

      wrapper.find(NextPage).simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 4 });
    });
  });

  describe('Pages', () => {
    it('updates currentPage when selected', () => {
      const wrapper = mount(<BasicExample currentPage={1} totalPages={5} />);

      wrapper
        .find(Page)
        .at(2)
        .simulate('click');
      expect(onStateChange).toHaveBeenCalledWith({ currentPage: 2 });
    });

    it('hides front gap when currentPage is within padding range', () => {
      const wrapper = mount(<BasicExample currentPage={1} totalPages={25} />);
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
      const wrapper = mount(<BasicExample currentPage={25} totalPages={25} />);
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
      const wrapper = mount(<BasicExample currentPage={15} totalPages={25} />);
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
      const wrapper = mount(<BasicExample currentPage={1} totalPages={5} />);
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
