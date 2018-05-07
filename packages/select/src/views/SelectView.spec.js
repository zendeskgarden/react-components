import React from 'react';
import { shallow } from 'enzyme';
import SelectView from './SelectView';

describe('SelectView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SelectView />);

    expect(wrapper).toMatchSnapshot();
  });
});
