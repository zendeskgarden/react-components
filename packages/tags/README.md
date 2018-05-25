# @zendeskgarden/react-tags [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tags.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tags)

This package includes components relating to tags in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tags
```

## Usage

```jsx static
import Tag from '@zendeskgarden/react-tags/Tag';
import Avatar from '@zendeskgarden/react-tags/Avatar';
import Close from '@zendeskgarden/react-tags/Close';

<Tag pill>
  <Avatar>
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
  Default tag with avatar
  <Close onClick={() => alert('remove tag')} />
</Tag>;
```
