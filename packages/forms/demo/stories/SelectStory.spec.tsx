import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components'; // For styled-components snapshot testing
import { SelectStory } from './SelectStory'; // Assuming SelectStory is the default export

// Define a helper function to render the component and match snapshot
const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<SelectStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('SelectStory Component', () => {
  // Test default rendering
  it('renders default SelectStory', () => {
    renderAndMatchSnapshot({ options: ['Option 1', 'Option 2', 'Option 3'] });
  });

  // Test with label
  it('renders SelectStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Select an option', options: ['Option 1', 'Option 2'] });
  });

  // Test with regular label
  it('renders SelectStory with a regular label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelRegular: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with hidden label
  it('renders SelectStory with a hidden label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelHidden: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with hint
  it('renders SelectStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      hasHint: true,
      hint: 'Choose wisely',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with message
  it('renders SelectStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      hasMessage: true,
      message: 'This field is required',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with validation label
  it('renders SelectStory with a validation label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      validationLabel: 'Invalid selection',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with label, hint, and message
  it('renders SelectStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      hasHint: true,
      hint: 'Choose wisely',
      hasMessage: true,
      message: 'This field is required',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with label, hidden label, and validation label
  it('renders SelectStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelHidden: true,
      validationLabel: 'Invalid selection',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with label, regular label, hint, and message
  it('renders SelectStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Choose wisely',
      hasMessage: true,
      message: 'This field is required',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with label, hidden label, hint, and validation label
  it('renders SelectStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Choose wisely',
      validationLabel: 'Invalid selection',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with label, regular label, hint, message, and validation label
  it('renders SelectStory with a label, regular label, hint, message, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Choose wisely',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid selection',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with Select props: disabled
  it('renders SelectStory with a disabled select', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      disabled: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with Select props: compact styling
  it('renders SelectStory with compact styling', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isCompact: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with Select props: bare styling
  it('renders SelectStory with bare styling', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isBare: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with Select props: open state
  it('renders SelectStory with the select open', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isOpen: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with Select props: focus inset
  it('renders SelectStory with focus inset', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      focusInset: true,
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with validation success
  it('renders SelectStory with validation success', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      validation: 'success',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with validation error
  it('renders SelectStory with validation error', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      validation: 'error',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with validation warning
  it('renders SelectStory with validation warning', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      validation: 'warning',
      options: ['Option 1', 'Option 2']
    });
  });

  // Test with combined FieldStory and Select props
  it('renders SelectStory with label, hint, message, and compact select', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      hasHint: true,
      hint: 'Choose wisely',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true,
      options: ['Option 1', 'Option 2']
    });
  });

  it('renders SelectStory with label, hidden label, validation label, and bare select', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelHidden: true,
      validationLabel: 'Invalid selection',
      isBare: true,
      options: ['Option 1', 'Option 2']
    });
  });

  it('renders SelectStory with label, regular label, hint, message, validation label, and disabled select', () => {
    renderAndMatchSnapshot({
      label: 'Select an option',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Choose wisely',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid selection',
      disabled: true,
      options: ['Option 1', 'Option 2']
    });
  });
});
