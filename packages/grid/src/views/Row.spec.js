/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

describe('Row', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders without gutters if provided', () => {
    const wrapper = shallow(<Row gutters={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Align Items', () => {
    ['start', 'center', 'end'].forEach(alignment => {
      it(`renders ${alignment} alignment if provided`, () => {
        const wrapper = shallow(<Row alignItems={alignment} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Justify Content', () => {
    ['start', 'center', 'end', 'around', 'between'].forEach(justifyContent => {
      it(`renders ${justifyContent} justify content if provided`, () => {
        const wrapper = shallow(<Row justifyContent={justifyContent} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
