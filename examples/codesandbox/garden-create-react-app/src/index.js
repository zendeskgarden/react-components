import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@zendeskgarden/react-theming';

/** Local components */
import ExampleWrapper from './components/ExampleWrapper';
import Example from './examples/Example';

/** Global styling */
import './global-styling.js';

function App() {
  return (
    <ThemeProvider>
      <ExampleWrapper>
        <Example />
      </ExampleWrapper>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
