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

import { render } from '../../test/render';
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
const INDICATOR = '>td:first-of-type::before';
const BORDER = '>:first-child::after';

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

  it('positions the row, not its cells', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row">
            <Cell data-test-id="cell" />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveStyleRule('position', 'relative');
    expect(getByTestId('cell')).not.toHaveStyleRule('position', expect.anything());
  });

  it('draws one bottom border, inset from the rounded ends', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    expect(row).toHaveStyleRule('inset-inline', DEFAULT_THEME.space.xs, { modifier: BORDER });
    expect(row).toHaveStyleRule(
      'border-bottom-color',
      getColor({ variable: 'border.subtle', theme: DEFAULT_THEME }),
      { modifier: BORDER }
    );
    expect(row).toHaveStyleRule('border-start-start-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:first-child'
    });
    expect(row).toHaveStyleRule('border-end-end-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:last-child'
    });
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
      modifier: css`:has(+ ${StyledGroupRow})>:first-child::after` as any
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
    expect(row).toHaveStyleRule('width', DEFAULT_THEME.shadowWidths.md, { modifier: INDICATOR });
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
      modifier: '>td:first-of-type:focus::before'
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
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]),
      { modifier: BORDER }
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

    expect(getByTestId('row')).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]),
      { modifier: `:hover${CELLS}` }
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
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[300]),
        { modifier: BORDER }
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
