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
        </Table>
      );

      expect(getByTestId('headerCell')).toHaveAttribute('scope', 'colgroup');
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

    it('sets no scope in a body row, where the browser infers it', () => {
      const { getByTestId } = render(
        <Table>
          <Body>
            <Row>
              <HeaderCell data-test-id="columnHeader">Name</HeaderCell>
              <HeaderCell>Price</HeaderCell>
            </Row>
            <Row>
              <HeaderCell data-test-id="rowHeader">Apple</HeaderCell>
              <Cell>1</Cell>
            </Row>
            <tr>
              <HeaderCell data-test-id="plainRowHeader">Pear</HeaderCell>
              <Cell>2</Cell>
            </tr>
          </Body>
        </Table>
      );

      expect(getByTestId('columnHeader')).not.toHaveAttribute('scope');
      expect(getByTestId('rowHeader')).not.toHaveAttribute('scope');
      expect(getByTestId('plainRowHeader')).not.toHaveAttribute('scope');
    });

    it('does not apply the header row default inside cell content', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <HeaderCell>
                <table>
                  <tbody>
                    <tr>
                      <HeaderCell data-test-id="inHeaderCell">Name</HeaderCell>
                    </tr>
                  </tbody>
                </table>
              </HeaderCell>
              <Cell>
                <table>
                  <tbody>
                    <tr>
                      <HeaderCell data-test-id="inCell">Name</HeaderCell>
                    </tr>
                  </tbody>
                </table>
              </Cell>
              <td>
                <Table>
                  <Body>
                    <tr>
                      <HeaderCell data-test-id="inNestedTable">Name</HeaderCell>
                    </tr>
                  </Body>
                </Table>
              </td>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('inHeaderCell')).not.toHaveAttribute('scope');
      expect(getByTestId('inCell')).not.toHaveAttribute('scope');
      expect(getByTestId('inNestedTable')).not.toHaveAttribute('scope');
    });
  });
});
