/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, createRef } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';

import { render, RTL_THEME } from '../../test/render';
import { stubResizeObserver } from '../../test/resizeObserver';
import DEFAULT_THEME from '../../theming/elements/theme';
import { ThemeProvider } from '../../theming/elements/ThemeProvider';
import { getColor } from '../../theming/utils/getColor';
import { ITableProps } from '../../types/elements';
import { Body } from './Body';
import { Cell } from './Cell';
import { GroupRow } from './GroupRow';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { Table } from './Table';

const GroupedTable = ({ isSticky, size }: { isSticky?: boolean; size?: ITableProps['size'] }) => (
  <Table size={size}>
    <Head isSticky={isSticky}>
      <HeaderRow />
    </Head>
    <Body>
      <GroupRow data-test-id="groupRow">
        <Cell>Fruits</Cell>
      </GroupRow>
    </Body>
  </Table>
);

describe('GroupRow', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" ref={ref} />
        </Body>
      </Table>
    );

    expect(getByTestId('groupRow')).toBe(ref.current);
  });

  it('paints rounded cells, not the row', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" />
        </Body>
      </Table>
    );
    const groupRow = getByTestId('groupRow');

    expect(groupRow).not.toHaveStyleRule('background-color', expect.anything());
    expect(groupRow).toHaveStyleRule(
      'background-color',
      getColor({ variable: 'background.subtle', theme: DEFAULT_THEME }),
      { modifier: '>:is(td, th)' }
    );
    expect(groupRow).toHaveStyleRule('border-start-start-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:first-child'
    });
    expect(groupRow).toHaveStyleRule('border-end-end-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:last-child'
    });
  });

  describe('Sticky', () => {
    afterEach(() => {
      vi.unstubAllGlobals();
      vi.restoreAllMocks();
    });

    it('does not stick without a sticky head', () => {
      const { getByTestId } = render(<GroupedTable />);

      expect(getByTestId('groupRow')).not.toHaveStyleRule('position', 'sticky');
      expect(getByTestId('groupRow')).not.toHaveStyleRule('background-color', expect.anything());
    });

    it.each([
      ['small', '44px'],
      ['medium', '52px'],
      ['large', '52px']
    ] as const)(
      'sticks below the header row and the gap of a %s table while the head measures 0',
      (size, top) => {
        const { getByTestId } = render(<GroupedTable size={size} isSticky />);
        const groupRow = getByTestId('groupRow');

        expect(groupRow).toHaveStyleRule('position', 'sticky');
        expect(groupRow).toHaveStyleRule('top', top);
        expect(groupRow).toHaveStyleRule('z-index', '1');
      }
    );

    it('sticks below the measured head and follows its resizes', () => {
      stubResizeObserver();
      const offsetHeight = vi
        .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
        .mockReturnValue(73);
      const { getByTestId } = render(<GroupedTable isSticky />);

      expect(getByTestId('groupRow')).toHaveStyleRule('top', '73px');

      offsetHeight.mockReturnValue(97);
      act(() => {
        (
          window as unknown as { resizeObserverCallback: ResizeObserverCallback }
        ).resizeObserverCallback(
          [{ contentRect: { width: 600, height: 97 } } as ResizeObserverEntry],
          {} as ResizeObserver
        );
      });

      expect(getByTestId('groupRow')).toHaveStyleRule('top', '97px');
    });

    it('sticks in the first committed frame', () => {
      const actEnvironment = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
      const isActEnvironment = actEnvironment.IS_REACT_ACT_ENVIRONMENT;
      const container = document.body.appendChild(document.createElement('div'));
      const root = createRoot(container);

      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(73);
      /* Outside `act`, which would flush passive effects and their updates first */
      actEnvironment.IS_REACT_ACT_ENVIRONMENT = false;

      try {
        flushSync(() =>
          root.render(
            <ThemeProvider>
              <GroupedTable isSticky />
            </ThemeProvider>
          )
        );

        const groupRow = container.querySelector('[data-test-id="groupRow"]');

        expect(groupRow).toHaveStyleRule('position', 'sticky');
        expect(groupRow).toHaveStyleRule('top', '73px');
      } finally {
        flushSync(() => root.unmount());
        container.remove();
        actEnvironment.IS_REACT_ACT_ENVIRONMENT = isActEnvironment;
      }
    });

    it('stops sticking when the head is no longer sticky', () => {
      stubResizeObserver();
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(73);
      const { getByTestId, rerender } = render(<GroupedTable isSticky />);

      expect(getByTestId('groupRow')).toHaveStyleRule('position', 'sticky');

      rerender(<GroupedTable />);

      expect(getByTestId('groupRow')).not.toHaveStyleRule('position', 'sticky');
      expect(getByTestId('groupRow')).not.toHaveStyleRule('background-color', expect.anything());
    });

    it('measures the head without a ResizeObserver', () => {
      vi.stubGlobal('ResizeObserver', undefined);
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(73);
      const { getByTestId } = render(<GroupedTable isSticky />);

      expect(getByTestId('groupRow')).toHaveStyleRule('top', '73px');
    });

    it('renders on the server without sticking', () => {
      const html = renderToString(
        <ThemeProvider>
          <GroupedTable isSticky />
        </ThemeProvider>
      );

      expect(html).toContain('data-garden-id="tables.group_row"');
    });

    it.each([
      ['LTR', DEFAULT_THEME, '-8px', '8px'],
      ['RTL', RTL_THEME, '8px', '-8px']
    ])('hides scrolled rows under the rounded corners in %s', (_, theme, start, end) => {
      const { getByTestId } = render(<GroupedTable isSticky />, { theme });
      const groupRow = getByTestId('groupRow');
      const color = getColor({ variable: 'background.default', theme });

      expect(groupRow).toHaveStyleRule('background-color', color);
      expect(groupRow).toHaveStyleRule(
        'box-shadow',
        `${start} -8px 0 -8px ${color},${start} 8px 0 -8px ${color}`,
        { modifier: '>:first-child' }
      );
      expect(groupRow).toHaveStyleRule(
        'box-shadow',
        `${end} -8px 0 -8px ${color},${end} 8px 0 -8px ${color}`,
        { modifier: '>:last-child' }
      );
    });
  });
});
