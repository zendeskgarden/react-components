/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import Breadcrumb from './Breadcrumb';
import BreadcrumbView from '../views/BreadcrumbView';
import Item from '../views/Item';

describe('Breadcrumb', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <Breadcrumb data-test-breadcrumb={true}>
        <a href>One</a>
        <a data-test-anchor={true} href>
          Two
        </a>
        <Item data-test-item={true}>Three</Item>
      </Breadcrumb>
    );
  });

  describe('BreadcrumbView', () => {
    it('receives BreadcrumbContainer props', () => {
      expect(wrapper.find(BreadcrumbView)).toHaveProp('role', 'navigation');
    });

    it('receives Breadcrumb props', () => {
      expect(wrapper.find(BreadcrumbView)).toHaveProp('data-test-breadcrumb', true);
    });
  });

  describe('Item', () => {
    it('receives Item props', () => {
      expect(wrapper.find(Item).at(2)).toHaveProp('data-test-item', true);
    });

    it('does not receive non-Item props', () => {
      expect(wrapper.find(Item).at(1)).not.toHaveProp('data-test-anchor', true);
    });

    it('receives current styling if last', () => {
      expect(wrapper.find(Item).at(2)).toHaveProp('current', true);
    });

    it('does not receive current styling if not last', () => {
      expect(wrapper.find(Item).at(0)).not.toHaveProp('current', true);
    });
  });
});
