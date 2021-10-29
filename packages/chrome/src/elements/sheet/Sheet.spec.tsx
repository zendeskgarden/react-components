/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { Sheet, ISheetProps } from './Sheet';

describe('Sheet', () => {
  const SHEET_ID = 'TEST_ID';

  const SheetExample = forwardRef<HTMLElement, ISheetProps>(
    ({ isOpen, ...props }: ISheetProps, ref) => (
      <Sheet ref={ref} {...props} id={SHEET_ID} isOpen={isOpen}>
        <Sheet.Header>
          <Sheet.Title data-test-id="title">title</Sheet.Title>
          <Sheet.Description data-test-id="description">description</Sheet.Description>
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
    )
  );

  SheetExample.displayName = 'SheetExample';

  const Example = forwardRef<HTMLElement, ISheetProps>((props: ISheetProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          Toggle Sheet
        </button>
        <SheetExample ref={ref} isOpen={isOpen} id={SHEET_ID} {...props} />
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

  it('contains a11y bindings to label and describe the sheet', () => {
    const titleId = `${SHEET_ID}--title`;
    const descriptionId = `${SHEET_ID}--description`;
    const { getByRole, getByTestId } = render(<SheetExample isOpen />);
    const sheet = getByRole('complementary');

    expect(sheet).toHaveAttribute('aria-labelledby', titleId);
    expect(sheet).toHaveAttribute('aria-describedby', descriptionId);
    expect(getByTestId('title')).toHaveAttribute('id', titleId);
    expect(getByTestId('description')).toHaveAttribute('id', descriptionId);
  });

  it('does not animate a transition when isAnimated is false', () => {
    const { getByRole } = render(<SheetExample isOpen isAnimated={false} />);

    expect(getByRole('complementary')).not.toHaveAttribute('class', 'side-sheet-transition');
  });

  it('uses placement prop to apply smart border to the correct side', () => {
    const { getByRole } = render(<SheetExample isOpen placement="start" />);

    expect(getByRole('complementary')).toHaveStyleRule(
      'border-right',
      `1px solid ${DEFAULT_THEME.palette.grey[300]}`
    );
  });
});
