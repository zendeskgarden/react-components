"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[1041],{"./packages/forms/demo/radio.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{controlled:()=>controlled,default:()=>radio_stories,uncontrolled:()=>uncontrolled});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),Radio=__webpack_require__("./packages/forms/src/elements/Radio.tsx"),Field=__webpack_require__("./packages/forms/src/elements/common/Field.tsx"),Label=__webpack_require__("./packages/forms/src/elements/common/Label.tsx"),Hint=__webpack_require__("./packages/forms/src/elements/common/Hint.tsx"),Message=__webpack_require__("./packages/forms/src/elements/common/Message.tsx"),FieldStory=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./packages/forms/demo/stories/FieldStory.tsx")),common=__webpack_require__("./packages/forms/demo/stories/common.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioStory=_ref=>{let{hasLabel=!0,...args}=_ref;return(0,jsx_runtime.jsx)(FieldStory.f,{hasLabel:!1,hasHint:!1,hasMessage:!1,children:(0,jsx_runtime.jsxs)(Radio.Y,{...args,children:[(0,common.fA)({hasLabel,...args}),(0,common.iQ)(args),(0,common.F$)(args)]})})};RadioStory.displayName="RadioStory";var README=__webpack_require__("./packages/forms/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Forms/Radio",component:Radio.Y,subcomponents:{Field:Field.g,Label:Label._,Hint:Hint.k,Message:Message.v},args:{...common.km,hasHint:!1},argTypes:{disabled:{control:"boolean"},...common.w$},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20262"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Uncontrolled",children:args=>(0,jsx_runtime.jsx)(RadioStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Controlled",args:{checked:!1},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(RadioStory,{...args,onChange:event=>updateArgs({checked:!0})})}})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(RadioStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.parameters={storySource:{source:"args => <RadioStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(RadioStory,{...args,onChange:event=>updateArgs({checked:!0})})};controlled.storyName="Controlled",controlled.args={checked:!1},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = event => updateArgs({\n    checked: true\n  });\n  return <RadioStory {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Forms/Radio",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20262"}},component:Radio.Y,subcomponents:{Field:Field.g,Label:Label._,Hint:Hint.k,Message:Message.v},args:{...common.km,hasHint:!1},argTypes:{disabled:{control:"boolean"},...common.w$},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const radio_stories=componentMeta}}]);