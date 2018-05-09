`Avatars` are meant to consume `svg` and `img` elements, but are able to apply
their styling to any element they are provided.

`Avatars` are hidden for small `Tags`.

```jsx
const PersonIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/person.svg');

<Grid columns={3} stretched>
  <Tag size="small">
    <Avatar>
      <img src="images/amir.png" alt="This is a hidden avatar due to the small size" />
    </Avatar>
    Small avatar
    <Close />
  </Tag>
  <Tag>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Default avatar
    <Close />
  </Tag>
  <Tag size="large">
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Large avatar
    <Close />
  </Tag>
  <Tag size="small" pill>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Small avatar
    <Close />
  </Tag>
  <Tag pill>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Default avatar
    <Close />
  </Tag>
  <Tag size="large" pill>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Large avatar
    <Close />
  </Tag>
  <Tag size="small" pill dark>
    <Avatar>
      <PersonIcon alt="Example Avatar" />
    </Avatar>
    Small avatar
    <Close />
  </Tag>
  <Tag pill dark>
    <Avatar>
      <PersonIcon alt="Example Avatar" />
    </Avatar>
    Default avatar
    <Close />
  </Tag>
  <Tag size="large" pill dark>
    <Avatar>
      <PersonIcon alt="Example Avatar" />
    </Avatar>
    Large avatar
    <Close />
  </Tag>
</Grid>;
```
