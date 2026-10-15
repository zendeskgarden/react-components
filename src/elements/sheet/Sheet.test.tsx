/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState, forwardRef, createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import { ISheetProps } from '../../types/elements';
import { Sheet } from './Sheet';

describe('Sheet', () => {
  const user = userEvent.setup();

  const Example = forwardRef<HTMLElement, ISheetProps>((props: ISheetProps, ref) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    return (
      <>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
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
              <button type="button">button1</button>
            </Sheet.FooterItem>
            <Sheet.FooterItem>
              <button type="button">button2</button>
            </Sheet.FooterItem>
          </Sheet.Footer>
          <Sheet.Close />
        </Sheet>
      </>
    );
  });

  Example.displayName = 'Example';

  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    await user.click(getByText('Toggle Sheet'));

    expect(getByRole('complementary')).toBe(ref.current);
  });

  it('is inert when closed', () => {
    const { getByRole } = render(<Example />);
    const sheet = getByRole('complementary');

    expect(sheet).toHaveAttribute('inert');
  });

  it('contains a11y bindings to label and describe the sheet', () => {
    const { getByRole } = render(<Example isOpen />);
    const sheet = getByRole('complementary');

    expect(screen.getByLabelText('title')).toBe(sheet);
    expect(sheet).toHaveAccessibleDescription('description');
    expect(sheet).not.toHaveAttribute('inert');
  });

  describe('styling', () => {
    const getWrapper = (sheet: HTMLElement) => sheet.firstChild as HTMLElement;

    it('renders the closed end placement', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" />);
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('width', '0');
      expect(sheet).toHaveStyleRule('border-left', 'none');
      expect(getWrapper(sheet)).toHaveStyleRule('transform', 'translateX(100%)');
    });

    it('renders the closed end placement in RTL', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" />, { theme: RTL_THEME });
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('border-right', 'none');
      expect(getWrapper(sheet)).toHaveStyleRule('transform', 'translateX(-100%)');
    });

    it('renders the closed start placement', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" placement="start" />);
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('border-right', 'none');
      expect(getWrapper(sheet)).toHaveStyleRule('transform', 'translateX(-100%)');
    });

    it('renders the closed start placement in RTL', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" placement="start" />, {
        theme: RTL_THEME
      });
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('border-left', 'none');
      expect(getWrapper(sheet)).toHaveStyleRule('transform', 'translateX(100%)');
    });

    it('renders the size when open', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" isOpen size="200px" />);
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('width', '200px');
      expect(getWrapper(sheet)).toHaveStyleRule('min-width', '200px');
      expect(getWrapper(sheet)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('animates by default', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" />);
      const sheet = getByTestId('sheet');

      expect(sheet).toHaveStyleRule('transition', 'width 250ms ease-in-out');
      expect(getWrapper(sheet)).toHaveStyleRule('transition', 'transform 250ms ease-in-out');
    });

    it('does not animate when isAnimated is false', () => {
      const { getByTestId } = render(<Sheet data-test-id="sheet" isAnimated={false} />);
      const sheet = getByTestId('sheet');

      expect(sheet).not.toHaveStyleRule('transition', 'width 250ms ease-in-out');
      expect(getWrapper(sheet)).not.toHaveStyleRule('transition', 'transform 250ms ease-in-out');
    });
  });
});
