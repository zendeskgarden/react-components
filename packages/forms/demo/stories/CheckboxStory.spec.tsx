/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { CheckboxStory } from './CheckboxStory';

const renderAndMatchSnapshot = (Component: React.ComponentType<any>, props: any) => {
  const { container } = render(<Component {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe(`CheckboxStory Component`, () => {
  it('renders default component', () => {
    renderAndMatchSnapshot(CheckboxStory, {});
  });

  it('renders component with a label', () => {
    renderAndMatchSnapshot(CheckboxStory, { hasLabel: true, label: 'Accept Terms' });
  });

  it('renders component with a hidden label', () => {
    renderAndMatchSnapshot(CheckboxStory, { hasLabel: false, label: 'Accept Terms' });
  });

  it('renders component with a hint', () => {
    renderAndMatchSnapshot(CheckboxStory, { hasHint: true, hint: 'This is a hint' });
  });

  it('renders component with a message', () => {
    renderAndMatchSnapshot(CheckboxStory, { hasMessage: true, message: 'This is a message' });
  });

  it('renders component with validation success', () => {
    renderAndMatchSnapshot(CheckboxStory, { validation: 'success' });
  });

  it('renders component with validation error', () => {
    renderAndMatchSnapshot(CheckboxStory, { validation: 'error' });
  });

  it('renders component with validation warning', () => {
    renderAndMatchSnapshot(CheckboxStory, { validation: 'warning' });
  });

  it('renders component with a label, hint, and message', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message'
    });
  });

  it('renders component with a label, hidden label, and validation success', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: false,
      label: 'Accept Terms',
      validation: 'success'
    });
  });

  it('renders component with a label, hint, message, and validation error', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      validation: 'error'
    });
  });

  it('renders component with a label, hidden label, hint, and validation warning', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: false,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      validation: 'warning'
    });
  });

  it('renders component with a disabled state', () => {
    renderAndMatchSnapshot(CheckboxStory, { disabled: true });
  });

  it('renders component with a read-only state', () => {
    renderAndMatchSnapshot(CheckboxStory, { readOnly: true });
  });

  it('renders component with a required state', () => {
    renderAndMatchSnapshot(CheckboxStory, { required: true });
  });

  it('renders component with a checked state', () => {
    renderAndMatchSnapshot(CheckboxStory, { checked: true });
  });

  it('renders component with label, hint, message, and disabled state', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      disabled: true
    });
  });

  it('renders component with label, hidden label, validation success, and read-only state', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: false,
      label: 'Accept Terms',
      validation: 'success',
      readOnly: true
    });
  });

  it('renders component with label, hint, message, validation error, and required state', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      validation: 'error',
      required: true
    });
  });

  it('renders component with compact styling', () => {
    renderAndMatchSnapshot(CheckboxStory, { isCompact: true });
  });

  it('renders component with a label and compact styling', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      isCompact: true
    });
  });

  it('renders component with a label, hint, and compact styling', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      isCompact: true
    });
  });

  it('renders component with a label, message, and compact styling', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });

  it('renders component with a label, hint, message, and compact styling', () => {
    renderAndMatchSnapshot(CheckboxStory, {
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });
});
