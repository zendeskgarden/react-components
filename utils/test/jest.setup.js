/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

// Add jest extension methods for jasmine
import 'jest-enzyme';

// Styled-Component setup
import 'jest-styled-components';

import 'jest-dom/extend-expect';

// Setup enzyme's react adapter
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

// Enable async/await
import '@babel/polyfill';
