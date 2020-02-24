/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

/** Global CSS */
import '@zendeskgarden/css-bedrock/dist/index.css';

const App = () => (
  <ThemeProvider>
    <div>
      <h1>Hello world!</h1>
      <Button>Garden Button</Button>
    </div>
  </ThemeProvider>
);

App.displayName = 'App';

export default App;
