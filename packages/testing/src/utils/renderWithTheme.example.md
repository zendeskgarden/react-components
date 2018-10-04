Signature:

- `renderWithTheme(reactNode, { rtl: boolean, theme: object, enzymeOptions: object })`

```jsx static
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';
import { renderWithTheme } from '@zendeskgarden/react-testing';

const TabsExample = (
  <Tabs>
    <TabPanel label="Tab 1" key="tab-1">
      Tab 1 content
    </TabPanel>
    <TabPanel label="Tab 2" key="tab-2">
      Tab 2 content
    </TabPanel>
  </Tabs>
);

const RtlTabs = renderWithTheme(TabsExample, { rtl: true });
```
