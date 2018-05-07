# @zendesk/garden-react-tags

This package includes components relating to tags in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendesk/garden-react-tags
```

## Usage

```jsx static
import Tag from '@zendesk/garden-react-tags/Tag';
import Avatar from '@zendesk/garden-react-tags/Avatar';
import Close from '@zendesk/garden-react-tags/Close';

<Tag pill>
  <Avatar>
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
  Default tag with avatar
  <Close onClick={() => alert('remove tag')} />
</Tag>
```
