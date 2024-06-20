/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

// Styled-Component setup
import 'jest-styled-components';

import '@testing-library/jest-dom';

/* eslint-disable n/prefer-global/text-encoder */
import { TextEncoder } from 'node:util';

global.TextEncoder = TextEncoder;
