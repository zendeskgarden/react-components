import React from 'react';
import { mountWithTheme } from 'utils';
import retrieveTheme from './retrieveTheme';
import { shallow } from 'enzyme';
import styled from 'styled-components';

describe('retrieveTheme', () => {
  const Example = styled.div`
    ${props => retrieveTheme('example', props)};
  `;

  it('should not apply theme if no ThemeProvider is found', () => {
    const wrapper = shallow(<Example />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not apply theme if no matching ID is found', () => {
    const wrapper = mountWithTheme(<Example />, false, { 'test-id': 'color: red;' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should apply theme if ID is found', () => {
    const wrapper = mountWithTheme(<Example />, false, { example: 'color: red;' });

    expect(wrapper).toMatchSnapshot();
  });
});
