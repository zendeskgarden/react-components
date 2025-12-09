/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const ALIGN_ITEMS = ['start', 'end', 'center', 'baseline', 'stretch'];
const ALIGN_SELF = ['auto', ...ALIGN_ITEMS];
const DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'];
const JUSTIFY_CONTENT = ['start', 'end', 'center', 'between', 'around'];
const TEXT_ALIGN = ['start', 'end', 'center', 'justify'];
const SPACE = [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
const ORIENTATION = ['top', 'bottom', 'start', 'end'];

export { ALIGN_ITEMS, ALIGN_SELF, DIRECTION, JUSTIFY_CONTENT, ORIENTATION, SPACE, TEXT_ALIGN, WRAP };
