/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from 'garden-test-utils';

import { Sheet, ISheetProps } from './Sheet';

describe('Sheet', () => {
  const Example = forwardRef<HTMLElement, ISheetProps>((props: ISheetProps, ref) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    return (
      <>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Sheet</button>
        <Sheet ref={ref} isOpen={isOpen} {...props}>
          <Sheet.Header>
            <Sheet.Title>title</Sheet.Title>
            <Sheet.Description>description</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>body</Sheet.Body>
          <Sheet.Footer>
            <Sheet.FooterItem>
              <button>button1</button>
            </Sheet.FooterItem>
            <Sheet.FooterItem>
              <button>button2</button>
            </Sheet.FooterItem>
          </Sheet.Footer>
          <Sheet.Close />
        </Sheet>
      </>
    );
  });

  Example.displayName = 'Example';

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

  it('opens and closes sheet', () => {
    const { getByRole, getByText } = render(<Example />);

    expect(getByRole('complementary').firstChild).not.toBeInTheDocument();

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary').firstChild).toBeInTheDocument();
  });

  it('does not apply the animation class', () => {
    const { getByRole, getByText } = render(<Example isAnimated={false} />);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary').firstChild).not.toHaveClass('side-sheet-transition');
  });

  it('does apply the animation class', () => {
    const { getByRole, getByText } = render(<Example />);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary').firstChild).toHaveClass('side-sheet-transition-enter-active');
  });

  it('contains a11y bindings to label and describe the sheet', () => {
    const { getByRole } = render(<Example isOpen />);
    const sheet = getByRole('complementary');

    expect(screen.getByLabelText('title')).toBe(sheet);
    expect(sheet).toHaveDescription('description');
  });
});
