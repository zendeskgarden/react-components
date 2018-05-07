import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  describe('validation', () => {
    it('should render success styling correctly', () => {
      const wrapper = shallow(<Notification type="success" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render warning styling correctly', () => {
      const wrapper = shallow(<Notification type="warning" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error styling correctly', () => {
      const wrapper = shallow(<Notification type="error" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
