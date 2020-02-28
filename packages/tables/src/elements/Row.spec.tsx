/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render, fireEvent } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { Table } from './Table';
import { Body } from './Body';
import { Row } from './Row';
import { StyledCell } from '../styled';

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

  it('applies focus styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row"></Row>
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    fireEvent.focus(row);

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

  it('removes focus styling when blurred', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row"></Row>
        </Body>
      </Table>
    );
    const row = getByTestId('row');

    fireEvent.focus(row);
    fireEvent.blur(row);

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
          <Row data-test-id="row" isStriped></Row>
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
          <Row data-test-id="row" isHovered></Row>
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
            <Row data-test-id="row" isSelected isHovered></Row>
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
            <Row data-test-id="row" isSelected></Row>
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
});
