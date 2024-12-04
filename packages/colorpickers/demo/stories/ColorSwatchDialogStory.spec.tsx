/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ColorSwatchDialogStory } from './ColorSwatchDialogStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ColorSwatchDialogStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ColorSwatchDialogStory Component (isOpen: true)', () => {
  it('renders ColorSwatchDialogStory with a controlled color swatch and the dialog open', () => {
    renderAndMatchSnapshot({
      name: 'color-swatch',
      colors: [
        [
          { value: '#ff0000', label: 'Red' },
          { value: '#00ff00', label: 'Green' }
        ],
        [
          { value: '#0000ff', label: 'Blue' },
          { value: '#ffff00', label: 'Yellow' }
        ]
      ],
      selectedRowIndex: 0,
      selectedColIndex: 1,
      isOpen: true
    });
  });

  it('renders ColorSwatchDialogStory with a checkbox group and the dialog open', () => {
    renderAndMatchSnapshot({
      name: 'color-swatch',
      colors: [
        [
          { value: '#ff0000', label: 'Red' },
          { value: '#00ff00', label: 'Green' }
        ],
        [
          { value: '#0000ff', label: 'Blue' },
          { value: '#ffff00', label: 'Yellow' }
        ]
      ],
      isCheckboxGroup: true,
      isOpen: true
    });
  });

  it('renders ColorSwatchDialogStory with default selected row and column and the dialog open', () => {
    renderAndMatchSnapshot({
      name: 'color-swatch',
      colors: [
        [
          { value: '#ff0000', label: 'Red' },
          { value: '#00ff00', label: 'Green' }
        ],
        [
          { value: '#0000ff', label: 'Blue' },
          { value: '#ffff00', label: 'Yellow' }
        ]
      ],
      defaultSelectedRowIndex: 1,
      defaultSelectedColIndex: 0,
      isOpen: true
    });
  });

  it('renders ColorSwatchDialogStory with a custom onSelect handler and the dialog open', () => {
    const mockOnSelect = jest.fn();
    renderAndMatchSnapshot({
      name: 'color-swatch',
      colors: [
        [
          { value: '#ff0000', label: 'Red' },
          { value: '#00ff00', label: 'Green' }
        ],
        [
          { value: '#0000ff', label: 'Blue' },
          { value: '#ffff00', label: 'Yellow' }
        ]
      ],
      onSelect: mockOnSelect,
      isOpen: true
    });
  });

  it('renders ColorSwatchDialogStory with a combination of custom props and the dialog open', () => {
    renderAndMatchSnapshot({
      name: 'color-swatch',
      colors: [
        [
          { value: '#ff0000', label: 'Red' },
          { value: '#00ff00', label: 'Green' }
        ],
        [
          { value: '#0000ff', label: 'Blue' },
          { value: '#ffff00', label: 'Yellow' }
        ]
      ],
      placement: 'bottom',
      disabled: false,
      zIndex: 2000,
      hasArrow: true,
      isAnimated: true,
      isOpen: true,
      focusInset: true,
      buttonProps: { 'aria-label': 'Custom button' },
      selectedRowIndex: 0,
      selectedColIndex: 1
    });
  });
});
