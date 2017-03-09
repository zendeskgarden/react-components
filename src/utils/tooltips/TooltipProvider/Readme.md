Use the TooltipProvider to enable tooltips on your components.

```
<TooltipProvider id='example-tooltips'>
  <Button title='This is a tooltip!'>Hover to trigger</Button>
</TooltipProvider>
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
// positions: Array
tooltipManager.show(
  document.getElementById('my-button'),
  'This button can be clicked',
  ['top', 'bottom']
)
```
**Hiding tooltips:**

```javascript
tooltipManager.hide()
```
#
