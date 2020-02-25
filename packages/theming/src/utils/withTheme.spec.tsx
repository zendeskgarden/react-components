/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { render, renderRtl } from 'garden-test-utils';
import withTheme from './withTheme';
import DEFAULT_THEME from '../elements/theme';

const Example: React.FunctionComponent<ThemeProps<DefaultTheme>> = ({ theme: { rtl } }) => {
  return <div data-rtl={rtl ? rtl : false}>test</div>;
};

const ThemedExample = withTheme(Example);

const Div: React.FunctionComponent<ThemeProps<DefaultTheme>> = ({ theme }) => (
  <div data-test={theme.space.base}>test</div>
);

const NoThemedExample = withTheme(Div);

describe('withTheme', () => {
  it('should apply theme prop to component with correct value in LTR mode', () => {
    const { container } = render(<ThemedExample />);

    expect(container.firstChild).toHaveAttribute('data-rtl', 'false');
  });

  it('should apply theme prop to component with correct value in RTL mode', () => {
    const { container } = renderRtl(<ThemedExample />);

    expect(container.firstChild).toHaveAttribute('data-rtl', 'true');
  });

  it('applies the default theme, if missing, to the wrapped component', () => {
    const { container } = render(<NoThemedExample />);

    expect(container.firstChild).toHaveAttribute('data-test', DEFAULT_THEME.space.base.toString());
  });

  it('allows a custom theme to be applied to the wrapped component', () => {
    const VALUE = 25;
    const theme = {
      ...DEFAULT_THEME,
      space: {
        ...DEFAULT_THEME.space,
        base: VALUE
      }
    };
    const { container } = render(<NoThemedExample theme={theme} />);

    expect(container.firstChild).toHaveAttribute('data-test', VALUE.toString());
  });
});
