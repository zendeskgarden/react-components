/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from './StyledRadioInput';
import { StyledRadioLabel } from './StyledRadioLabel';
import { StyledMessage } from '../common/StyledMessage';

describe('StyledRadioInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledRadioInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
    expect(container.firstChild).toHaveAttribute('type', 'radio');
  });

  it('renders expected inclusive styling', () => {
    const { container } = render(<StyledRadioInput />);

    expect(container.firstChild).toHaveStyleRule('opacity', '0');
    expect(container.firstChild).not.toHaveStyleRule('clip');
    expect(container.firstChild).not.toHaveStyleRule('width', '1px');
    expect(container.firstChild).not.toHaveStyleRule('height', '1px');

    expect(container.firstChild).toHaveStyleRule('z-index', '-1', {
      modifier: `& ~ ${StyledRadioLabel}::before`
    });
    expect(container.firstChild).toHaveStyleRule('z-index', '-1', {
      modifier: `& ~ ${StyledRadioLabel} > svg`
    });
  });

  it('renders expected checked styling', () => {
    const { container } = render(<StyledRadioInput defaultChecked />);

    expect(container.firstChild).toHaveStyleRule('background-color', getColor('primaryHue', 600), {
      modifier: `:checked ~ ${StyledRadioLabel}::before`
    });
  });

  it('renders compact styling if provided', () => {
    const { container } = render(<StyledRadioInput isCompact />);

    expect(container.firstChild).toHaveStyleRule('margin-top', '4px', {
      modifier: `&& ~ ${StyledRadioLabel} ~ ${StyledMessage}`
    });
  });

  it('renders expected disabled styling', () => {
    const { container } = render(<StyledRadioInput disabled />);

    expect(container.firstChild).toHaveStyleRule('background-color', getColor('neutralHue', 200), {
      modifier: `:disabled ~ ${StyledRadioLabel}::before`
    });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRadioInput />);

    expect(container.firstChild).toHaveStyleRule('right', '0', {
      modifier: `& ~ ${StyledRadioLabel}::before`
    });
  });
});
