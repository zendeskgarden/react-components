import React from 'react';
import { mount } from 'enzyme';

import ButtonGroup from './ButtonGroup';
import ButtonGroupView from '../views/button-group/ButtonGroupView';
import Button from '../views/Button';

describe('ButtonGroup', () => {
  const basicExample = (
    <ButtonGroup>
      <Button key="button-1">Button 1</Button>
      <Button key="button-2">Button 2</Button>
    </ButtonGroup>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
  });

  it('throws if key is not provided to button', () => {
    console.error = jest.fn(); // eslint-disable-line no-console

    expect(() => {
      mount(
        <ButtonGroup>
          <Button>Invalid Button</Button>
        </ButtonGroup>
      );
    }).toThrow('"key" prop must be provided to Button');
  });

  it('applies selected styling to currently selected tab', () => {
    const wrapper = mount(basicExample);

    wrapper
      .find(Button)
      .at(1)
      .simulate('click');

    expect(wrapper.find(Button).at(1)).toHaveProp('selected', true);
  });

  it('applies focused styling to currently focused tab', () => {
    const wrapper = mount(basicExample);

    wrapper.find(ButtonGroupView).simulate('focus');
    expect(wrapper.find(Button).at(0)).toHaveProp('focused', true);
  });

  it('applies disabled styling if provided', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button key="button-1">Button 1</Button>
        <Button disabled>Button 2</Button>
      </ButtonGroup>
    );

    expect(wrapper.find(Button).at(1)).toHaveProp('disabled', true);
  });

  it('selected first tab if in uncontrolled state', () => {
    const wrapper = mount(basicExample);

    expect(wrapper.find(Button).at(0)).toHaveProp('selected', true);
  });

  it('does not apply props to any component other than Button', () => {
    const wrapper = mount(
      <ButtonGroup>
        <span>Non button test</span>
        <Button key="button-1">Button 1</Button>
      </ButtonGroup>
    );

    wrapper.find(ButtonGroupView).simulate('focus');
    expect(wrapper.children().at(0)).not.toHaveProp('focused');
  });
});
