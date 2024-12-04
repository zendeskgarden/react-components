/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { MultiselectStory } from './MultiselectStory';
import { MULTISELECT_ITEMS } from './data';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<MultiselectStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('MultiselectStory Component', () => {
  it('renders default MultiselectStory', () => {
    renderAndMatchSnapshot({
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a regular label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelRegular: true,
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a hidden label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelHidden: true,
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      hasHint: true,
      hint: 'Select your favorite flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a validation label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      hasHint: true,
      hint: 'Select your favorite flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelHidden: true,
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Select your favorite flowers',
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a label, regular label, hint, message, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with selected items', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [MULTISELECT_ITEMS[0], MULTISELECT_ITEMS[1]],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a placeholder', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      placeholder: 'Select flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a custom input value', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: 'Aster',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn()
    });
  });

  it('renders MultiselectStory with a custom "show more" text', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [MULTISELECT_ITEMS[0], MULTISELECT_ITEMS[1], MULTISELECT_ITEMS[2]],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      showMore: 'more items'
    });
  });

  it('renders MultiselectStory with compact styling', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      isCompact: true
    });
  });

  it('renders MultiselectStory with a custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      placement: 'top'
    });
  });

  it('renders MultiselectStory with an icon', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      hasIcon: true
    });
  });

  it('renders MultiselectStory with a label, hint, message, and compact styling', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      hasHint: true,
      hint: 'Select your favorite flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      isCompact: true
    });
  });

  it('renders MultiselectStory with a label, hidden label, validation label, and custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelHidden: true,
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      placement: 'top'
    });
  });

  it('renders MultiselectStory with a label, regular label, hint, message, validation label, and icon', () => {
    renderAndMatchSnapshot({
      label: 'Flowers',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Select your favorite flowers',
      hasMessage: true,
      message: 'Please select at least one flower',
      validationLabel: 'Invalid selection',
      items: MULTISELECT_ITEMS,
      selectedItems: [],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onSelect: jest.fn(),
      hasIcon: true
    });
  });
});
