import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components'; // For styled-components snapshot testing
import { TextareaStory } from './TextareaStory'; // Assuming TextareaStory is the default export

// Define a helper function to render the component and match snapshot
const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TextareaStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TextareaStory Component', () => {
  // Test default rendering
  it('renders default TextareaStory', () => {
    renderAndMatchSnapshot({});
  });

  // Test with label
  it('renders TextareaStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Description' });
  });

  // Test with regular label
  it('renders TextareaStory with a regular label', () => {
    renderAndMatchSnapshot({ label: 'Description', isLabelRegular: true });
  });

  // Test with hidden label
  it('renders TextareaStory with a hidden label', () => {
    renderAndMatchSnapshot({ label: 'Description', isLabelHidden: true });
  });

  // Test with hint
  it('renders TextareaStory with a hint', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      hasHint: true,
      hint: 'Enter a brief description'
    });
  });

  // Test with message
  it('renders TextareaStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with validation label
  it('renders TextareaStory with a validation label', () => {
    renderAndMatchSnapshot({ label: 'Description', validationLabel: 'Invalid description' });
  });

  // Test with label, hint, and message
  it('renders TextareaStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      hasHint: true,
      hint: 'Enter a brief description',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with label, hidden label, and validation label
  it('renders TextareaStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelHidden: true,
      validationLabel: 'Invalid description'
    });
  });

  // Test with label, regular label, hint, and message
  it('renders TextareaStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a brief description',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with label, hidden label, hint, and validation label
  it('renders TextareaStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Enter a brief description',
      validationLabel: 'Invalid description'
    });
  });

  // Test with label, regular label, hint, message, and validation label
  it('renders TextareaStory with a label, regular label, hint, message, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a brief description',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid description'
    });
  });

  // Test with Textarea props: placeholder
  it('renders TextareaStory with a placeholder', () => {
    renderAndMatchSnapshot({ placeholder: 'Enter your description' });
  });

  // Test with Textarea props: value
  it('renders TextareaStory with a value', () => {
    renderAndMatchSnapshot({ value: 'This is a sample description' });
  });

  // Test with Textarea props: disabled
  it('renders TextareaStory with a disabled textarea', () => {
    renderAndMatchSnapshot({ disabled: true });
  });

  // Test with Textarea props: compact styling
  it('renders TextareaStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  // Test with Textarea props: bare styling
  it('renders TextareaStory with bare styling', () => {
    renderAndMatchSnapshot({ isBare: true });
  });

  // Test with Textarea props: readOnly
  it('renders TextareaStory with a read-only textarea', () => {
    renderAndMatchSnapshot({ readOnly: true });
  });

  // Test with Textarea props: required
  it('renders TextareaStory with a required textarea', () => {
    renderAndMatchSnapshot({ required: true });
  });

  // Test with Textarea props: validation success
  it('renders TextareaStory with validation success', () => {
    renderAndMatchSnapshot({ validation: 'success' });
  });

  // Test with Textarea props: validation error
  it('renders TextareaStory with validation error', () => {
    renderAndMatchSnapshot({ validation: 'error' });
  });

  // Test with Textarea props: validation warning
  it('renders TextareaStory with validation warning', () => {
    renderAndMatchSnapshot({ validation: 'warning' });
  });

  // Test with Textarea props: resizable
  it('renders TextareaStory with resizable textarea', () => {
    renderAndMatchSnapshot({ isResizable: true });
  });

  // Test with Textarea props: minRows
  it('renders TextareaStory with a minimum number of rows', () => {
    renderAndMatchSnapshot({ minRows: 3 });
  });

  // Test with Textarea props: maxRows
  it('renders TextareaStory with a maximum number of rows', () => {
    renderAndMatchSnapshot({ maxRows: 6 });
  });

  // Test with combined FieldStory and Textarea props
  it('renders TextareaStory with label, hint, message, and compact textarea', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      hasHint: true,
      hint: 'Enter a brief description',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true
    });
  });

  it('renders TextareaStory with label, hidden label, validation label, and bare textarea', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelHidden: true,
      validationLabel: 'Invalid description',
      isBare: true
    });
  });

  it('renders TextareaStory with label, regular label, hint, message, validation label, and disabled textarea', () => {
    renderAndMatchSnapshot({
      label: 'Description',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a brief description',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid description',
      disabled: true
    });
  });
});
