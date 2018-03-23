import React from 'react';
import { shallow } from 'enzyme';

import MediaFigure from './MediaFigure';

describe('MediaFigure', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<MediaFigure />);

    expect(wrapper).toMatchSnapshot();
  });
});
