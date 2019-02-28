/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  describe('validation', () => {
    it('should render success styling correctly', () => {
      const wrapper = shallow(<Alert type="success" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render warning styling correctly', () => {
      const wrapper = shallow(<Alert type="warning" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error styling correctly', () => {
      const wrapper = shallow(<Alert type="error" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render info styling correctly', () => {
      const wrapper = shallow(<Alert type="info" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
