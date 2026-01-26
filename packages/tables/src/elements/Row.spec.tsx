/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import userEvent from '@testing-library/user-event';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { rgba } from 'polished';
import React from 'react';
import { css } from 'styled-components';

import { StyledCell } from '../styled';
import { Body } from './Body';
import { Row } from './Row';
import { Table } from './Table';

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

    expect(row).toHaveStyleRule('box-shadow', `inset 3px 0 0 0 ${PALETTE.blue[700]}`, {
      /* prettier-ignore */
      /* stylelint-disable */
      modifier: css`${StyledCell}:first-of-type` as any
      /* stylelint-enable */
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

    expect(row).not.toHaveStyleRule('box-shadow', `inset 3px 0 0 0 ${PALETTE.blue[700]}`, {
      /* prettier-ignore */
      /* stylelint-disable */
      modifier: css`${StyledCell}:first-of-type` as any
      /* stylelint-enable */
    });
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

    expect(row).not.toHaveStyleRule('box-shadow', `inset 3px 0 0 0 ${PALETTE.blue[700]}`, {
      /* prettier-ignore */
      modifier: css`${StyledCell}:first-of-type` as any
    });
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
      rgba(PALETTE.grey[400], DEFAULT_THEME.opacity[100])
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
      rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100])
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
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[300])
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
        rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200])
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
