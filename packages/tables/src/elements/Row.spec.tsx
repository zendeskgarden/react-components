/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { Table } from './Table';
import { Body } from './Body';
import { Row } from './Row';

describe('Row', () => {
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

  it('applies default styling by default', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveClass('c-table__row');
  });

  it('applies hovered styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isHovered />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveClass('is-hovered');
  });

  it('applies selected styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isSelected />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveClass('is-selected');
  });

  it('applies focused styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isFocused />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveClass('is-focused');
  });

  it('applies striped styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" isStriped />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toHaveClass('c-table__row--stripe');
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );
      const row = getByTestId('row');

      fireEvent.focus(row);
      expect(row).toHaveClass('is-focused');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row data-test-id="row" />
          </Body>
        </Table>
      );
      const row = getByTestId('row');

      fireEvent.focus(row);
      fireEvent.blur(row);
      expect(row).not.toHaveClass('is-focused');
    });
  });
});
