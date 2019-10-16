/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Dots from './Dots';

jest.useFakeTimers();

describe('Dots', () => {
  beforeEach(() => {
    clearTimeout.mockClear();
    global.cancelAnimationFrame = jest.fn();
    global.requestAnimationFrame = jest.fn();
  });

  describe('Loading delay', () => {
    it('hides loader for initial delay', () => {
      const { queryByTestId } = render(<Dots data-test-id="dots" />);

      expect(queryByTestId('dots')).toBeNull();
    });

    it('shows loader after initial delay', () => {
      const { queryByTestId } = render(<Dots data-test-id="dots" />);

      jest.runOnlyPendingTimers();

      expect(queryByTestId('dots')).not.toBeNull();
    });
  });

  describe('Animation', () => {
    it('updates animation after request animation frame', () => {
      const { container } = render(<Dots data-test-id="dots" />);

      jest.runOnlyPendingTimers();

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(31 32)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(0 27.333333331333325)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(62 27)"
  />
</g>
`);

      // Requestion animation with 1000 MS delay
      requestAnimationFrame.mock.calls[0][0](1000);

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(0 27)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(47.71816926427921 27)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(47.12454211563258 0.0012592386825828114)"
  />
</g>
`);
    });

    it('updates animation after request animation frame with negative bound velocity', () => {
      const { container } = render(<Dots velocity={-1.1} />);

      jest.runOnlyPendingTimers();

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(31 32)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(0 27.333333331333325)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(62 27)"
  />
</g>
`);

      // Requestion animation with 1000 MS delay
      requestAnimationFrame.mock.calls[0][0](1000);

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(0 27)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(62 27)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(31.794871928777127 27.642802459962635)"
  />
</g>
`);
    });

    it('updates animation after request animation frame with positive bound velocity', () => {
      const { container } = render(<Dots velocity={1.1} />);

      jest.runOnlyPendingTimers();

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(31 32)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(0 27.333333331333325)"
  />
  <circle
    class=""
    cx="9"
    cy="9"
    r="9"
    transform="translate(62 27)"
  />
</g>
`);

      // Requestion animation with 1000 MS delay
      requestAnimationFrame.mock.calls[0][0](1000);

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
<g
  fill="currentColor"
>
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(0.27517054399062246 27)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(24.64102564285995 7.5914048384185335)"
  />
  <circle
    class="styled-elements__DotsCircle-sc-19dhio6-0 gEjoef"
    cx="9"
    cy="9"
    r="9"
    transform="translate(62 27)"
  />
</g>
`);
    });
  });
});
