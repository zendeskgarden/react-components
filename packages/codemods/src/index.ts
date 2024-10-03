/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { execute as v8ToV9Codemods, default as v8ToV9Command } from './v8-v9';
import * as v8ToV9Transforms from './v8-v9/transforms';

const commands = { v8ToV9: v8ToV9Codemods, v8ToV9Command };

export { commands as default, v8ToV9Codemods, v8ToV9Transforms };
