/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { SortableCell } from './SortableCell';
import { Body } from './Body';
import { Row } from './Row';
import { StyledSortableButton } from '../styled';

describe('SortableCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" ref={ref} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable')).toBe(ref.current);
  });

  it('applies correct accessibility value when asc', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" sort="asc" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveAttribute('aria-sort', 'ascending');
  });

  it('applies correct accessibility value when desc', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" sort="desc" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveAttribute('aria-sort', 'descending');
  });

  it('handles truncation as expected', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" cellProps={{ isTruncated: true }} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveStyleRule('text-overflow', 'ellipsis', {
      modifier: css`
        ${StyledSortableButton}
      ` as any
    });
  });

  describe('scope', () => {
    it('defaults to column scope in a header row', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell cellProps={{ 'data-test-id': 'cell' }}>Name</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('cell')).toHaveAttribute('scope', 'col');
    });

    it('sets no scope in a body row', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row>
              <SortableCell cellProps={{ 'data-test-id': 'cell' }}>Name</SortableCell>
            </Row>
          </Body>
        </Table>
      );

      expect(getByTestId('cell')).not.toHaveAttribute('scope');
    });

    it('keeps an explicit scope from cell props', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell cellProps={{ 'data-test-id': 'cell', scope: 'colgroup' }}>
                Name
              </SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('cell')).toHaveAttribute('scope', 'colgroup');
    });
  });
});
