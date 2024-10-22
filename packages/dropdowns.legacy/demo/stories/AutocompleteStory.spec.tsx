import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { AutocompleteStory } from './AutocompleteStory';
import { AUTOCOMPLETE_ITEMS } from './data';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<AutocompleteStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('AutocompleteStory Component', () => {
  it('renders default AutocompleteStory', () => {
    renderAndMatchSnapshot({
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a label', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a regular label', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      isLabelRegular: true,
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a hidden label', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      isLabelHidden: true,
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      hasHint: true,
      hint: 'Please select your favorite vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      hasMessage: true,
      message: 'This is a required field',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with an icon', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      hasIcon: true,
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with custom items', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: [{ text: 'Custom Item', value: 'custom-item' }],
      selectedItem: { text: 'Custom Item', value: 'custom-item' },
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with a selected item', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[1],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with input value', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: 'Asparagus',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory when open', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      isOpen: true,
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with compact menu', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      isCompact: true,
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with validation success', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      validation: 'success',
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with validation error', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      validation: 'error',
      hasIcon: false,
      placement: 'bottom'
    });
  });

  it('renders AutocompleteStory with validation warning', () => {
    renderAndMatchSnapshot({
      label: 'Select a vegetable',
      items: AUTOCOMPLETE_ITEMS,
      selectedItem: AUTOCOMPLETE_ITEMS[0],
      inputValue: '',
      onInputValueChange: jest.fn(),
      onStateChange: jest.fn(),
      validation: 'warning',
      hasIcon: false,
      placement: 'bottom'
    });
  });
});
