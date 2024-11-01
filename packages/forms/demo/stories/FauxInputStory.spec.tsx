/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { FauxInputStory } from './FauxInputStory';

export const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<FauxInputStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('FauxInputStory Component', () => {
  it('renders default FauxInputStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders FauxInputStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Username' });
  });

  it('renders FauxInputStory with a regular label', () => {
    renderAndMatchSnapshot({ label: 'Username', isLabelRegular: true });
  });

  it('renders FauxInputStory with a hidden label', () => {
    renderAndMatchSnapshot({ label: 'Username', isLabelHidden: true });
  });

  it('renders FauxInputStory with a hint', () => {
    renderAndMatchSnapshot({ label: 'Username', hasHint: true, hint: 'Enter your username' });
  });

  it('renders FauxInputStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders FauxInputStory with a validation label', () => {
    renderAndMatchSnapshot({ label: 'Username', validationLabel: 'Invalid username' });
  });

  it('renders FauxInputStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders FauxInputStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      validationLabel: 'Invalid username'
    });
  });

  it('renders FauxInputStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  it('renders FauxInputStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Enter your username',
      validationLabel: 'Invalid username'
    });
  });

  it('renders FauxInputStory with a label, regular label, hint, message, and validation label', () => {
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

  it('renders FauxInputStory with a placeholder', () => {
    renderAndMatchSnapshot({ placeholder: 'Enter your username' });
  });

  it('renders FauxInputStory with a value', () => {
    renderAndMatchSnapshot({ value: 'JohnDoe' });
  });

  it('renders FauxInputStory with a disabled input', () => {
    renderAndMatchSnapshot({ disabled: true });
  });

  it('renders FauxInputStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  it('renders FauxInputStory with bare styling', () => {
    renderAndMatchSnapshot({ isBare: true });
  });

  it('renders FauxInputStory with a read-only input', () => {
    renderAndMatchSnapshot({ readOnly: true });
  });

  it('renders FauxInputStory with a required input', () => {
    renderAndMatchSnapshot({ required: true });
  });

  it('renders FauxInputStory with validation success', () => {
    renderAndMatchSnapshot({ validation: 'success' });
  });

  it('renders FauxInputStory with validation error', () => {
    renderAndMatchSnapshot({ validation: 'error' });
  });

  it('renders FauxInputStory with validation warning', () => {
    renderAndMatchSnapshot({ validation: 'warning' });
  });

  it('renders FauxInputStory with label, hint, message, and compact input', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hasHint: true,
      hint: 'Enter your username',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true
    });
  });

  it('renders FauxInputStory with label, hidden label, validation label, and bare input', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      isLabelHidden: true,
      validationLabel: 'Invalid username',
      isBare: true
    });
  });

  it('renders FauxInputStory with label, regular label, hint, message, validation label, and disabled input', () => {
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
