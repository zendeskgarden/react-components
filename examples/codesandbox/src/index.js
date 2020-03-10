import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@zendeskgarden/react-theming';

/** Some opinionated style resets for Zendesk products. Optional. */
import '@zendeskgarden/css-bedrock';

/** Local components */
import ExampleWrapper from './components/ExampleWrapper';
import Example from './examples/Example';

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
