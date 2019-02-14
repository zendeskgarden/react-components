The `Anchor` component is a styled `<a>` tag. It accepts all standard anchor props and should
only be used for navigating to a resource.

If you need a `<button>` that has anchor styling, use the
`<Button link>Anchor styled button</Button>` component.

<!-- markdownlint-disable -->
<!-- prettier-ignore -->
```jsx
<div>
  Apparently we had reached a great height in the
  <Anchor href="#button">
    atmosphere
  </Anchor>, for the sky was a dead black, and the stars had ceased to twinkle. By the same
  <Anchor href="https://www.zendesk.com" target="_blank" external>
    illusion which lifts the horizon
  </Anchor>
  {' '} of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and
  the car seemed to float in the middle of an
  <Anchor href="https://www.zendesk.com" target="_blank" external>
    immense dark sphere
  </Anchor>
  , whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a
  <Anchor href="#chevronbutton">
    ruddy light streaming
  </Anchor>{' '}
  through a rift in the clouds.
</div>
```

### External Anchor Sizing

```jsx
const { SM, MD, LG, XL, XXL } = require('@zendeskgarden/react-typography');

<div>
  <SM>
    <Anchor href="https://www.zendesk.com" target="_blank" external>
      External Anchor
    </Anchor>
  </SM>
  <MD>
    <Anchor href="https://www.zendesk.com" target="_blank" external>
      External Anchor
    </Anchor>
  </MD>
  <LG>
    <Anchor href="https://www.zendesk.com" target="_blank" external>
      External Anchor
    </Anchor>
  </LG>
  <XL>
    <Anchor href="https://www.zendesk.com" target="_blank" external>
      External Anchor
    </Anchor>
  </XL>
  <XXL>
    <Anchor href="https://www.zendesk.com" target="_blank" external>
      External Anchor
    </Anchor>
  </XXL>
</div>;
```

<!-- markdownlint-enable -->
