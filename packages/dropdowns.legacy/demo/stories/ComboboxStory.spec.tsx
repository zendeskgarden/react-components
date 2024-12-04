/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ComboboxStory } from './ComboboxStory';
import { AUTOCOMPLETE_ITEMS } from './data';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ComboboxStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ComboboxStory Component', () => {
  it('renders default ComboboxStory', () => {
    renderAndMatchSnapshot({
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a regular label', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelRegular: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a hidden label', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelHidden: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasHint: true,
      hint: 'Select your favorite vegetable',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasMessage: true,
      message: 'This field is required',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a start icon', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasStartIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with an end icon', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasEndIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with both start and end icons', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasStartIcon: true,
      hasEndIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a compact menu', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isCompact: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      placement: 'top',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, hidden label, and start icon', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelHidden: true,
      hasStartIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, hidden label, hint, and end icon', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasEndIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, regular label, hint, message, and compact menu', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, hidden label, hint, message, and custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      placement: 'top',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, regular label, hint, message, start icon, and end icon', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      hasStartIcon: true,
      hasEndIcon: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a label, hidden label, hint, message, compact menu, and custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Select your favorite vegetable',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true,
      placement: 'top',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a disabled input', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      disabled: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a controlled input value', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      inputValue: 'Tomato',
      items: AUTOCOMPLETE_ITEMS
    });
  });

  it('renders ComboboxStory with a controlled open state', () => {
    renderAndMatchSnapshot({
      label: 'Vegetables',
      isOpen: true,
      items: AUTOCOMPLETE_ITEMS
    });
  });
});
