Basic tooltip:
```
<Grid>
  <View style={{ margin: 10}}>
    <Tooltip
      left={10}
      top={10}
      content='This is a tooltip with some text.'
      inline
    />
  </View>
</Grid>
```
Positioning:
```
<Grid>
  <Button title='Just a basic tooltip' tooltipPositioning={['top']}>Top</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['bottom']}>Bottom</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['right']}>Right</Button>
  <Button title='Just a basic tooltip' tooltipPositioning={['left']}>Left</Button>
  <Button title='Just a basic tooltip'>Adaptive</Button>
</Grid>
```

## How to enable tooltips

Tooltips should be used implicitly via props on the trigger-components, rather than instantiated directly.
They are rendered in a different render-origin than the application from which they are triggered.
To enable tooltips in your application, you must create a TooltipManager.

### Creating the Tooltip Manager

To create the tooltip manager, simply call its instantiation function and pass as argument the target node in which you would like the tooltips to be rendered:

```javascript
import { createTooltipManager } from 'zd-react-components'

const tooltipManager = createTooltipManager(document.getElementById('my-tooltips'))
```
#

The tooltip manager will attach itself to the `window` object and expose an API to show and hide tooltips.
It can also be referenced directly, however, as it is returned from `createTooltipManager()`, as shown in the example.

### The Tooltip Manager API

Showing a tooltip:

```javascript
// anchor: HTMLElement
// content: String
// positions: Array
tooltipManager.show(
  document.getElementById('my-button'),
  'This button can be clicked',
  ['top', 'bottom']
)
```
#

Hiding tooltips:

```javascript
tooltipManager.hide()
```
#
