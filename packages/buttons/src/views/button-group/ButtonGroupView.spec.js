import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import ButtonGroupView from './ButtonGroupView';

describe('ButtonGroupView', () => {
  it('renders correct styling', () => {
    const wrapper = shallow(<ButtonGroupView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly styling when RTL', () => {
    const wrapper = shallowWithTheme(<ButtonGroupView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
