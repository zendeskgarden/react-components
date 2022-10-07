/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { Table } from './Table';
import { Body } from './Body';
import { Row } from './Row';
import { StyledCell } from '../styled';

describe('Row', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableRowElement>();
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

  it('applies focus styling', async () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    await user.click(row);

    expect(row).toHaveStyleRule(
      'box-shadow',
      `inset 3px 0 0 0 ${getColor('primaryHue', 600, DEFAULT_THEME)}`,
      {
        /* prettier-ignore */
        /* stylelint-disable */
        modifier: css`${StyledCell}:first-of-type` as any
        /* stylelint-enable */
      }
    );
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

    expect(row).not.toHaveStyleRule(
      'box-shadow',
      `inset 3px 0 0 0 ${getColor('primaryHue', 600, DEFAULT_THEME)}`,
      {
        /* prettier-ignore */
        /* stylelint-disable */
        modifier: css`${StyledCell}:first-of-type` as any
        /* stylelint-enable */
      }
    );
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
    row.blur();

    expect(row).not.toHaveStyleRule(
      'box-shadow',
      `inset 3px 0 0 0 ${getColor('primaryHue', 600, DEFAULT_THEME)}`,
      {
        /* prettier-ignore */
        modifier: css`${StyledCell}:first-of-type` as any
      }
    );
  });

  it('renders striped styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isStriped />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveStyleRule(
      'background-color',
      getColor('neutralHue', 100, DEFAULT_THEME)
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

    expect(getByTestId('row')).toHaveStyleRule(
      'background-color',
      getColor('primaryHue', 600, DEFAULT_THEME, 0.08)
    );
  });

  describe('Selected', () => {
    it('renders default styling', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" isSelected isHovered />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule(
        'background-color',
        getColor('primaryHue', 600, DEFAULT_THEME, 0.28)
      );
    });

    it('renders isHovered styling', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" isSelected />
          </Body>
        </Table>
      );

      expect(getByTestId('row')).toHaveStyleRule(
        'background-color',
        getColor('primaryHue', 600, DEFAULT_THEME, 0.2)
      );
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

      expect(getByTestId('row')).toHaveStyleRule('height', '64px');
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
  });
});
