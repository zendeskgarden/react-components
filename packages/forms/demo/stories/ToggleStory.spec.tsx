/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ToggleStory } from './ToggleStory';

const renderAndMatchSnapshot = (Component: React.ComponentType<any>, props: any) => {
  const { container } = render(<Component {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe(`ToggleStory Component`, () => {
  it('renders default component', () => {
    renderAndMatchSnapshot(ToggleStory, {});
  });

  it('renders component with a label', () => {
    renderAndMatchSnapshot(ToggleStory, { hasLabel: true, label: 'Accept Terms' });
  });

  it('renders component with a hidden label', () => {
    renderAndMatchSnapshot(ToggleStory, { hasLabel: false, label: 'Accept Terms' });
  });

  it('renders component with a hint', () => {
    renderAndMatchSnapshot(ToggleStory, { hasHint: true, hint: 'This is a hint' });
  });

  it('renders component with a message', () => {
    renderAndMatchSnapshot(ToggleStory, { hasMessage: true, message: 'This is a message' });
  });

  it('renders component with validation success', () => {
    renderAndMatchSnapshot(ToggleStory, { validation: 'success' });
  });

  it('renders component with validation error', () => {
    renderAndMatchSnapshot(ToggleStory, { validation: 'error' });
  });

  it('renders component with validation warning', () => {
    renderAndMatchSnapshot(ToggleStory, { validation: 'warning' });
  });

  it('renders component with a label, hint, and message', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: true,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message'
    });
  });

  it('renders component with a label, hidden label, and validation success', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: false,
      label: 'Accept Terms',
      validation: 'success'
    });
  });

  it('renders component with a label, hint, message, and validation error', () => {
    renderAndMatchSnapshot(ToggleStory, {
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
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: false,
      label: 'Accept Terms',
      hasHint: true,
      hint: 'This is a hint',
      validation: 'warning'
    });
  });

  it('renders component with a disabled state', () => {
    renderAndMatchSnapshot(ToggleStory, { disabled: true });
  });

  it('renders component with a read-only state', () => {
    renderAndMatchSnapshot(ToggleStory, { readOnly: true });
  });

  it('renders component with a required state', () => {
    renderAndMatchSnapshot(ToggleStory, { required: true });
  });

  it('renders component with a checked state', () => {
    renderAndMatchSnapshot(ToggleStory, { checked: true });
  });

  it('renders component with label, hint, message, and disabled state', () => {
    renderAndMatchSnapshot(ToggleStory, {
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
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: false,
      label: 'Accept Terms',
      validation: 'success',
      readOnly: true
    });
  });

  it('renders component with label, hint, message, validation error, and required state', () => {
    renderAndMatchSnapshot(ToggleStory, {
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
    renderAndMatchSnapshot(ToggleStory, { isCompact: true });
  });

  it('renders component with a label and compact styling', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: true,
      isCompact: true
    });
  });

  it('renders component with a label, hint, and compact styling', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      isCompact: true
    });
  });

  it('renders component with a label, message, and compact styling', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: true,
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });

  it('renders component with a label, hint, message, and compact styling', () => {
    renderAndMatchSnapshot(ToggleStory, {
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });
});
