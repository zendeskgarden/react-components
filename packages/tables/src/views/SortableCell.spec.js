/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import { Sortable } from './SortableCell';

describe('SortableCell', () => {
  it('applies default styling', () => {
    const wrapper = shallow(<Sortable />);

    expect(wrapper).toHaveClassName('c-table__row__cell__sortable');
  });

  it('applies focused styling if provided', () => {
    const wrapper = shallow(<Sortable focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('applies active styling if provided', () => {
    const wrapper = shallow(<Sortable active />);

    expect(wrapper).toHaveClassName('is-active');
  });

  describe('sorting', () => {
    it('applies ascending props when applied', () => {
      const wrapper = shallow(<Sortable sort="asc" />);

      expect(wrapper).toHaveClassName('is-ascending');
    });

    it('applies descending props when applied', () => {
      const wrapper = shallow(<Sortable sort="desc" />);

      expect(wrapper).toHaveClassName('is-descending');
    });
  });
});
