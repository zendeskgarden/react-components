/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPanel } from './StyledPanel';

describe('StyledPanel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledPanel />);

    expect(container.firstChild).toHaveStyleRule('grid-template-rows', '0fr');
    expect(container.firstChild).toHaveStyleRule('padding', '8px 20px 32px');
    expect(container.firstChild).toHaveStyleRule('border-bottom', `${DEFAULT_THEME.borders.sm}`);
    expect(container.firstChild).toHaveStyleRule(
      'border-bottom-color',
      `${getColor('neutralHue', 300, DEFAULT_THEME)}`
    );
    expect(container.firstChild).toHaveStyleRule(
      'transition',
      'padding 0.25s ease-in-out,grid-template-rows 0.25s ease-in-out'
    );
  });

  it('renders isCompact styling correctly', () => {
    const { container } = render(<StyledPanel isCompact />);

    expect(container.firstChild).toHaveStyleRule('padding', '8px 12px 16px');
  });

  it('renders isExpanded styling correctly', () => {
    const { container } = render(<StyledPanel isExpanded />);

    expect(container.firstChild).toHaveStyleRule('padding', '8px 20px 32px');
    expect(container.firstChild).toHaveStyleRule('grid-template-rows', '1fr');
  });

  it('renders isCompact & isExpanded styling correctly', () => {
    const { container } = render(<StyledPanel isCompact isExpanded />);

    expect(container.firstChild).toHaveStyleRule('padding', '8px 12px 16px');
    expect(container.firstChild).toHaveStyleRule('grid-template-rows', '1fr');
  });

  it('renders isBare styling correctly', () => {
    const { container } = render(<StyledPanel isBare />);

    expect(container.firstChild).toHaveStyleRule('border-bottom', `${DEFAULT_THEME.borders.sm}`);
    expect(container.firstChild).toHaveStyleRule('border-bottom-color', 'transparent');
  });

  it('renders transition styling correctly', () => {
    const { container } = render(<StyledPanel isAnimated={false} />);

    expect(container.firstChild).not.toHaveStyleRule('transition');
  });
});
