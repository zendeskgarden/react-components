/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

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

  it('throws if key is not provided to button', () => {
    console.error = jest.fn(); // eslint-disable-line no-console

    expect(() => {
      mountWithTheme(
        <ButtonGroup>
          <Button>Invalid Button</Button>
        </ButtonGroup>
      );
    }).toThrow('"key" prop must be provided to Button');
  });

  it('applies selected styling to currently selected tab', () => {
    const wrapper = mountWithTheme(basicExample);

    wrapper
      .find(Button)
      .at(1)
      .simulate('click');

    expect(wrapper.find(Button).at(1)).toHaveProp('selected', true);
  });

  it('applies focused styling to currently focused tab', () => {
    const wrapper = mountWithTheme(basicExample);

    wrapper.find(ButtonGroupView).simulate('focus');
    expect(wrapper.find(Button).at(0)).toHaveProp('focused', true);
  });

  it('applies disabled styling if provided', () => {
    const wrapper = mountWithTheme(
      <ButtonGroup>
        <Button key="button-1">Button 1</Button>
        <Button disabled>Button 2</Button>
      </ButtonGroup>
    );

    expect(wrapper.find(Button).at(1)).toHaveProp('disabled', true);
  });

  it('selected first tab if in uncontrolled state', () => {
    const wrapper = mountWithTheme(basicExample);

    expect(wrapper.find(Button).at(0)).toHaveProp('selected', true);
  });

  it('does not apply props to any component other than Button', () => {
    const wrapper = mountWithTheme(
      <ButtonGroup>
        <span>Non button test</span>
        <Button key="button-1">Button 1</Button>
      </ButtonGroup>
    );

    wrapper.find(ButtonGroupView).simulate('focus');
    expect(wrapper.children().at(0)).not.toHaveProp('focused');
  });
});
