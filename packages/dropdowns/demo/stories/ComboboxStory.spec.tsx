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

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ComboboxStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ComboboxStory Component', () => {
  it('renders default ComboboxStory', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: []
    });
  });

  it('renders ComboboxStory with a label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isLabelRegular: true
    });
  });

  it('renders ComboboxStory with a hidden label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isLabelHidden: true
    });
  });

  it('renders ComboboxStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      hint: 'Choose wisely'
    });
  });

  it('renders ComboboxStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      message: 'This field is required'
    });
  });

  it('renders ComboboxStory with validation success', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      validation: 'success',
      validationLabel: 'Looks good!'
    });
  });

  it('renders ComboboxStory with validation error', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      validation: 'error',
      validationLabel: 'Something went wrong'
    });
  });

  it('renders ComboboxStory with validation warning', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      validation: 'warning',
      validationLabel: 'Be careful'
    });
  });

  it('renders ComboboxStory with start icon', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      startIcon: true
    });
  });

  it('renders ComboboxStory with end icon', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      endIcon: true
    });
  });

  it('renders ComboboxStory with renderValue enabled', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      renderValue: true
    });
  });

  it('renders ComboboxStory with options', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ]
    });
  });

  it('renders ComboboxStory with grouped options', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        {
          label: 'Group 1',
          options: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' }
          ]
        },
        {
          label: 'Group 2',
          options: [
            { label: 'Option 3', value: '3' },
            { label: 'Option 4', value: '4' }
          ]
        }
      ]
    });
  });

  it('renders ComboboxStory with a multiselectable combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      isMultiselectable: true
    });
  });

  it('renders ComboboxStory with a compact combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isCompact: true
    });
  });

  it('renders ComboboxStory with a bare combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isBare: true
    });
  });

  it('renders ComboboxStory with an editable combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isEditable: true
    });
  });

  it('renders ComboboxStory with an autocomplete combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      isAutocomplete: true
    });
  });

  it('renders ComboboxStory with a disabled combobox', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      isDisabled: true
    });
  });

  it('renders ComboboxStory with a custom placeholder', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      placeholder: 'Choose an option'
    });
  });

  it('renders ComboboxStory with a custom maxTags value', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ],
      isMultiselectable: true,
      maxTags: 2
    });
  });

  it('renders ComboboxStory with a custom listbox max height', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      listboxMaxHeight: '200px'
    });
  });

  it('renders ComboboxStory with a custom listbox min height', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      listboxMinHeight: '100px'
    });
  });

  it('renders ComboboxStory with a custom listbox z-index', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      listboxZIndex: 1000
    });
  });

  it('renders ComboboxStory with a custom max height', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      maxHeight: '300px'
    });
  });

  it('renders ComboboxStory with a custom listbox aria-label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      listboxAriaLabel: 'Custom aria label'
    });
  });

  it('renders ComboboxStory with a custom id', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      id: 'custom-id'
    });
  });

  it('renders ComboboxStory with a custom input value', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      inputValue: 'Custom input'
    });
  });

  it('renders ComboboxStory with a custom active index', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      activeIndex: 1
    });
  });

  it('renders ComboboxStory with a custom default active index', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      defaultActiveIndex: 0
    });
  });

  it('renders ComboboxStory with a custom default expanded state', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      defaultExpanded: true
    });
  });

  it('renders ComboboxStory with a custom focus inset', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      options: [],
      focusInset: true
    });
  });
});
