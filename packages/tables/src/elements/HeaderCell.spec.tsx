/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { hideVisually } from 'polished';
import { render, renderRtl } from 'garden-test-utils';

import { Table } from './Table';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { HeaderCell } from './HeaderCell';
import { Body } from './Body';
import { Row } from './Row';
import { Cell } from './Cell';

describe('HeaderCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableHeaderCellElement>();
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" ref={ref} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).toBe(ref.current);
  });

  it('renders RTL styling', () => {
    const { getByTestId } = renderRtl(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).toHaveStyleRule('text-align', 'right');
  });

  it('renders hasOverflow styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" hasOverflow />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).not.toHaveStyleRule('text-align');
  });

  it('renders truncated styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" isTruncated />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).toHaveStyleRule('text-overflow', 'ellipsis');
  });

  it('applies visually hidden styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" hidden>
              Foo
            </HeaderCell>
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell').firstChild).toHaveStyle(hideVisually());
  });

  describe('scope', () => {
    it('defaults to column scope in a header row', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <HeaderCell data-test-id="headerCell">Name</HeaderCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('headerCell')).toHaveAttribute('scope', 'col');
    });

    it('defaults to row scope in a body row', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row>
              <HeaderCell data-test-id="headerCell">Name</HeaderCell>
              <Cell>Value</Cell>
            </Row>
          </Body>
        </Table>
      );

      expect(getByTestId('headerCell')).toHaveAttribute('scope', 'row');
    });

    it('keeps an explicit scope', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <HeaderCell data-test-id="headerCell" scope="colgroup" colSpan={2}>
                Group
              </HeaderCell>
            </HeaderRow>
          </Head>
          <Body>
            <Row>
              <HeaderCell data-test-id="bodyHeaderCell" scope="col">
                Name
              </HeaderCell>
            </Row>
          </Body>
        </Table>
      );

      expect(getByTestId('headerCell')).toHaveAttribute('scope', 'colgroup');
      expect(getByTestId('bodyHeaderCell')).toHaveAttribute('scope', 'col');
    });

    it('applies the default when the given scope is undefined', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <HeaderCell data-test-id="headerCell" scope={undefined}>
                Name
              </HeaderCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('headerCell')).toHaveAttribute('scope', 'col');
    });

    it('sets no scope outside a Garden row', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <tr>
              <HeaderCell data-test-id="headerCell">Name</HeaderCell>
            </tr>
          </Body>
        </Table>
      );

      expect(getByTestId('headerCell')).not.toHaveAttribute('scope');
    });

    it('does not leak row scope into a nested table', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row>
              <Cell>
                <Table>
                  <Body>
                    <tr>
                      <HeaderCell data-test-id="headerCell">Name</HeaderCell>
                    </tr>
                  </Body>
                </Table>
              </Cell>
            </Row>
          </Body>
        </Table>
      );

      expect(getByTestId('headerCell')).not.toHaveAttribute('scope');
    });
  });
});
