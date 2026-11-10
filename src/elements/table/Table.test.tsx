/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import { Item } from '../dropdown/Item';
import { Menu } from '../dropdown/Menu';
import { Tooltip } from '../tooltip/Tooltip';
import { Body } from './Body';
import { Cell } from './Cell';
import { Row } from './Row';
import { Table } from './Table';

/**
 * Flush floating-ui-related microtasks before interacting with test fixture
 * https://floating-ui.com/docs/react#testing
 */
// eslint-disable-next-line require-await
const floating = async () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return act(async () => {});
};

describe('Table', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableElement>();
    const { container } = render(<Table ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('uses the separate border model', () => {
    const { container } = render(<Table />);

    expect(container.firstChild).toHaveStyleRule('border-collapse', 'separate');
    expect(container.firstChild).toHaveStyleRule('border-spacing', '0');
  });

  it('keeps the width of a menu inside the table', async () => {
    const menu = (
      <Menu button="trigger" isExpanded>
        <Item value="item">Item</Item>
      </Menu>
    );
    const { container } = render(
      <>
        <Table>
          <Body>
            <Row>
              <Cell>{menu}</Cell>
            </Row>
          </Body>
        </Table>
        {menu}
      </>
    );

    await floating();

    const floatings = [
      ...container.querySelectorAll('[data-garden-id="dropdowns.menu.floating"]')
    ] as HTMLElement[];
    const inTable = floatings.find(el => el.closest('table'))!;
    const outside = floatings.find(el => !el.closest('table'))!;

    expect(getComputedStyle(inTable).width).toBe('max-content');
    expect(getComputedStyle(outside).width).not.toBe('max-content');
  });

  it('stacks a tooltip inside the table over the rows below', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell>
              <Tooltip content="tip" isInitialVisible data-test-id="tooltip">
                <button type="button">trigger</button>
              </Tooltip>
            </Cell>
          </Row>
        </Body>
      </Table>
    );
    const wrapperStyle = getComputedStyle(getByTestId('tooltip').parentElement!);

    expect(wrapperStyle.width).toBe('max-content');
    expect(wrapperStyle.zIndex).toBe('1');
  });

  it('keeps an explicit tooltip zIndex inside the table', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell>
              <Tooltip content="tip" isInitialVisible zIndex={5} data-test-id="tooltip">
                <button type="button">trigger</button>
              </Tooltip>
            </Cell>
          </Row>
        </Body>
      </Table>
    );

    /* jsdom's getComputedStyle doesn't honor :where()'s zero specificity (it
     * resolves the table's z-index: 1), so assert the wrapper's own rule: in a
     * browser it out-specifies the table's :where(...) rule. */
    expect(getByTestId('tooltip').parentElement!).toHaveStyleRule('z-index', '5');
  });

  it('leaves a tooltip outside the table alone', () => {
    const { getByTestId } = render(
      <Tooltip content="tip" isInitialVisible data-test-id="tooltip">
        <button type="button">trigger</button>
      </Tooltip>
    );
    const wrapperStyle = getComputedStyle(getByTestId('tooltip').parentElement!);

    expect(wrapperStyle.width).not.toBe('max-content');
    expect(wrapperStyle.zIndex).not.toBe('1');
  });
});
