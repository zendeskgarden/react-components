/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { InputGroupStory } from './InputGroupStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<InputGroupStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('InputGroupStory Component', () => {
  it('renders default InputGroupStory', () => {
    renderAndMatchSnapshot({
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with a label', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      hint: 'Enter your username',
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with validation success', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      validation: 'success',
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with validation error', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      validation: 'error',
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with validation warning', () => {
    renderAndMatchSnapshot({
      label: 'Username',
      validation: 'warning',
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with compact styling', () => {
    renderAndMatchSnapshot({
      isCompact: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with bare styling', () => {
    renderAndMatchSnapshot({
      isBare: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with disabled input group', () => {
    renderAndMatchSnapshot({
      disabled: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with readOnly input group', () => {
    renderAndMatchSnapshot({
      readOnly: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isNeutral', () => {
    renderAndMatchSnapshot({
      isNeutral: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isPrimary', () => {
    renderAndMatchSnapshot({
      isPrimary: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isDanger', () => {
    renderAndMatchSnapshot({
      isDanger: true,
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with a single text input', () => {
    renderAndMatchSnapshot({
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with a single button', () => {
    renderAndMatchSnapshot({
      items: [{ text: 'Submit', isButton: true }]
    });
  });

  it('renders InputGroupStory with a text input and a button', () => {
    renderAndMatchSnapshot({
      items: [
        { text: 'Enter text', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isNeutral styling', () => {
    renderAndMatchSnapshot({
      isNeutral: true,
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with isPrimary styling', () => {
    renderAndMatchSnapshot({
      isPrimary: true,
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with isDanger styling', () => {
    renderAndMatchSnapshot({
      isDanger: true,
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with disabled input group', () => {
    renderAndMatchSnapshot({
      disabled: true,
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with readOnly input group', () => {
    renderAndMatchSnapshot({
      readOnly: true,
      items: [{ text: 'Enter text', isButton: false }]
    });
  });

  it('renders InputGroupStory with multiple buttons', () => {
    renderAndMatchSnapshot({
      items: [
        { text: 'Button 1', isButton: true },
        { text: 'Button 2', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with multiple text inputs', () => {
    renderAndMatchSnapshot({
      items: [
        { text: 'First input', isButton: false },
        { text: 'Second input', isButton: false }
      ]
    });
  });

  it('renders InputGroupStory with a mix of text inputs and buttons', () => {
    renderAndMatchSnapshot({
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true },
        { text: 'Second input', isButton: false }
      ]
    });
  });

  it('renders InputGroupStory with isNeutral and multiple items', () => {
    renderAndMatchSnapshot({
      isNeutral: true,
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isPrimary and multiple items', () => {
    renderAndMatchSnapshot({
      isPrimary: true,
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with isDanger and multiple items', () => {
    renderAndMatchSnapshot({
      isDanger: true,
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with disabled and multiple items', () => {
    renderAndMatchSnapshot({
      disabled: true,
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });

  it('renders InputGroupStory with readOnly and multiple items', () => {
    renderAndMatchSnapshot({
      readOnly: true,
      items: [
        { text: 'First input', isButton: false },
        { text: 'Submit', isButton: true }
      ]
    });
  });
});
