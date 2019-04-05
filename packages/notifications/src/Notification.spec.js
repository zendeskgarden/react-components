/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  describe('validation', () => {
    it('should render success styling correctly', () => {
      const wrapper = shallow(<Notification type="success" />);

      expect(wrapper).toHaveClassName('c-callout--success');
    });

    it('should render warning styling correctly', () => {
      const wrapper = shallow(<Notification type="warning" />);

      expect(wrapper).toHaveClassName('c-callout--warning');
    });

    it('should render error styling correctly', () => {
      const wrapper = shallow(<Notification type="error" />);

      expect(wrapper).toHaveClassName('c-callout--error');
    });

    it('should render info styling correctly', () => {
      const wrapper = shallow(<Notification type="info" />);

      expect(wrapper).toHaveClassName('c-callout--info');
    });
  });
});
