/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from './StyledRadioInput';
import { StyledRadioLabel } from './StyledRadioLabel';
import { StyledMessage } from '../common/StyledMessage';
import { rgba } from 'polished';

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
  });

  it('renders expected checked styling', () => {
    const { container } = render(<StyledRadioInput defaultChecked />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.blue[700], {
      modifier: `:checked~${StyledRadioLabel}::before`
    });
  });

  it('renders compact styling if provided', () => {
    const { container } = render(<StyledRadioInput $isCompact />);

    expect(container.firstChild).toHaveStyleRule('margin-top', '4px', {
      modifier: `&&~${StyledRadioLabel}~${StyledMessage}`
    });
  });

  it('renders expected disabled styling', () => {
    const { container } = render(<StyledRadioInput disabled />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.grey[700], 0.24),
      {
        modifier: `&:disabled~${StyledRadioLabel}::before`
      }
    );
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRadioInput />);

    expect(container.firstChild).toHaveStyleRule('right', '0', {
      modifier: `&~${StyledRadioLabel}::before`
    });
  });
});
