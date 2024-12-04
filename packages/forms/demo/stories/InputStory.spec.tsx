/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { InputStory } from './InputStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<InputStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('InputStory Component', () => {
  it('renders default InputStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders InputStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Username' });
  });

  it('renders InputStory with a regular label', () => {
    renderAndMatchSnapshot({ label: 'Username', isLabelRegular: true });
  });

  it('renders InputStory with a hidden label', () => {
    renderAndMatchSnapshot({ label: 'Username', isLabelHidden: true });
  });

  it('renders InputStory with a hint', () => {
    renderAndMatchSnapshot({ label: 'Username', hasHint: true, hint: 'Enter your username' });
  });

  it('renders InputStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders InputStory with a validation label', () => {
    renderAndMatchSnapshot({ label: 'Username', validationLabel: 'Invalid username' });
  });

  it('renders InputStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders InputStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      validationLabel: 'Invalid username'
    });
  });

  it('renders InputStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders InputStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Enter your username',
      validationLabel: 'Invalid username'
    });
  });

  it('renders InputStory with a label, regular label, hint, message, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid username'
    });
  });

  it('renders InputStory with a placeholder', () => {
    renderAndMatchSnapshot({ placeholder: 'Enter your username' });
  });

  it('renders InputStory with a value', () => {
    renderAndMatchSnapshot({ value: 'JohnDoe' });
  });

  it('renders InputStory with a disabled input', () => {
    renderAndMatchSnapshot({ disabled: true });
  });

  it('renders InputStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  it('renders InputStory with bare styling', () => {
    renderAndMatchSnapshot({ isBare: true });
  });

  it('renders InputStory with type password', () => {
    renderAndMatchSnapshot({ type: 'password' });
  });

  it('renders InputStory with a read-only input', () => {
    renderAndMatchSnapshot({ readOnly: true });
  });

  it('renders InputStory with a required input', () => {
    renderAndMatchSnapshot({ required: true });
  });

  it('renders InputStory with validation success', () => {
    renderAndMatchSnapshot({ validation: 'success' });
  });

  it('renders InputStory with validation error', () => {
    renderAndMatchSnapshot({ validation: 'error' });
  });

  it('renders InputStory with validation warning', () => {
    renderAndMatchSnapshot({ validation: 'warning' });
  });

  it('renders InputStory with label, hint, message, and compact input', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true
    });
  });

  it('renders InputStory with label, hidden label, validation label, and bare input', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      validationLabel: 'Invalid username',
      isBare: true
    });
  });

  it('renders InputStory with label, regular label, hint, message, validation label, and disabled input', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid username',
      disabled: true
    });
  });
});
