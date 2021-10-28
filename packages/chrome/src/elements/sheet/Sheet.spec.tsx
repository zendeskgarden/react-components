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

  const SHEET_ID = 'TEST_ID';

  const Example = forwardRef<HTMLElement, ISheetProps>((props: ISheetProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          Toggle Sheet
        </button>
        <Sheet
          ref={ref}
          {...props}
          id={SHEET_ID}
          isOpen={isOpen}
        >
          <Sheet.Header>
            <Sheet.Title >title</Sheet.Title>
            <Sheet.Description>description</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            body
          </Sheet.Body>
          <Sheet.Footer>
            <Sheet.FooterItem>
              <button>button1</button>
            </Sheet.FooterItem>
            <Sheet.FooterItem>
              <button>button2</button>
            </Sheet.FooterItem>
          </Sheet.Footer>
        </Sheet>
      </>
    );
  });

  Example.displayName = 'Example';

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByRole, getByText } = render(<Example ref={ref}/>);

    userEvent.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

});
