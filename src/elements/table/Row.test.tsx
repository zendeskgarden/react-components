/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { rgba } from 'polished';
import { createRef } from 'react';
import { css } from 'styled-components';

import { render, RTL_THEME } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { StyledGroupRow } from '../../views/table/StyledGroupRow';
import { Body } from './Body';
import { Cell } from './Cell';
import { GroupRow } from './GroupRow';
import { Row } from './Row';
import { Table } from './Table';

const CELLS = '>:is(td, th)';
const CELL_BORDERS = '>:is(td, th)::after';
const INDICATOR = '>:first-child::before';
const FIRST_BORDER = '>:first-child::after';
const LAST_BORDER = '>:last-child::after';

describe('Row', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" ref={ref} />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toBe(ref.current);
  });

  it('adds interactive tabIndex by default', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveAttribute('tabindex', '-1');
  });

  it('positions the cells, not the row', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row">
            <Cell data-test-id="cell" />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('row')).not.toHaveStyleRule('position', expect.anything());
    expect(getByTestId('row')).toHaveStyleRule('position', 'relative', { modifier: CELLS });
  });

  it('draws a bottom border per cell, inset from the rounded ends', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule('inset-inline', '0', { modifier: CELL_BORDERS });
    expect(row).toHaveStyleRule('border-bottom-width', DEFAULT_THEME.borderWidths.sm, {
      modifier: CELL_BORDERS
    });
    expect(row).toHaveStyleRule(
      'border-bottom-color',
      getColor({ variable: 'border.subtle', theme: DEFAULT_THEME })
    );
    expect(row).toHaveStyleRule('inset-inline-start', DEFAULT_THEME.space.xs, {
      modifier: FIRST_BORDER
    });
    expect(row).toHaveStyleRule('inset-inline-end', DEFAULT_THEME.space.xs, {
      modifier: LAST_BORDER
    });
    expect(row).toHaveStyleRule('border-start-start-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:first-child'
    });
    expect(row).toHaveStyleRule('border-end-end-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:last-child'
    });
  });

  it('passes the bottom border style and color from the row to the cell borders', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row">
            <Cell data-test-id="cell" />
          </Row>
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule('border-bottom', DEFAULT_THEME.borders.sm);
    expect(row).toHaveStyleRule('border-bottom-width', '0', { modifier: CELLS });

    for (const modifier of [CELLS, CELL_BORDERS]) {
      expect(row).toHaveStyleRule('border-bottom-style', 'inherit', { modifier });
      expect(row).toHaveStyleRule('border-bottom-color', 'inherit', { modifier });
    }

    expect(getByTestId('cell')).toHaveStyleRule(
      'transition',
      expect.not.stringContaining('border-color')
    );
  });

  it('drops the bottom border before a group row', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
          <GroupRow />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveStyleRule('content', 'none', {
      /* prettier-ignore */
      /* stylelint-disable */
      modifier: css`:has(+ ${StyledGroupRow})>:is(td, th)::after` as any
      /* stylelint-enable */
    });
  });

  it('applies focus styling', async () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule('content', 'none', { modifier: INDICATOR });

    await user.click(row);

    expect(row).toHaveStyleRule('content', "''", { modifier: INDICATOR });
    expect(row).toHaveStyleRule('background-color', PALETTE.blue[700], { modifier: INDICATOR });
    expect(row).toHaveStyleRule('border-start-start-radius', 'inherit', { modifier: INDICATOR });
    expect(row).toHaveStyleRule('border-end-start-radius', 'inherit', { modifier: INDICATOR });
    expect(row).toHaveStyleRule(
      'clip-path',
      `inset(0 calc(100% - ${DEFAULT_THEME.shadowWidths.md}) ${DEFAULT_THEME.borderWidths.sm} 0)`,
      { modifier: INDICATOR }
    );
  });

  it('mirrors the focus indicator in RTL', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isFocused />
        </Body>
      </Table>,
      { theme: RTL_THEME }
    );

    expect(getByTestId('row')).toHaveStyleRule(
      'clip-path',
      `inset(0 0 ${DEFAULT_THEME.borderWidths.sm} calc(100% - ${DEFAULT_THEME.shadowWidths.md}))`,
      { modifier: INDICATOR }
    );
  });

  it('applies focus styling from the isFocused prop', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isFocused />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveStyleRule('content', "''", { modifier: INDICATOR });
  });

  it('applies focus styling to a focused first cell', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveStyleRule('content', "''", {
      modifier: '>:first-child:focus::before'
    });
  });

  it('does not apply focus styling when table is readonly', async () => {
    const { getByTestId } = render(
      <Table isReadOnly>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    await user.click(row);

    expect(row).toHaveStyleRule('content', 'none', { modifier: INDICATOR });
  });

  it('removes focus styling when blurred', async () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    await user.click(row);
    await user.tab();

    expect(row).toHaveStyleRule('content', 'none', { modifier: INDICATOR });
  });

  it('renders striped styling on the cells', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isStriped />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).not.toHaveStyleRule('background-color', expect.anything());
    expect(row).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.grey[400], DEFAULT_THEME.opacity[100]),
      { modifier: CELLS }
    );
  });

  it('renders isHovered styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isHovered />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]),
      { modifier: CELLS }
    );
    expect(row).toHaveStyleRule(
      'border-bottom-color',
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200])
    );
  });

  it('renders hover styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]),
      { modifier: `:hover${CELLS}` }
    );
    expect(row).toHaveStyleRule(
      'border-bottom-color',
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]),
      { modifier: ':hover' }
    );
  });

  describe('Selected', () => {
    it('renders default styling', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" isSelected />
          </Body>
        </Table>
      );
      const row = getByTestId('row');

      expect(row).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]),
        { modifier: CELLS }
      );
      expect(row).toHaveStyleRule(
        'border-bottom-color',
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[300])
      );
    });

    it('renders isHovered styling', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" isSelected isHovered />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[300]),
        { modifier: CELLS }
      );
    });

    it('marks only selected rows', () => {
      const { getAllByRole } = render(
        <Table>
          <Body>
            <Row />
            <Row isSelected />
            <Row isSelected={false} />
          </Body>
        </Table>
      );

      expect(getAllByRole('row').map(row => row.getAttribute('data-garden-selected'))).toEqual([
        null,
        'true',
        null
      ]);
    });

    it('squares the corners where selected rows meet', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" isSelected />
          </Body>
        </Table>
      );
      const row = getByTestId('row');

      expect(row).toHaveStyleRule('border-end-start-radius', '0', {
        modifier: `:has(+ [data-garden-selected])${CELLS}`
      });
      expect(row).toHaveStyleRule('border-start-end-radius', '0', {
        modifier: `[data-garden-selected]+&${CELLS}`
      });
    });

    it('keeps rounded corners when not selected', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).not.toHaveStyleRule('border-end-start-radius', '0', {
        modifier: `:has(+ [data-garden-selected])${CELLS}`
      });
    });
  });

  describe('Sizes', () => {
    it('renders default size', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule('height', '40px');
    });

    it('renders small size', () => {
      const { getByTestId } = render(
        <Table size="small">
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule('height', '32px');
    });

    it('renders large size', () => {
      const { getByTestId } = render(
        <Table size="large">
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule('height', '48px');
    });
  });

  describe('ReadOnly', () => {
    it('removes tabIndex while in read-only mode', () => {
      const { getByTestId } = render(
        <Table isReadOnly>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).not.toHaveAttribute('tabindex');
    });

    it('does not apply hover styling', () => {
      const { getByTestId } = render(
        <Table isReadOnly>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).not.toHaveStyleRule('background-color', expect.anything(), {
        modifier: `:hover${CELLS}`
      });
    });
  });
});
