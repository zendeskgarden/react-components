/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';

import { Sheet, ISheetProps } from './Sheet';

describe('Sheet', () => {
  const Example = forwardRef<HTMLElement, ISheetProps>((props: ISheetProps, ref) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          Toggle Sheet
        </button>
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
    const ref = React.createRef<HTMLDivElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

  it('is only mounted when isOpen is true', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    expect(() => getByRole('complementary')).toThrow();

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

  it('does not animate a transition when isAnimated is false', () => {
    const { getByRole, getByText } = render(<Example isAnimated={false} />);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).not.toHaveAttribute('class', 'side-sheet-transition');
  });

  it('contains a11y bindings to label and describe the sheet', () => {
    const SHEET_ID = 'TEST_ID';
    const titleId = `${SHEET_ID}--title`;
    const descriptionId = `${SHEET_ID}--description`;

    const { getByRole, getByText } = render(<Example id={SHEET_ID} isOpen />);
    const sheet = getByRole('complementary');

    expect(sheet).toHaveAttribute('aria-labelledby', titleId);
    expect(sheet).toHaveAttribute('aria-describedby', descriptionId);
    expect(getByText('title')).toHaveAttribute('id', titleId);
    expect(getByText('description')).toHaveAttribute('id', descriptionId);
  });
});
