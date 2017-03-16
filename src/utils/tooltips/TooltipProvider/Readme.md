Use the TooltipProvider to enable tooltips on your components.

```
<TooltipProvider id='example-tooltips'>
  <Button title='This is a tooltip!'>Hover to trigger</Button>
</TooltipProvider>
```

With `dir` set to `"rtl"`

```
<TooltipProvider id='example-tooltips' dir='rtl'>
  <Button title='This tooltip flows left even though positioning states right!' tooltipPositioning='right'>
    Hover to trigger
  </Button>
</TooltipProvider>
```

Controlling z-depth via `zIndex`

```
<View>
  <View style={{position: 'relative', height: 40}}>
    <View style={{position: 'absolute', zIndex: 300}}>
      <Label Label type='success'>z-index 300</Label>
    </View>
    <View style={{position: 'absolute', zIndex: 100, left: 90}}>
      <Label type='default'>z-index 100</Label>
    </View>
  </View>
  <TooltipProvider zIndex={200}>
    <Button title='z-index 200'>Hover to trigger</Button>
  </TooltipProvider>
</View>
```

## Using tooltips without the TooltipProvider

Tooltips should be used implicitly via props on the trigger-components, rather than instantiated directly.
They are rendered in a different render-origin than the application from which they are triggered.
As soon as you wrap your components with the `TooltipProvider` component, any supported component with a `title` property will spawn tooltips when hovered.

It is, however, possible to trigger tooltips directly on an ad-hoc basis by utilizing the API that the `View` component implements internally.

### Creating a Tooltip Manager

To create a Tooltip Manager, simply call its instantiation function and pass as argument the target node in which you would like the tooltips to be rendered.

**Tip:** If you are already using `TooltipProvider` in your application, it will have created an element for you with an `id` that matches the `id` prop that was specified for the provider. I.e. you can reuse that container element.

```javascript
import { createTooltipManager } from 'zd-react-components'

const tooltipManager = createTooltipManager(document.getElementById('my-tooltips'))
```

The Tooltip Manager will expose an API to show and hide tooltips:

**Showing a tooltip:**

```javascript
// anchor: HTMLElement
// content: String
// positions (optional): Array
const tooltipId = tooltipManager.show(
  document.getElementById('my-button'),
  'This button can be clicked',
  ['top', 'bottom']
)
```
**Hiding tooltips:**

```javascript
// tooltipId (optional): Number (Allows for hiding specific tooltips by their ID. If unspecified, any tooltip on-screen will be hidden.)
tooltipManager.hide(tooltipId)
```

### Configuring the Tooltip Manager

`createTooltipManager` takes an `options` object as its second parameter.
Via this, you can configure specifics about the behavior of your tooltips.
Currently the following properties are available (default values shown):

```javascript
const options = {
  dir: 'ltr' // Controls the direction of the tooltip. One of 'rtl' or 'ltr'.
  zIndex: 600 // Controls the z-index style rule applied to the tooltip container.
}

const tooltipManager = createTooltipManager(myNode, options)
```
