"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[3197],{"./packages/tags/demo/tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>tag_stories,tag:()=>tag});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Tag=__webpack_require__("./packages/tags/src/elements/Tag.tsx"),TagStory=__webpack_require__("./packages/tags/demo/stories/TagStory.tsx");const README_namespaceObject="# @zendeskgarden/react-tags [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tags)](https://www.npmjs.com/package/@zendeskgarden/react-tags)\n\nThis package includes components relating to tags in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-tags\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Tag } from '@zendeskgarden/react-tags';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Tag pill>\n    <Tag.Avatar>\n      <img alt=\"\" src=\"images/user.png\" />\n    </Tag.Avatar>\n    Example User\n    <Tag.Close\n      aria-label=\"press delete to remove Example User tag\"\n      onClick={() => alert('remove tag')}\n    />\n  </Tag>\n</ThemeProvider>;\n```\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Tags/Tag",component:Tag.V,subcomponents:{"Tag.Avatar":Tag.V.Avatar,"Tag.Close":Tag.V.Close}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Tag",args:{children:"Tag",hasAvatar:!1,hasClose:!1,closeAriaLabel:"Label"},argTypes:{hue:{control:"color"},hasAvatar:{name:"Tag.Avatar",table:{category:"Story"}},hasClose:{name:"Tag.Close",table:{category:"Story"}},closeAriaLabel:{name:"aria-label",table:{category:"Tag.Close"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A118"}},children:args=>(0,jsx_runtime.jsx)(TagStory.R,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject})]})}const tag=args=>(0,jsx_runtime.jsx)(TagStory.R,{...args});tag.storyName="Tag",tag.argTypes={hue:{control:"color"},hasAvatar:{name:"Tag.Avatar",table:{category:"Story"}},hasClose:{name:"Tag.Close",table:{category:"Story"}},closeAriaLabel:{name:"aria-label",table:{category:"Tag.Close"}}},tag.args={children:"Tag",hasAvatar:!1,hasClose:!1,closeAriaLabel:"Label"},tag.parameters={storySource:{source:"args => <TagStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A118"}};const componentMeta={title:"Packages/Tags/Tag",component:Tag.V,subcomponents:{"Tag.Avatar":Tag.V.Avatar,"Tag.Close":Tag.V.Close},tags:["stories-mdx"],includeStories:["tag"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const tag_stories=componentMeta}}]);