/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Body } from './Body';
import { OverflowButton } from './OverflowButton';
import { Row } from './Row';
import { Table } from './Table';

describe('OverflowButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<OverflowButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders the overflow button and icon ids, which a prop cannot replace', () => {
    const { getByTestId } = render(
      <OverflowButton data-test-id="overflow" data-garden-id="custom" />
    );
    const button = getByTestId('overflow');

    expect(button).toHaveAttribute('data-garden-id', 'tables.overflow_button');
    expect(button.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
    expect(button).toHaveAttribute('type', 'button');
  });

  it.each([
    ['small', 8],
    ['medium', 10],
    ['large', 16]
  ] as const)('centers the %s table row height', (size, rows) => {
    const { getByTestId } = render(
      <Table size={size}>
        <Body>
          <Row>
            <OverflowButton data-test-id="overflow" />
          </Row>
        </Body>
      </Table>
    );
    const height = DEFAULT_THEME.space.base * rows;

    expect(getByTestId('overflow')).toHaveStyleRule('margin-top', `calc(${height / 2}px - 1em)`);
  });

  it('keeps the medium button size in every table size', () => {
    const { getByTestId } = render(
      <Table size="small">
        <Body>
          <Row>
            <OverflowButton data-test-id="overflow" />
          </Row>
        </Body>
      </Table>
    );
    const button = getByTestId('overflow');

    expect(button).toHaveStyleRule('height', '2em');
    expect(button).toHaveStyleRule('width', '100%');
    expect(button).toHaveStyleRule('min-width', 'unset');
  });
});
