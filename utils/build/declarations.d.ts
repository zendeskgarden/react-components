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

  export const composeEventHandlers: any;
}
declare module '@zendeskgarden/react-theming';
declare module '@zendeskgarden/react-buttons';
declare module '@zendeskgarden/react-grid';

/** Files */
declare module '*.svg';
declare module '*.css';
declare module '*.md';

/** CSS packages */
declare module '@zendeskgarden/css-variables' {
  export const zdColorBlack: string;
  export const zdColorGreen100: string;
  export const zdColorGreen200: string;
  export const zdColorGreen300: string;
  export const zdColorGreen400: string;
  export const zdColorGreen500: string;
  export const zdColorGreen600: string;
  export const zdColorGreen700: string;
  export const zdColorGreen800: string;
  export const zdColorGrey100: string;
  export const zdColorGrey200: string;
  export const zdColorGrey300: string;
  export const zdColorGrey400: string;
  export const zdColorGrey500: string;
  export const zdColorGrey600: string;
  export const zdColorGrey700: string;
  export const zdColorGrey800: string;
  export const zdColorBlue100: string;
  export const zdColorBlue200: string;
  export const zdColorBlue300: string;
  export const zdColorBlue400: string;
  export const zdColorBlue500: string;
  export const zdColorBlue600: string;
  export const zdColorBlue700: string;
  export const zdColorBlue800: string;
  export const zdColorKale100: string;
  export const zdColorKale200: string;
  export const zdColorKale300: string;
  export const zdColorKale400: string;
  export const zdColorKale500: string;
  export const zdColorKale600: string;
  export const zdColorKale700: string;
  export const zdColorKale800: string;
  export const zdColorRed100: string;
  export const zdColorRed200: string;
  export const zdColorRed300: string;
  export const zdColorRed400: string;
  export const zdColorRed500: string;
  export const zdColorRed600: string;
  export const zdColorRed700: string;
  export const zdColorRed800: string;
  export const zdColorYellow100: string;
  export const zdColorYellow200: string;
  export const zdColorYellow300: string;
  export const zdColorYellow400: string;
  export const zdColorYellow500: string;
  export const zdColorYellow600: string;
  export const zdColorYellow700: string;
  export const zdColorYellow800: string;
  export const zdColorWhite: string;
  export const zdColorSecondaryAzure400: string;
  export const zdColorSecondaryAzure600: string;
  export const zdColorSecondaryCrimson400: string;
  export const zdColorSecondaryCrimson600: string;
  export const zdColorSecondaryFuschia400: string;
  export const zdColorSecondaryFuschia600: string;
  export const zdColorSecondaryLemon400: string;
  export const zdColorSecondaryLemon600: string;
  export const zdColorSecondaryLime400: string;
  export const zdColorSecondaryLime600: string;
  export const zdColorSecondaryMint400: string;
  export const zdColorSecondaryMint600: string;
  export const zdColorSecondaryOrange400: string;
  export const zdColorSecondaryOrange600: string;
  export const zdColorSecondaryPink400: string;
  export const zdColorSecondaryPink600: string;
  export const zdColorSecondaryPurple400: string;
  export const zdColorSecondaryPurple600: string;
  export const zdColorSecondaryRoyal400: string;
  export const zdColorSecondaryRoyal600: string;
  export const zdColorSecondaryTeal400: string;
  export const zdColorSecondaryTeal600: string;
  export const zdColorSecondaryAzureM400: string;
  export const zdColorSecondaryAzureM600: string;
  export const zdColorSecondaryCrimsonM400: string;
  export const zdColorSecondaryCrimsonM600: string;
  export const zdColorSecondaryFuschiaM400: string;
  export const zdColorSecondaryFuschiaM600: string;
  export const zdColorSecondaryLemonM400: string;
  export const zdColorSecondaryLemonM600: string;
  export const zdColorSecondaryLimeM400: string;
  export const zdColorSecondaryLimeM600: string;
  export const zdColorSecondaryMintM400: string;
  export const zdColorSecondaryMintM600: string;
  export const zdColorSecondaryOrangeM400: string;
  export const zdColorSecondaryOrangeM600: string;
  export const zdColorSecondaryPinkM400: string;
  export const zdColorSecondaryPinkM600: string;
  export const zdColorSecondaryPurpleM400: string;
  export const zdColorSecondaryPurpleM600: string;
  export const zdColorSecondaryRoyalM400: string;
  export const zdColorSecondaryRoyalM600: string;
  export const zdColorSecondaryTealM400: string;
  export const zdColorSecondaryTealM600: string;
  export const zdColorChatOrange: string;
  export const zdColorConnectRed: string;
  export const zdColorExploreBlue: string;
  export const zdColorGuidePink: string;
  export const zdColorMessageGreen: string;
  export const zdColorSellGold: string;
  export const zdColorSupportGreen: string;
  export const zdColorTalkYellow: string;
  export const zdFontFamilyMonospace: string;
  export const zdFontFamilySystem: string;
  export const zdFontSizeSm: string;
  export const zdFontSizeMd: string;
  export const zdFontSizeLg: string;
  export const zdFontSizeXl: string;
  export const zdFontSizeXxl: string;
  export const zdFontSizeXxxl: string;
  export const zdFontSizeSmMonospace: string;
  export const zdFontSizeMdMonospace: string;
  export const zdFontSizeLgMonospace: string;
  export const zdFontWeightThin: string;
  export const zdFontWeightExtralight: string;
  export const zdFontWeightLight: string;
  export const zdFontWeightRegular: string;
  export const zdFontWeightMedium: string;
  export const zdFontWeightSemibold: string;
  export const zdFontWeightBold: string;
  export const zdFontWeightExtrabold: string;
  export const zdFontWeightBlack: string;
  export const zdFontWeightUltralight: string;
  export const zdFontWeightUltrabold: string;
  export const zdFontWeightHeavy: string;
  export const zdLineHeightSm: string;
  export const zdLineHeightMd: string;
  export const zdLineHeightLg: string;
  export const zdLineHeightXl: string;
  export const zdLineHeightXxl: string;
  export const zdLineHeightXxxl: string;
  export const zdSpacingXxs: string;
  export const zdSpacingXs: string;
  export const zdSpacingSm: string;
  export const zdSpacing: string;
  export const zdSpacingLg: string;
  export const zdSpacingXl: string;
  export const zdSpacingXxl: string;
}
declare module '@zendeskgarden/css-menus';
declare module '@zendeskgarden/css-forms';
declare module '@zendeskgarden/css-arrows';
