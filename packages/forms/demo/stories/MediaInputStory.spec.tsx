import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { MediaInputStory } from './MediaInputStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<MediaInputStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('MediaInputStory Component', () => {
  // Test default rendering
  it('renders default MediaInputStory', () => {
    renderAndMatchSnapshot({});
  });

  // Test with label
  it('renders MediaInputStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Search' });
  });

  // Test with regular label
  it('renders MediaInputStory with a regular label', () => {
    renderAndMatchSnapshot({ label: 'Search', isLabelRegular: true });
  });

  // Test with hidden label
  it('renders MediaInputStory with a hidden label', () => {
    renderAndMatchSnapshot({ label: 'Search', isLabelHidden: true });
  });

  // Test with hint
  it('renders MediaInputStory with a hint', () => {
    renderAndMatchSnapshot({ label: 'Search', hasHint: true, hint: 'Enter a search term' });
  });

  // Test with message
  it('renders MediaInputStory with a message', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with validation label
  it('renders MediaInputStory with a validation label', () => {
    renderAndMatchSnapshot({ label: 'Search', validationLabel: 'Invalid search term' });
  });

  // Test with start icon
  it('renders MediaInputStory with a start icon', () => {
    renderAndMatchSnapshot({ start: true });
  });

  // Test with end icon
  it('renders MediaInputStory with an end icon', () => {
    renderAndMatchSnapshot({ end: true });
  });

  // Test with both start and end icons
  it('renders MediaInputStory with both start and end icons', () => {
    renderAndMatchSnapshot({ start: true, end: true });
  });

  // Test with label, hint, and message
  it('renders MediaInputStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      hasHint: true,
      hint: 'Enter a search term',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with label, hidden label, and validation label
  it('renders MediaInputStory with a label, hidden label, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelHidden: true,
      validationLabel: 'Invalid search term'
    });
  });

  // Test with label, regular label, hint, and message
  it('renders MediaInputStory with a label, regular label, hint, and message', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a search term',
      hasMessage: true,
      message: 'This field is required'
    });
  });

  // Test with label, hidden label, hint, and validation label
  it('renders MediaInputStory with a label, hidden label, hint, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelHidden: true,
      hasHint: true,
      hint: 'Enter a search term',
      validationLabel: 'Invalid search term'
    });
  });

  // Test with label, regular label, hint, message, and validation label
  it('renders MediaInputStory with a label, regular label, hint, message, and validation label', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a search term',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid search term'
    });
  });

  // Test with Input props: disabled
  it('renders MediaInputStory with a disabled input', () => {
    renderAndMatchSnapshot({ disabled: true });
  });

  // Test with Input props: compact styling
  it('renders MediaInputStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  // Test with Input props: bare styling
  it('renders MediaInputStory with bare styling', () => {
    renderAndMatchSnapshot({ isBare: true });
  });

  // Test with Input props: readOnly
  it('renders MediaInputStory with a read-only input', () => {
    renderAndMatchSnapshot({ readOnly: true });
  });

  // Test with Input props: required
  it('renders MediaInputStory with a required input', () => {
    renderAndMatchSnapshot({ required: true });
  });

  // Test with Input props: validation success
  it('renders MediaInputStory with validation success', () => {
    renderAndMatchSnapshot({ validation: 'success' });
  });

  // Test with Input props: validation error
  it('renders MediaInputStory with validation error', () => {
    renderAndMatchSnapshot({ validation: 'error' });
  });

  // Test with Input props: validation warning
  it('renders MediaInputStory with validation warning', () => {
    renderAndMatchSnapshot({ validation: 'warning' });
  });

  // Test with combined FieldStory and MediaInput props
  it('renders MediaInputStory with label, hint, message, and compact input', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      hasHint: true,
      hint: 'Enter a search term',
      hasMessage: true,
      message: 'This field is required',
      isCompact: true
    });
  });

  it('renders MediaInputStory with label, hidden label, validation label, and bare input', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelHidden: true,
      validationLabel: 'Invalid search term',
      isBare: true
    });
  });

  it('renders MediaInputStory with label, regular label, hint, message, validation label, and disabled input', () => {
    renderAndMatchSnapshot({
      label: 'Search',
      isLabelRegular: true,
      hasHint: true,
      hint: 'Enter a search term',
      hasMessage: true,
      message: 'This field is required',
      validationLabel: 'Invalid search term',
      disabled: true
    });
  });
});
