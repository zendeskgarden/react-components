/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export type ALIGN_ITEMS = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export const ARRAY_ALIGN_ITEMS: Array<ALIGN_ITEMS> = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch'
];

export type ALIGN_SELF = 'auto' | ALIGN_ITEMS;
export const ARRAY_ALIGN_SELF: Array<ALIGN_SELF> = [
  'auto',
  'start',
  'end',
  'center',
  'baseline',
  'stretch'
];

export type DIRECTION = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export const ARRAY_DIRECTION: Array<DIRECTION> = ['row', 'row-reverse', 'column', 'column-reverse'];

export type JUSTIFY_CONTENT = 'start' | 'end' | 'center' | 'between' | 'around';
export const ARRAY_JUSTIFY_CONTENT: Array<JUSTIFY_CONTENT> = [
  'start',
  'end',
  'center',
  'between',
  'around'
];

export type GRID_NUMBER = number | string;
export type BREAKPOINT = GRID_NUMBER | boolean;

export type SPACE = false | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const ARRAY_SPACE: Array<SPACE> = [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export type WRAP = 'nowrap' | 'wrap' | 'wrap-reverse';
export const ARRAY_WRAP: Array<WRAP> = ['nowrap', 'wrap', 'wrap-reverse'];
