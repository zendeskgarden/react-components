/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export type TYPE_ALIGN_CONTENT = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
export const ARRAY_ALIGN_CONTENT: Array<TYPE_ALIGN_CONTENT> = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'stretch'
];

export type TYPE_ALIGN_ITEMS = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export const ARRAY_ALIGN_ITEMS: Array<TYPE_ALIGN_ITEMS> = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch'
];

export type TYPE_ALIGN_SELF = 'auto' | TYPE_ALIGN_ITEMS;
export const ARRAY_ALIGN_SELF: Array<TYPE_ALIGN_SELF> = [
  'auto',
  'start',
  'end',
  'center',
  'baseline',
  'stretch'
];

export type TYPE_JUSTIFY_CONTENT = 'start' | 'end' | 'center' | 'between' | 'around';
export const ARRAY_JUSTIFY_CONTENT: Array<TYPE_JUSTIFY_CONTENT> = [
  'start',
  'end',
  'center',
  'between',
  'around'
];

export type TYPE_NUMBER = number | string;

export type TYPE_SPACE = false | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const ARRAY_SPACE: Array<TYPE_SPACE> = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
