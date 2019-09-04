/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* Globals */
declare const PACKAGE_VERSION: string;

/** React packages */
declare module '@zendeskgarden/container-selection';
declare module '@zendeskgarden/container-utilities' {
  interface IKeyCodes {
    ALT: 18;
    BACKSPACE: 8;
    COMMA: 188;
    DELETE: 46;
    DOWN: 40;
    END: 35;
    ENTER: 13;
    ESCAPE: 27;
    HOME: 36;
    LEFT: 37;
    NUMPAD_ADD: 107;
    NUMPAD_DECIMAL: 110;
    NUMPAD_DIVIDE: 111;
    NUMPAD_ENTER: 108;
    NUMPAD_MULTIPLY: 106;
    NUMPAD_SUBTRACT: 109;
    PAGE_DOWN: 34;
    PAGE_UP: 33;
    PERIOD: 190;
    RIGHT: 39;
    SHIFT: 16;
    SPACE: 32;
    TAB: 9;
    UP: 38;
  }

  export const KEY_CODES: IKeyCodes;
}
declare module '@zendeskgarden/react-buttons';
declare module '@zendeskgarden/react-grid';

/** Files */
declare module '*.svg';
declare module '*.css';
declare module '*.md';

/** CSS packages */
declare module '@zendeskgarden/css-menus';
declare module '@zendeskgarden/css-forms';
declare module '@zendeskgarden/css-arrows';
