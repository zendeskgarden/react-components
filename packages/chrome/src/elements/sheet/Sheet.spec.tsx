/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from 'garden-test-utils';

import { Sheet } from './Sheet';
import { ISheetProps } from '../../types';

describe('Sheet', () => {
  const user = userEvent.setup();

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

  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    await user.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

  it('contains a11y bindings to label and describe the sheet', () => {
    const { getByRole } = render(<Example isOpen />);
    const sheet = getByRole('complementary');

    expect(screen.getByLabelText('title')).toBe(sheet);
    expect(sheet).toHaveDescription('description');
  });
});
